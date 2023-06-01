import React, { useState, useEffect } from 'react';
import { Navigate, Link, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import { object, string } from "yup";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import http from '../../api/http';
import Input from '../common/Input';
import './Login.css';


export default function Login() {
  const [authenticated, setauthenticated] = useState(null);

  const navigate = useNavigate();

  const LoginValidation = object().shape({
    username: string()
                      .required("username is required"),
    password: string()
                      .required("password is required")
  })

  useEffect(() => {
    const loggedInUser = localStorage.getItem("access");
    if (loggedInUser) {
        setauthenticated(loggedInUser);
    }
  }, []);

  const submitHandler = (event) => {
    console.log(event)

    // Send a POST request to the API endpoint with the form data (event)
    http
        .post('http://127.0.0.1:8000/api/auth/login/', event)
        .then((response) => {
          // Save the refresh & access token to local storage
          localStorage.setItem("access", response.data.access)
          localStorage.setItem("refresh", response.data.refresh)
          // localStorage.setItem("user_name", event.username)
          navigate('/');
        })
        .catch((error) => {
          console.error(Object.entries(error.response.data))
          toast.error(`Login failed. ${error.response.data.detail}`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        })
  };


  //Authenticated (logged in) user cant access login page
  if (authenticated) {
    return <Navigate replace to="/" />;
  } 

  return( 
    <>
      <ToastContainer />
      <Formik
        initialValues={{
            username: "",
            password: "",
        }}
        onSubmit={(e) => submitHandler(e)}
        validationSchema={LoginValidation}
      >
        {() => {
          return (
            <Form className='input'>
              <div>
              <Input type="text" name="username" label="Username"/>
              <Input type="password" name="password" label="Password"/>
              <button type="submit">Login</button>    
              </div>
              <p className='center_input'>Don't have an account? </p>
              <p> <Link to="/register" className="center_link">Register</Link></p>
            </Form>
          );
        }}
      </Formik>
    </>
  )
}



import React from "react";

import http from "../http";

// Getting all countries from api
export const getAllCountries = async () => {
  try {
    const response = await 
      // using http for permissions check
      http
        .get('http://127:0.0.1:8000/api/countries/');
    return response.data;

    // return error if api call fails
  } catch (error) {
    console.error(error);
    return { error: error.message };
  }
};

// Getting country from api
export const getCountryByID = async (id) => {
  try {
    const response = await 
      // using http for permissions check
      http
        .get(`http://127:0.0.1:8000/api/countries/${id}`);
    return response.data;

    // return error if api call fails
  } catch (error) {
    console.error(error);
    return { error: error.message };
  }
};



// Update country by passing ID
export const updateCountry = async (id) => {
  try {
    const response = await 
      // using http for permissions check
      http
        .put(`http://127:0.0.1:8000/api/countries/${id}`);
    return response.data;
    
    // return error if api call fails
  } catch (error) {
    console.error(error);
    return { error: error.message };
  }
};



// Delete country by passing ID
export const deleteCountry = async (id) => {
  try {
    const response = await 
      // using http for permissions check
      http
        .delete(`http://127:0.0.1:8000/api/countries/${id}`);
    return response.data;

    // return error if api call fails
  } catch (error) {
    console.error(error);
    return { error: error.message };
  }
};



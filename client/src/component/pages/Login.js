import React, {useState, useEffect} from 'react';
import {
  MDBCard, 
  MDBCardBody, 
  MDBInput, 
  MDBCardFooter, 
  MDBValidation, 
  MDBBtn, 
  MDBIcon, 
  MDBSpinner
} from "mdb-react-ui-kit";
import {} from "react-router-dom";

const initialState = {
  email: "",
  password: ""
}

const login = () => {

  const [FormValue, setFormValue] = useState(initialState);

  const {email, password} = FormValue;

  return (
    <div className="min-vh-100 min-vw-100 d-flex flex-column justify-content-center align-items-center">
      <div className="container">
        <h1>Login Page</h1>
        <MDBCard>
          <MDBIcon fas icon="user-circle" className="fa-2px"/>
        </MDBCard>
      </div>
    </div>
  )
}

export default login
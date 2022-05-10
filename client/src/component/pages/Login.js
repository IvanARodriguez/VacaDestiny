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
import {Link} from "react-router-dom";
import vacationImage from "../../images/river.webp";

const initialState = {
  email: "",
  password: ""
}

const Login = () => {

  const [formValue, setFormValue] = useState(initialState);

  const {email, password} = formValue;

  const handleSubmit = (e) => {

    e.preventDefault();

  };

  const onInputChange = (e) => {

    let {name, value} = e.target;

    setFormValue({...formValue, [name]: value });
  };

  return (
    <div className="login_background min-vh-100 min-vw-100 d-flex justify-content-center align-items-center" style={{"max-width": "2700px;"}}>

        <div className="col-md-6 min-vh-100 bg-dark d-flex flex-column justify-content-center align-items-center login_box">

          <h1 className="display-5 text-white py-md-5">Welcome to <br/> Marca tu Ruta</h1>

          <div className="fit-content ">
            
            <MDBCard style={{"max-width": "450px"}} className="py-5">

              <MDBIcon fas icon="user-circle" className="fs-1"/>

              <h5>Sign In</h5>

              <MDBCardBody>

                <MDBValidation onSubmit={handleSubmit} noValidate className="row g-4 m-0">

                  <div className="col-md-12" >

                      <MDBInput 
                        label="Email" 
                        type="email" 
                        value={email} 
                        name="email" 
                        onChange={onInputChange} 
                        required 
                        invalid 
                        validation="PLease enter a valid email"/>

                  </div>

                  <div className="col-md-12 " >

                      <MDBInput 
                        label="Password" 
                        type="password" 
                        value={password} 
                        name="password" 
                        onChange={onInputChange} 
                        required 
                        invalid 
                        validation="PLease enter a valid password"/>

                  </div>

                  <div className="col-12">
                    <MDBBtn className="btn btn-warning w-100 mt-2">
                      Login
                    </MDBBtn>
                  </div>

                </MDBValidation>

              </MDBCardBody>


              <MDBCardFooter>

                <p>Don't have an account? <Link to="/register"> Sign Up </Link></p>

              </MDBCardFooter> 

            </MDBCard>

          </div>
        
        </div>

        <div className="col-md-6 min-vh-100">
        </div>

    </div>
  )
}

export default Login
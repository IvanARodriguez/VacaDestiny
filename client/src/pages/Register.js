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
import {Link, useNavigate} from "react-router-dom";
import { useDispatch, useSelector} from "react-redux";
import { toast } from "react-toastify";
import { register } from "../redux/features/authSlice";


const initialState = {
  firstName: "",
  lasNAme: "",
  email: "",
  password: "",
  confirmPassword:""
}

const Register = () => {

  const [formValue, setFormValue] = useState(initialState);
  const {loading, error} = useSelector((state) => ({...state.auth}));
  const {email, password, firstName, lastName, confirmPassword} = formValue;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  const handleSubmit = (e) => {
    
    e.preventDefault();

    if(password !== confirmPassword) {
      return toast.error("Password should match");
    }

    if(email && password && firstName && lastName && confirmPassword) {
      dispatch(register({formValue, navigate, toast}))
    }

  };

const onInputChange = (e) => {

    let {name, value} = e.target;

    setFormValue({...formValue, [name]: value });
  };

  return (
    <div className="register_background min-vh-100 min-vw-100 d-flex justify-content-center align-items-center" style={{"maxWidth": "2700px"}}>

        <div className="col-md-6 min-vh-100 bg-dark d-flex flex-column justify-content-center align-items-center login_box px-3">

          <h1 className="display-5 text-white py-md-5">Hello Adventurer</h1>

          <div className="fit-content ">
            
            <MDBCard style={{"maxWidth": "550px"}} className="py-5">

              <MDBIcon fas icon="user-circle" className="fs-1"/>

              <h5>Register</h5>

              <MDBCardBody>

                <MDBValidation onSubmit={handleSubmit} noValidate className="row g-4 m-0">

                  <div className="col-md-6" >

                    <MDBInput 
                      label="First Name" 
                      type="firstName" npm
                      value={firstName} 
                      name="firstName" 
                      onChange={onInputChange} 
                      required 
                      invalid 
                      validation="PLease enter a valid first name"/>

                  </div>

                  <div className="col-md-6" >

                    <MDBInput 
                      label="Last Name" 
                      type="lastName" 
                      value={lastName} 
                      name="lastName" 
                      onChange={onInputChange} 
                      required 
                      invalid 
                      validation="PLease enter a valid last name"/>

                  </div>

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

                  <div className="col-md-12 " >

                      <MDBInput 
                        label="Confirm password" 
                        type="password" 
                        value={confirmPassword} 
                        name="confirmPassword" 
                        onChange={onInputChange} 
                        required 
                        invalid 
                        validation="PLease enter a valid confirm password"/>

                  </div>

                  <div className="col-12">
                    <MDBBtn className="btn btn-warning w-100 mt-2">
                      {loading && (
                        <MDBSpinner 
                         size="sm"
                         role="status"
                         tag="span"
                         className="me-2"
                        />
                      )}
                      Register
                    </MDBBtn>
                  </div>

                </MDBValidation>

              </MDBCardBody>


              <MDBCardFooter>

                <p>Already have an account? <Link to="/login"> Signin </Link></p>

              </MDBCardFooter> 

            </MDBCard>

          </div>
        
        </div>

    </div>
  )
}

export default Register
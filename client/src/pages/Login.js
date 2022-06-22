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
import { login, googleSignIn} from "../redux/features/authSlice";
import { GoogleLogin } from 'react-google-login';


const initialState = {
  email: "",
  password: ""
}

const Login = () => {

  
  const [formValue, setFormValue] = useState(initialState);
  const {loading, error} = useSelector((state) => ({...state.auth}));
  const {email, password} = formValue;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  const handleSubmit = (e) => {
    
    e.preventDefault();

    if(email && password){
      dispatch(login({formValue, navigate, toast}))
    }

  };

  const onInputChange = (e) => {

      let {name, value} = e.target;

      setFormValue({...formValue, [name]: value });
  };

  
  const googleSuccess = (resp) => {
    const email = resp.profileObj.email;
    const name = resp.profileObj.name;
    const token = resp.tokenId;
    const googleId = resp.googleId;
    const result = {email, name, token, googleId};
    dispatch(googleSignIn({result, navigate, toast}))

  };

  const googleFailure = (error) => {
    toast.error(error);
  }

  return (
    
    <div className="login_background min-vh-100 min-vw-100 d-flex justify-content-center align-items-center" style={{"maxWidth": "2700px"}}>

        <div className="col-md-6 min-vh-100 bg-dark d-flex flex-column justify-content-center align-items-center login_box px-3">
          <h1 className="display-5 text-white py-md-5">Welcome Back</h1>
          <div className="fit-content ">
            <MDBCard style={{"maxWidth": "450px"}} className="py-5">
              <MDBIcon fas icon="user-circle" className="fs-1"/>
              <h5>Sign In</h5>
              <MDBCardBody>
                <MDBValidation onSubmit={handleSubmit} noValidate className="row g-4 m-0">
                  <div className="col-md-12 px-0" >
                      <MDBInput 
                        label="Email" 
                        type="email" 
                        value={email}
                        autoComplete="username"
                        name="email" 
                        onChange={onInputChange} 
                        required 
                        invalid 
                        validation="PLease enter a valid email"/>
                  </div>

                  <div className="col-md-12 px-0" >

                      <MDBInput 
                        label="Password" 
                        type="password" 
                        value={password}
                        autoComplete="current-password"
                        name="password" 
                        onChange={onInputChange} 
                        required 
                        invalid 
                        validation="PLease enter a valid password"/>

                  </div>

                  <div className="col-12 px-0">
                    <MDBBtn className="btn btn-warning w-100 mt-2">
                      {loading && (
                        <MDBSpinner 
                         size="sm"
                         role="status"
                         tag="span"
                         className="me-2"
                        />
                      )}
                      Login
                    </MDBBtn>
                  </div>
                </MDBValidation>

                <br />
                
                <GoogleLogin
                  clientId="310558676520-4r22vitm4hjsqrh4llvcui9phr491tpb.apps.googleusercontent.com"
                  render={(renderProps) => (
                    <MDBBtn 
                    className="btn w-100 col-12"
                    color="danger"
                    onClick={renderProps.onClick} 
                    disabled={renderProps.disabled}
                    >
                      <MDBIcon className="me-2" fab icon="google"/>Sign in with Google
                    </MDBBtn>
                  )}
                  onSuccess={googleSuccess}
                  onFailure={googleFailure}
                  cookiePolicy={"single_host_origin"}
                  u
                />

              </MDBCardBody>
              <MDBCardFooter>
                <p>Don't have an account? <Link to="/register"> Signup </Link></p>
              </MDBCardFooter> 
            </MDBCard>
          </div>
        </div>
    </div>
  )
}

export default Login
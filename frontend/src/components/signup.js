import "./signup.css";
import { Button, Grid, Link, TextField} from '@mui/material'
import { Formik } from "formik";
import app_config from "../config";
import { NavLink } from "react-router-dom";

const SignUp = () => {

const signupform ={
  username: '',
  email: '',
  password: '',
}

const url= app_config.api_url;

const signupSubmit =(values) =>{
  console.log(values);

const reqOpt ={
  method: 'POST',
  body: JSON.stringify(values),
  headers:{
    'Content-type':'application/json'
  },
};

fetch(url + "/user/add",reqOpt)
.then ((res ) => res.json())
.then ((data) =>{
  console.log (data);
  
});
};


  return (
    <div class="container-fluid mysignup">
      <div className="container mt-5 py-4 float-end">
        <div class="row">
          
          {/* <div class="col-md">
            <div class="img-back"></div>
          </div> */}

          <div class="col-sm-6 col-md col-lg col-lx" >
            <div className="card">
            <div class="card-body my-card-body">
              <p class="h3">New Create Account</p>
              <p class="text-muted">Sign Up to Continue</p>

              <hr />

            <Formik initialValues={signupform} onSubmit={signupSubmit}>
               {({values, handleSubmit,handleChange}) =>(
                   <form onSubmit={handleSubmit}>
                
                   <TextField
                    className="w-100 mt-5"
                    variant="filled"
                      id="email"
                      type="email"
                      label="Email"
                      onChange={handleChange}
                      value={values.email}
                    />
    
                    <TextField
                    className="w-100 mt-2"
                    variant="filled"
                      id="username"
                      type="text"
                      label="Username"
                      onChange={handleChange}
                      value={values.username}

                    />
    
                    
                    
                    <TextField
                    className="w-100 mt-2"
                    variant="filled"
                      id="password"
                      type="password"
                      label="Password"
                      onChange={handleChange}
                      value={values.password}
                    />
    
                    <Button type="submit" color="primary" variant="contained"className="mt-5 w-100" >SignUp </Button>
    
                    {/* <a
                      href="/"
                      class="text-muted mt-5"
                      style={{ display: "block" }}
                    >
                    Already Have an account?  
                    </a> */}

                    <Grid item xs className="mt-3">
              <NavLink to="signup" variant="body2 mt-3">
                Forgot password?
              </NavLink>
            </Grid>

            <Grid item className="mt-3 ">
              <NavLink to="/login" variant="body2 mt-3">
                {"Don't have an account? Sign Up"}
              </NavLink>
            </Grid>

            
                  </form>
               )
               }

            </Formik>

            </div>
            </div>
          </div>
        </div>
        </div>
    </div>
  );
};

export default SignUp;

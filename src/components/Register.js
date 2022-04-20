import React from "react";
import { Formik, Field, Form } from "formik";
import validationReg from './Yup/validationReg'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function Register() {
  return (
    <div>




      <Formik
        initialValues={{
        firstname: "",
        lastname: "",
        password:"",
        passwordConfirmation:""
        }}
        validationSchema={validationReg}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
          {({errors,touched})=>
          (
          <div className="form-wrapper">
            <h1>Register</h1>

<div className="content-wrapper" id="content-signin">
          <Form className="form-login">
            <Field
              type="text"
              name="firstname"
              placeholder="Firstname"
              className="input-firstname"
            />
            {errors.firstname && touched.firstname ? (<div className='empty'>{errors.firstname}</div>) : null}
            <Field
              type="text"
              name="lastname"
              placeholder="Lastname"
              className="input-lastname"
            />
            {errors.lastname && touched.lastname ? (<div className='empty'>{errors.lastname}</div>) : null}
           
            <Field
              type="password"
              name="password"
              placeholder="Password"
              className="input-password"
            />
            {errors.password && touched.password ? (<div className='empty'>{errors.password}</div>) : null}
            
            <Field
              type="password"
              name="passwordConfirmation"
              placeholder="Confirm password"
              className="input-password"
            /> 
            {errors.passwordConfirmation && touched.passwordConfirmation ? (<div className='empty'>{errors.passwordConfirmation}</div>) : null}
            
            <button type="submit" className="btn-login">
              SIGN UP
            </button>
          </Form>
          <p className="change">
            Got account? <Link to="/login">Sign in</Link>
          </p>
        </div>

          </div>
    

          )}
      
      </Formik>
   
    </div>
  
  
  );
}

export default Register;
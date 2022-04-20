import React from "react";
import { Formik, Field, Form } from "formik";
import validation from './Yup/Validation'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function Login() {
  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password:""
        }}
        validationSchema={validation}
        onSubmit={(values) => {
          console.log(values);
        }}
      >

        {
            ({errors,touched}) =>
            (

                <div className="form-wrapper" id="wrapper-login">
                <div className="content-wrapper" id="content-signin">
                  <h1>Login</h1>
                  <Form className="form-login">
                    <Field
                      type="email"
                      name="email"
                      placeholder="E-mail"
                      className="input-email"   
                    />
                      {errors.email && touched.email ? (<div className='empty'>{errors.email}</div>) : null}
                    <Field
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="input-password"
                    />
                    {errors.password && touched.password ? (<div className='empty'>{errors.password}</div>) : null}
                    <button type="submit" className="btn-login">
                      LOGIN
                    </button>
                  </Form>
                  <p className="change">
                    No account? <Link to="/register">Sign up</Link>
                  </p>
                </div>
              </div>

            )
        }


      </Formik>
    </div>
  );
}

export default Login;
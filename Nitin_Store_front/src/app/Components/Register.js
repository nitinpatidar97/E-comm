import React from 'react';
import { Link } from 'react-router-dom';
import LoginNav from './LoginNav';
import styled from 'styled-components';
import { useFormik } from 'formik';
import * as yup from 'yup';
import toast, { Toaster } from 'react-hot-toast';

const Register = () => {

  const registrationform = useFormik({
    initialValues: {
      name: "",
      username: "",
      email: "",
      password: "",
      c_password: "",
    },
    enableReinitialize: true,
    validationSchema: yup.object({
      name: yup.string().min(3).required("Please enter your name."),
      username: yup.string().min(3).required("Please enter your username."),
      email: yup.string().email("Invalid email address format").min(3).required("Please enter valid email address."),
      password: yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
      c_password: yup.string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
    }),
    onSubmit: async values => {
      console.log("🚀 ~ file: Register.js:35 ~ Register ~ values:", values);
    }
  })
  return (
    <Wrapper>
      <LoginNav />
      <div className='d-flex justify-content-center pt-5 contact-form'>
        <form className='registerformm contact-inputs' onSubmit={registrationform.handleSubmit}>
          <h3 className='text-center pb-4'>Register</h3>

          <div className="form-outline mb-2">
            <div className='row'>
              <div className='col-6'>
                <label className="form-label" htmlFor="registerName">Name</label>
                <input type="text" id="registerName" className="form-control" {...registrationform.getFieldProps("name")} />
                {
                  registrationform.touched.name && registrationform.errors.name ?
                    <div className="invalid-feedback" style={{ display: "block" }}>{registrationform.errors.name}</div> : ''
                }
              </div>
              <div className='col-6'>
                <label className="form-label" htmlFor="registerUsername" >Username</label>
                <input type="text" id="registerUsername" className="form-control" {...registrationform.getFieldProps("username")} />
                {
                  registrationform.touched.username && registrationform.errors.username ?
                    <div className="invalid-feedback" style={{ display: "block" }}>{registrationform.errors.username}</div> : ''
                }
              </div>
            </div>
          </div>

          <div className="form-outline mb-2">
            <label className="form-label" htmlFor="registerEmail">Email</label>
            <input type="email" id="registerEmail" className="form-control" {...registrationform.getFieldProps("email")} />
            {
              registrationform.touched.email && registrationform.errors.email ?
                <div className="invalid-feedback" style={{ display: "block" }}>{registrationform.errors.email}</div> : ''
            }
          </div>

          <div className="form-outline mb-2">
            <div className='row'>
              <div className='col-6'>
                <label className="form-label" htmlFor="registerPassword">Password</label>
                <input type="password" id="registerPassword" className="form-control" {...registrationform.getFieldProps("password")} />
                {
                  registrationform.touched.password && registrationform.errors.password ?
                    <div className="invalid-feedback" style={{ display: "block" }}>{registrationform.errors.password}</div> : ''
                }
              </div>
              <div className='col-6'>
                <label className="form-label" htmlFor="registerRepeatPassword">Confirm  password</label>
                <input type="password" id="registerRepeatPassword" className="form-control" {...registrationform.getFieldProps("c_password")} />
                {
                  registrationform.touched.c_password && registrationform.errors.c_password ?
                    <div className="invalid-feedback" style={{ display: "block" }}>{registrationform.errors.c_password}</div> : ''
                }
              </div>
            </div>
          </div>

          <div className="form-check d-flex align-items-baseline my-2">
            <input className="form-check-input me-2" type="checkbox" value="" id="registerCheck" defaultChecked
              aria-describedby="registerCheckHelpText" />
            <label className="form-check-label" htmlFor="registerCheck">
              I have read and agree to the terms.
            </label>
            <Link to="/login" className='ms-2'>Login</Link>
          </div>

          <input type="submit" className='w-100 mt-4' value="Register" />
        </form>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`

input, textarea{
    box-shadow: none;
    border-radius: 0;
  }
      .contact-form {
        max-width: 30rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;

          input, textarea{
            border: 1px solid ${({ theme }) => theme.colors.blue};
            padding:.2rem;
            text-transform: uppercase;
            box-shadow : none !important;
          }
        }
      }
      input[type="submit"] {
        cursor: pointer;
        transition: all 0.2s;
        background-color: rgb(98, 84, 243);
        color: rgb(255, 255, 255);
        padding: .5rem .5rem !important;
        border-style: solid;
        border-width: 0.1rem;
        text-transform: uppercase;
        font-size: 1.2rem;

        &:hover {
          background-color: ${({ theme }) => theme.colors.white};
          border: 1px solid ${({ theme }) => theme.colors.btn};
          color: ${({ theme }) => theme.colors.btn};
          transform: scale(0.9);
        }
      }
    }

    iframe{
      width:100% ;
      height:450px;
    }

    @media (max-width: ${({ theme }) => theme.media.tab}) {
      .contact-form {
        max-width: 40rem;
      }
      iframe{
        width:100% ;
        height:300px;
      }
        }
  `;

export default Register
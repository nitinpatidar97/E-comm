import React from 'react'
import { Link, json } from 'react-router-dom'
import LoginNav from './LoginNav'
import styled from 'styled-components'
import { useFormik } from 'formik'
import * as yup from 'yup';
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {

  const loginform = useFormik(
    {
      initialValues: {
        username: "",
        password: ""
      },
      enableReinitialize: true,
      validationSchema: yup.object({
        username: yup.string().min(3).required("Please enter username or email."),
        password: yup.string().min(5).required("Please enter password."),
      }),
      onSubmit: async values => {
        const data = JSON.stringify({
          email: values.username,
          password: values.password
        });

        let config = {
          method: 'post',
          maxBodyLength: Infinity,
          url: process.env.REACT_APP_API_URL + "login",
          headers: {
            'Content-Type': 'application/json'
          },
          data: data
        };
        const res = await axios.request(config);
        if (res.data.status) {
          toast.success(res.data.message);
        } else {
          toast.error(res.data.message);
        }
      }
    }
  )

  return (
    <Wrapper>
      <LoginNav />
      <div className='d-flex justify-content-center pt-5 contact-form'>
        <form className='loginformm contact-inputs' onSubmit={loginform.handleSubmit}>
          <h3 className='text-center pb-4'>Login</h3>

          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="username">Email or username</label>
            <input type="text" id="username" className="form-control" {...loginform.getFieldProps("username")} />
            {
              loginform.touched.username && loginform.errors.username ?
                <div className="invalid-feedback" style={{ display: "block" }}>{loginform.errors.username}</div> : ''
            }
          </div>

          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="password">Password</label>
            <input type="password" id="password" className="form-control" {...loginform.getFieldProps("password")} />
            {
              loginform.touched.password && loginform.errors.password ?
                <div className="invalid-feedback" style={{ display: "block" }}>{loginform.errors.password}</div> : ''
            }
          </div>

          <div className="row mb-4">
            <div className="col-md-6 d-flex justify-content-center align-items-baseline ">

              <div className="form-check mb-2 mb-md-0">
                <input className="form-check-input" type="checkbox" value="" id="loginCheck" defaultChecked />
                <label className="mt-0" htmlFor="loginCheck"> Remember me </label>
              </div>
            </div>

            <div className="col-md-6 d-flex justify-content-center">
              <Link to="">Forgot password?</Link>
            </div>
          </div>

          <input type="submit" className='w-100 mt-3' value="Login" />

          <div className="text-center mt-3">
            <p>Not a member? <Link to="/register">Register</Link></p>
          </div>
        </form>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`

input{
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

export default Login
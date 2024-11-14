import { useState } from "react";
import styled from "styled-components";

const Contact = () => {
  const [UserData, setUserData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const InputHendler = (e) => {
    setUserData({ ...UserData, [e.target.name]: e.target.value })
  }
  const SubmitForm = (e) => {
    e.preventDefault();
    setUserData({
      name: "",
      email: "",
      message: "",
    });
    console.log("User Data :", UserData)
  }

  return <Wrapper>
    <h3 className="my-5 fw-bold">CONTECT US</h3>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42742.45250412188!2d75.84824168269253!3d22.72703435996068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2z4KSH4KSo4KWN4KSm4KWM4KSwLCDgpK7gpKfgpY3gpK8g4KSq4KWN4KSw4KSm4KWH4KS2!5e0!3m2!1shi!2sin!4v1670471694851!5m2!1shi!2sin" style={{ "border": 0 }} allowFullScreen="" className="mb-5" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

    <div className="container">
      <div className="contact-form">
        <form onSubmit={(e)=>SubmitForm(e)} className="contact-inputs">
          <input type="text" name="name"  onChange={(e)=>InputHendler(e)} value={UserData.name}
            placeholder="Enter Your Name"
            autoComplete="off" required />

          <input type="email" name="email"  onChange={(e)=>InputHendler(e)} value={UserData.email}
            placeholder="Enter Your Email"
            autoComplete="off" required />

          <textarea name="message" onChange={(e)=>InputHendler(e)} value={UserData.message} placeholder="Message..." rows={5} required></textarea>
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  </Wrapper>;
};

const Wrapper = styled.section`
    text-align: center;
      .contact-form {
        max-width: 30rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 2rem;

          input, textarea{
            border: 1px solid ${({ theme }) => theme.colors.blue};
            padding:1rem;
            text-transform: uppercase;
          }
        }
      }
      input[type="submit"] {
        cursor: pointer;
        transition: all 0.2s;
        max-width: 11rem;
        background-color: rgb(98, 84, 243);
        color: rgb(255, 255, 255);
        padding: .7rem .5rem !important;
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

export default Contact;

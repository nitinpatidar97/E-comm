import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <Wrapper>
        <section className="contact-short">
          <div className="row px-4 d-flex justify-contant-between">
            <div className="col-sm-6">
              <h5>Ready to get started?</h5>
              <h5>Talk to us today</h5>
            </div>

            <div className="col-sm-6">
              <Button className="">
                <NavLink to="/"> Get Started </NavLink>
              </Button>
            </div>
          </div>
        </section>
        {/* footer section */}

        <footer>
          <div className="row d-flex justify-content-center m-0 px-5">
            <div className="col-sm-3 mb-5">
              <div className="footer-about">
                <h5>NITIN STORE</h5>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
              </div>
            </div>
            <div className="col-sm-4 mb-5">
              <div className="footer-subscribe">
                <h5>Subscribe to get important updates</h5>
                <form action="#">
                  <input type="email" name="email" placeholder="YOUR E-MAIL" />
                  <input type="submit" value="subscribe" />
                </form>
              </div>
            </div>
            <div className="col-sm-3 mb-5">
              <div className="footer-social">
                <h5>Follow Us</h5>
                <div className="footer-social--icons">
                  <div>
                    <FaDiscord className="icons" />
                  </div>
                  <div>
                  <a
                      href="https://www.instagram.com/nitin_patidar_np?igsh=ZHZ3NHB2NTFsNjZ6"
                      target="_blank">
                      <FaInstagram className="icons" />
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://www.youtube.com/@nitin3735"
                      target="_blank">
                      <FaYoutube className="icons" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-2 mb-5 text-end">
              <div className="footer-contact">
                <h5>Call Us</h5>
                <p>+91 12345678978</p>
              </div>
            </div>
          </div>

          <div className="footer-bottom--section">
            <hr />
            <div className="row px-5 m-0">
              <div className="col-sm-6">
                <p className="mb-5">
                  @{new Date().getFullYear()} NitinEcommerce. All Rights Reserved
                </p>
              </div>
              <div className="col-sm-6 text-end">
                <p>PRIVACY POLICY</p>
                <p>TERMS & CONDITIONS</p>
              </div>
            </div>
          </div>
        </footer>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .iSIFGq {
    margin: 0;
  }
  .contact-short {
    max-width: 60vw;
    text-align: center;
    margin: auto;
    padding: 2.5rem 1rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);

    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }

  footer {
    padding: 14rem 0 5rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h5 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 1.5rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
  }

  .footer-bottom--section {
    // padding-top: 9rem;

    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;

      .grid div:last-child {
        justify-self: center;
      }
    }

    footer {
      padding: 3rem 0 5rem 0;
    }

    .footer-bottom--section {
      padding-top: 4.8rem;
    }
  }

  input, textarea{
    max-width: 50rem;
    color: ${({ theme }) => theme.colors.black};
    padding: 1rem;
    border: 1px solid ${({ theme }) => theme.colors.border};
    text-transform: uppercase;
   box-shadow: ${({ theme }) => theme.colors.shadowSupport};
}
    input[type="submit"]{
    max-width: 16rem;
    background-color: ${({ theme }) => theme.colors.btn};
    color: ${({ theme }) => theme.colors.white};
    padding: 1rem;
    border-style: solid;
    border-width: .1rem;
    text-transform: uppercase;
    font-size: 1rem;
    cursor: pointer;
    }

    @media (max-width: 575px) {
      footer{
        padding: 4rem 0;
      }

      .footer-contact{
      text-align: start!important;
      }
      .footer-bottom--section{
        padding-top: 0rem !important;
      }
      h5{
        margin-bottom: 1rem !important;
      }
    }
`;

export default Footer;

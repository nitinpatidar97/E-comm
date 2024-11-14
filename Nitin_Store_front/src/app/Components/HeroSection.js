import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from '../styles/Button';
import styled from 'styled-components';


const HeroSection = ({ myData }) => {
    const { name } = myData;
    return (
        <>
            <Wapper className='container px-5 mt-5'>
                <div className="row pt-5 pt-sm-5 center">
                    <div className="col-sm-6">
                        <p className='welcome_para'>WELCOME TO</p>
                        <h1 className='fw-bold'>{name}</h1>
                        <p>Welcome to Tech Haven! Discover the latest in electronics with unbeatable prices and top-notch customer service. Your ultimate destination for cutting-edge gadgets and exceptional deals!</p>
                        <NavLink to='/products'>
                            <Button>shop now</Button>
                        </NavLink>
                    </div>
                    <div className="col-sm-6">
                        <figure className='center'>
                            <img
                                src="images/hero.jpg"
                                alt="hero-section-photo"
                                className="img-style"
                            />
                        </figure>
                    </div>
                </div>
            </Wapper>
        </>
    )
}

const Wapper = styled.section`
.welcome_para{
    margin :0;
    color : ${({ theme }) => theme.colors.btn};
} 
.hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;

    &::after {
      content: "";
      width: 70%;
      height: 80%;
      background-color: rgba(81, 56, 238, 0.4);
      position: absolute;
      left : 43%;
      top: -5rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
    height: auto;
  }

    figure::after {
      content: "";
      width: 70%;
      height: 100%;
      left: 100;
      top: -20%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .img-style {
        width: 104%;
        height: 24rem;
      }
    figure::after {
        height: 83%;
        left: 140;
        top: -14%;
      }
      }
  @media (max-width: 575px) {
    margin : 0;

    .img-style {
        width: 104%;
        height: 24rem;
      }
    figure::after {
        height: 83%;
        left: 140;
        top: -14%; 
      }
      }

      @media (max-width: 575px) {
        margin : 0 !important;
        figure{
            margin-top: 6rem;
        }

        .img-style {
            width: 90%;
          }
        figure::after {
            left: 32% !important;
            top: -11%; 
          }
      }

      @media (max-width: 350px) {
        margin : 0 !important;
        figure{
            margin-top: 6rem;
        }

        .img-style {
            width: 100%;
            height: 14rem;
          }
        figure::after {
            left: 38% !important;
          }
      }
        
`
export default HeroSection
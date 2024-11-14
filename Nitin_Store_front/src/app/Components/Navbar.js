import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../styles/Button';
import { FiShoppingCart } from "react-icons/fi";
import { useCartProduct } from '../Contaxt/CartContext';
import { useAuth0 } from '@auth0/auth0-react';
import { BiUserCircle } from "react-icons/bi"


const Navbar = () => {
    const { TotalCartItems } = useCartProduct();
    const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

    return (
        <>
            <MainHead className="navbar navbar-expand-lg mainNav">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">
                        <h4 className='fw-bold'>NITIN STORE</h4>
                    </NavLink>
                    <button className="navbar-toggler shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto d-flex mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">HOME</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="about">ABOUT</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="products">PRDUCTS</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="contact">CONTACT</NavLink>
                            </li>
                            {isAuthenticated && <li className="nav-item">
                                <NavLink className="nav-link" to="profile">PROFILE</NavLink>
                            </li>}
                            <li>
                                <NavLink to="cart" className="navbar-link cart-trolley--link mx-3 me-4">
                                    <FiShoppingCart className="cart-trolley" />
                                    <span className="cart-total--item"> {TotalCartItems} </span>
                                </NavLink>
                            </li>
                            {/* <li className="nav-item">
                                {
                                    isAuthenticated ? <Button className='px-4 py-2' onClick={() => logout({ returnTo: window.location.origin })}>
                                        LOGOUT
                                    </Button> : <Button className='px-4 py-2' onClick={() => loginWithRedirect()}>
                                        LOGIN
                                    </Button>
                                }
                            </li> */}
                            <li className="nav-item">
                                <NavLink to="login">
                                    <Button className='px-4 py-2'>
                                        LOGIN
                                    </Button>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </MainHead>
        </>
    )
}

const MainHead = styled.nav`
padding :1.2rem;
background-color: ${({ theme }) => theme.colors.bg};

.navbar-link {
    &:link,
    &:visited {
      display: inline-block;
      text-decoration: none;
      font-size: 1.3rem;
      font-weight: 500;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.black};
      transition: color 0.3s linear;
    }

    &:hover,
    &:active {
      color: ${({ theme }) => theme.colors.helper};
    }
  }
}

.cart-trolley--link {
    position: relative;
    
    .cart-trolley {
      position: relative;
      font-size: 2rem;
    }

    .cart-total--item {
      width: 1.5rem;
      height: 1.5rem;
      position: absolute;
      background-color: #000;
      color: #000;
      border-radius: 50%;
      font-size: 1rem;
      display: grid;
      place-items: center;
      top: -29%;
      left: 57%;
      background-color: ${({ theme }) => theme.colors.helper};
    }
  }

  @media (max-width: 575px) {
   li{
    margin .5rem 0;
    font-size :1.5rem;
   }
`;
export default Navbar;
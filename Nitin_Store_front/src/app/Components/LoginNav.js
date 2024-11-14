import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { MdClose } from 'react-icons/md'
import styled from 'styled-components'

const LoginNav = () => {
    return (
        <>
            <MainHead className="navbar navbar-expand-lg mainNav">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">
                        <h4 className='fw-bold'>NITIN STORE</h4>
                    </NavLink>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ms-auto d-flex mb-lg-0">
                            <li className="nav-item">
                                <Link to="/">
                                    <MdClose className='navclose' />
                                </Link>
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

.navclose{
    color : black;
    font-size: xx-large;
    font-weight: bold;

    &:hover{
        color: #969696;
    }
}
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


export default LoginNav
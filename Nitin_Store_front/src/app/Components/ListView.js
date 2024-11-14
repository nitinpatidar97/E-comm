import React from 'react';
import styled from 'styled-components';
import FormetPrice from '../Helper/FormetPrice';
import { NavLink } from 'react-router-dom';
import { Button } from "../styles/Button"
const ListView = ({ product }) => {
  return (
    <Wrapper>
      {
        product.map((curEle) => {
          const { id, image, name, description, price } = curEle;
          return (
            <div className="row border my-3" key={name + id}>
              <div className="col-sm-6">
                <NavLink to={`/singleproduct/${id}`} className="btn-main">
                  <figure>
                    <img src={image} alt={name} />
                  </figure>
                </NavLink>
              </div>
              <div className="col-sm-6 my-3 align-self-center">
                <h4 className='text-uppercase mb-3'>{name}</h4>
                <FormetPrice price={price} />
                <p className='mb-3'>{description.slice(0, 90)}.....</p>

                <NavLink to={`/singleproduct/${id}`} className="">
                  <Button className="Mbtn py-2 px-3">Read More</Button>
                </NavLink>
              </div>
            </div>
          )
        })
      }
    </Wrapper>
  )
}

const Wrapper = styled.section`

figure {
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  transition: all 0.5s linear;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    transition: all 0.2s linear;
    cursor: pointer;
  }
  &:hover::after {
    width: 100%;
  }
  &:hover img {
    transform: scale(1.2);
  }

  img {
    max-width: 100%;
    margin-top: 1.5rem;
    height: 12rem;
    transition: all 0.2s linear;
  }

  .Mbtn {
    background-color: rgb(0 0 0 / 0%) !important;
    border: 0.1rem solid rgb(98 84 243) !important;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(98 84 243);

    &:hover {
      background-color: rgb(98 84 243) !important;
    }

    &:hover a {
      color: #fff;
    }
    a {
      color: rgb(98 84 243);
      font-size: 1.4rem;
    }
  }

  .btn-main, .Mbtn:hover {
    color: #fff;
  }

`;

export default ListView
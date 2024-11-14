import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import FormetPrice from '../Helper/FormetPrice';

const Product = ({ Product }) => {
  const { id, image, name, category, price } = Product;
  return (
    <NavLink to={`/singleproduct/${id}`} className="col-sm-4">
      <Wrapper>
        <div className="card">
          <figure>
            <img src={image} alt={name} />
            <figcaption className="caption">{category}</figcaption>
          </figure>

          <div className="card-data">
            <div className="card-data-flex">
              <h3>{name}</h3>
              <p className="card-data--price"><FormetPrice price={price} /></p>
            </div>
          </div>
        </div>
      </Wrapper>
    </NavLink>
  )
}

const Wrapper = styled.section`

padding : 2rem 0;

.loading{
color: ${({ theme }) => theme.colors.blue};
padding : 5rem;
}
.common-heading {++\
  font-size: 2.8rem;
  font-weight: 600;
  margin-bottom: 2rem;
  text-transform: capitalize;
}

 .intro-data {
  margin-bottom: 0;
  text-transform: uppercase;
  color: #5138ee;
  font-size: .9rem;
}

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
    height: 15rem;
    transition: all 0.2s linear;
  }

  .caption {
    position: absolute;
    top: 15%;
    right: 10%;
    text-transform: uppercase;
    background-color: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.helper};
    padding: 0.2rem 1rem;
    border-radius: 2rem;
  }
}

.card {
  background: none;
  border-radius: 0;
  border: none;

  .card-data {
    padding: 0 2rem;
    text-decoration: none !importent;
  }

  .card-data-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h3 {
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
    font-size: 1rem;
    font-weight: 400;
    color: rgba(29, 29, 29, 0.8);
    font-family: "Work Sans", sans-serif;
  }

  .card-data--price {
    color: ${({ theme }) => theme.colors.helper};
    text-decoration: none !importent;
  }

  .btn {
    margin: 2rem auto;
    background-color: rgb(0 0 0 / 0%);
    border: 0.1rem solid rgb(98 84 243);
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background-color: rgb(98 84 243);
    }

    &:hover a {
      color: #fff;
    }
    a {
      color: rgb(98 84 243);
      font-size: 1.4rem;
      text-decoration: none !importent;
    }
  }
}


@media (max-width: 575px) {

  figure img{ 
    width: 80%;
    height: 20rem !important;
  }
  .caption{
    right: 15% !important;
  }
 
  .card-data-flex {
    padding: 0;
    justify-content: space-around !important;
  }
}
@media (max-width: 305px) {

  figure img{
    width: 100%;
  }
  .caption{
    right: 10% !important;
  }
 
  .card-data-flex {
    padding: 0;
    justify-content: space-between !important;
  }
}
`;


export default Product;
import React, { useState } from 'react';
import styled from 'styled-components';
import { FaCheck } from "react-icons/fa";
import CartAmountToggle from './CartAmountToggle';
import { NavLink } from 'react-router-dom';
import { Button } from "../styles/Button";
import { useCartProduct } from '../Contaxt/CartContext';
import { useProduductContext } from '../Contaxt/ProductContext';


const AddToCart = ({ product }) => {

  const {cartImg} = useProduductContext();

  const { addToCart } = useCartProduct();

  const { id, name, price, colors = [{}], stock } = product;

  const [color, setColor] = useState(colors[0]);

  const [Amount, setAmount] = useState(1);

  const setDecrese = () => {
    Amount > 1 ? setAmount(Amount - 1) : setAmount(Amount);
  }
  const setIncrese = () => {
    Amount < stock ? setAmount(Amount + 1) : setAmount(stock);
  }

  const CartProduct = {
    PID : id,
    id : id + color,
    image : cartImg,
    name,
    color,
    stock,
    Amount,
    price,
  }
  return (
    <Wrapper>
      <p className='colors'>
        Colors : {
          colors.map((curColor, index) => {
            return (
              <button
                key={index}
                style={{ backgroundColor: curColor }}
                className={color === curColor ? "btnStyle active" : "btnStyle"}
                onClick={() => setColor(curColor)}
              >
                {
                  color === curColor ? <FaCheck className='checkStyle' /> : null
                }
              </button>
            )
          })
        }
      </p>

      {/* Cart Amount Toggle */}

      <CartAmountToggle
        Amount={Amount}
        setDecrese={setDecrese}
        setIncrese={setIncrese}
      />

      <NavLink to="/cart">
        <Button onClick={() => addToCart(CartProduct)}>Add To Cart</Button>
      </NavLink>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .colors {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .btnStyle {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.5rem;
    height: 1.5rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: .8rem;
    color: #fff;
  }
  
`;

export default AddToCart;
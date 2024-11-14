import React from 'react';
import { FaMinus, FaPlus } from "react-icons/fa";
import styled from 'styled-components';


const CartAmountToggle = ({Amount, setDecrese, setIncrese}) => {
  return (
    <>
        <Wrapper className='mb-3'>
            <button onClick={()=>setDecrese()} className ="button"><FaMinus/></button>
            <span className='amount-style px-3'>{Amount}</span>
            <button onClick={()=>setIncrese()} className ="button"><FaPlus/></button>
        </Wrapper>
    </>
  )
}
 const Wrapper = styled.div`
 
 .amount-toggle {
  margin-top: 3rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 1.4rem;
}
.button {
    border: none;
    background-color: #fff;
    cursor: pointer;
  }

  .amount-style {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.btn};
  }`
export default CartAmountToggle
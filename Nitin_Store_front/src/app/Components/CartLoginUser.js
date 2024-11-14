import React from 'react';
import styled from 'styled-components';

const CartLoginUser = ({ user }) => {
    const { name, picture,email } = user;

    return (
        <Wrapper>
            <figcaption>
                <img src={picture} alt={name} />
            </figcaption>
            <div className='my-auto ms-3'>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`

display : flex;
padding : 3rem 0;

img {
    width: 6rem;
    height: 6rem;
    border : .2rem solid rgb(98 84 243);
    border-radius: 50%;
  }
  h2 {
    font-size: 1.5rem;
  }

`

export default CartLoginUser
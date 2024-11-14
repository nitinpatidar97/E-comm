import React from 'react';
import styled from 'styled-components';
import Product from '../Components/Product';

const GridView = ({product}) => {
  return (
    <Wrapper>
       <div className="row">
            {
              product.map((curEle => {
                const { id } = curEle;
                return <Product key={id} Product={curEle} />
              }))
            }
          </div>
      </Wrapper>
  )
}

const Wrapper = styled.section`

img {
  margin-top: 1.5rem;
  height: 12rem !important;
}
.card-data {
  padding: 0 !important;
}
`;
export default GridView
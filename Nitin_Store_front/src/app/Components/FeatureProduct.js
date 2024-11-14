import React from 'react';
import styled from 'styled-components';
import { useProduductContext } from "../Contaxt/ProductContext"
import Loading from './Loading';
import Product from './Product';


const FeatureProduct = () => {
  const { isLoading, isError, featureProduct } = useProduductContext();
  
  if (isError) {
    return <Loading loadMsg="No Connection"/>
  }
  if (isLoading) {
    return <Loading loadMsg="Loading......."/>
  }
  return (
    <Wrapper>
      <div className='container px-5'>
        <p className='intro-data '>CHECK NOW!</p>
        <h3 className='common-heading'>Our Feature Services</h3>
        <div className="row">
          {
            featureProduct.map((curEle => {
              const { id } = curEle;
              return <Product key={id} Product={curEle} />
            }))
          }
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`

  padding : 5rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

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
`;

export default FeatureProduct
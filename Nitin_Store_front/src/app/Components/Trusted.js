import React from 'react';
import styled from 'styled-components';

const Trusted = () => {
  return (
    <>
      <Wrapper className="px-5">
      <div className="row d-flex justify-content-between text-center">
        <h3 className='mb-5'>Trusted By 1000+ Companies</h3>
        <div className="col-2 p-0">
          <img
            src="./images/Trusted1.png"
            alt="trusted-brands"
            className='img-fluid'
          />
        </div>
        <div className="col-2 p-0">
          <img
            src="./images/Trusted2.png"
            alt="trusted-brands"
            className='img-fluid'
          />
        </div>
        <div className="col-sm-2 p-0">
          <img
            src="./images/Trusted3.png"
            alt="trusted-brands"
            className='img-fluid'
          />
        </div>
        <div className="col-2 p-0">
          <img
            src="./images/Trusted4.png"
            alt="trusted-brands"
            className='img-fluid'
          />
        </div>
        <div className="col-2 p-0">
          <img
            src="./images/Trusted5.png"
            alt="trusted-brands"
            className='img-fluid'
          />
        </div>
      </div>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.section`
  padding: 4rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .brand-section {
    padding: 12rem 0 0 0;
  }
  h3 {
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.5rem;
    font-weight: bold;
  }

  img {
    // min-width: 2rem;
    height: 3.5rem;
  }

  .brand-section-slider {
    margin-top: 3.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .brand-section-slider {
      margin-top: 3.2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      /* background-color: red; */
      text-align: center;
    }
  }
  @media (max-width: 575px) {
  padding:0;

    img{
      margin :.5rem;
    }
  }
`;

export default Trusted;
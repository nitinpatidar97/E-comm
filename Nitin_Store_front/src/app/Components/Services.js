import styled from "styled-components";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

const Services = () => {
  return (
    <Wrapper className="container px-5">
      <div className="row grid grid-three-column">
        <div className="col-sm-4">
          <div className="services-1">
            <div>
              <TbTruckDelivery className="icon mb-2" />
              <h3>Super Fast and Free Delivery</h3>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="services-2">
            <div className="services-colum-2">
              <div>
                <MdSecurity className="icon" />
                <h3>Non-contact Shipping</h3>
              </div>
            </div>
            <div className="services-colum-2">
              <div>
                <GiReceiveMoney className="icon" />
                <h3>Money-back Guaranteed</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="services-3">
            <div>
              <RiSecurePaymentLine className="icon mb-2" />
              <h3>Super Secure Payment System</h3>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 4rem 0;

  // .grid {
  //   gap: 1rem;
  // }

  .services-1,
  .services-2,
  .services-3 {
    width: auto;
    height: 20rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    background: ${({ theme }) => theme.colors.bg};
    text-align: center;
    border-radius: 2rem;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  }

  .services-2 {
    margin : 0 2rem;
    gap: 4rem;
    background-color: transparent;
    box-shadow: none;

    .services-colum-2 {
      background: ${({ theme }) => theme.colors.bg};
      display: flex;
      flex-direction: row;
      flex: 1;
      justify-content: center;
      align-items: center;
      border-radius: 2rem;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;

      div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 1rem;
      }
    }
  }

  h3 {
    font-size: 1.1rem;
  }

  .icon {
    /* font-size: rem; */
    width: 4rem;
    height: 4rem;
    padding: 1rem;
    border-radius: 50%;
    background-color: #fff;
    color: #5138ee;
  }


  @media (max-width: 575px) {

    .services-1,
  .services-2,
  .services-3 {
    height: 12rem;
  }

    .services-2 {
      margin: 10rem 0px;
    }
    .services-colum-2 div{
      padding :2rem;
      flex-direction: column !important;
    }
  }
  @media (max-width: 305px) {
  
    
  }

`;
export default Services;

import styled from "styled-components";
import { useCartProduct } from "./Contaxt/CartContext";
import FormetPrice from "./Helper/FormetPrice";
import { NavLink } from "react-router-dom";
import { Button } from "./styles/Button";
import Loading from "./Components/Loading";
import CartItems from "./Components/CartItems";
import CartLoginUser from "./Components/CartLoginUser";
import { useAuth0 } from '@auth0/auth0-react';


const Cart = () => {
  const { user } = useAuth0();


  const { CartProduct, clearCart, SubTotal, ShoppingFee } = useCartProduct();


  const EmptyCart = () => {
    return <Wrapper className="container px-5">
      <Loading loadMsg="No Items In Cart" />
    </Wrapper>
  }

  const CartItem = () => {
    return <Wrapper className="container px-5 mt-5 mb-0">

      {user!=undefined ? <CartLoginUser user={user} /> : ""}

      <div className="row text-center d-flex justify-content-between text-uppercase">
        <div className="col-3 ">Item</div>
        <div className="col-2 hide">Price</div>
        <div className="col-2">Quantity</div>
        <div className="col-2  hide">Subtotal</div>
        <div className="col-2">Remove</div>
      </div>

      <hr />

      {
        CartProduct.map((curElm) => <CartItems product={curElm} key={curElm.id} />)
      }

      <hr />

      {/* Clear Cart Btn */}
      <div className="row mb-5 ">
        <div className="col-sm-3 col-7">
          <NavLink to="/products">
            <Button>Continue Shoping</Button>
          </NavLink>
        </div>
        <div className="col-sm-3 col-5 ms-auto text-end">
          <Button className="cart-clear" onClick={() => clearCart()}>Clear Cart</Button>
        </div>
      </div>

      {/* Total Price Section */}
      <div className="row">
        <div className="col-sm-3 ms-auto p-3 pt-4 totalAmount border">
          <p className="d-flex m-0"><p>Subtotal :</p> <p className="ms-auto fw-bold"><FormetPrice price={SubTotal} /></p></p>
          <p className="d-flex m-0"><p>Shipping Fee :</p> <p className="ms-auto fw-bold"><FormetPrice price={ShoppingFee} /></p></p>
          <hr />
          <p className="d-flex m-0"><p>Order Total :</p> <p className="ms-auto fw-bold"><FormetPrice price={SubTotal + ShoppingFee} /></p></p>
        </div>
      </div>
    </Wrapper>;
  }

  return CartProduct.length === 0 ? <EmptyCart /> : <CartItem />;
};

const Wrapper = styled.section`
  .cart-heading {
    text-align: center;
    text-transform: uppercase;
  }
  .img {
    width: 6rem;
    height: 3.5rem;
  }
  hr {
    margin-top: 1rem;
  }
  .cart-item {
    padding: 3.2rem 0;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  }
  .color-style {
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    margin-top: 0.5rem!important;
    margin-left: 1rem!important;
    margin-bottom: 0!important;
  }
  .cart p {
    font-size: 1.2rem;
    margin: 0;
  }
  .cart-clear {
    background-color: #ec7063 !important;
  }

  .totalAmount{
    background-color: rgb(244, 244, 244);
  }
  .cart-user--profile {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1.2rem;
    margin-bottom: 5.4rem;
  }
  .cart-user--name {
    text-transform: capitalize;
  }
  .cart-image--name {
    /* background-color: red; */
    align-items: center;
    display: grid;
    gap: 1rem;
    grid-template-columns: 0.4fr 1fr;
    text-transform: capitalize;
    text-align: left;
    img {
      max-width: 5rem;
      height: 5rem;
      object-fit: contain;
      color: transparent;
    }
  }

  .cart-two-button {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;

    .btn-clear {
      background-color: #e74c3c;
    }
  }

  .amount-toggle {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.4rem;
    font-size: 1.4rem;

    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }

    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }

  .remove_icon {
    font-size: 1.2rem;
    color: #e74c3c;
    cursor: pointer;
  }

  .order-total--amount {
    width: 100%;
    margin: 4.8rem 0;
    text-transform: capitalize;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;

    .order-total--subdata {
      border: 0.1rem solid #f0f0f0;
      display: flex;
      flex-direction: column;
      gap: 1.8rem;
      padding: 3.2rem;
    }
    div {
      display: flex;
      gap: 3.2rem;
      justify-content: space-between;
    }

    div:last-child {
      background-color: #fafafa;
    }

    div p:last-child {
      font-weight: bold;
      color: ${({ theme }) => theme.colors.heading};
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-five-column {
      grid-template-columns: 1.5fr 1fr 0.5fr;
    }
    .cart-hide {
      display: none;
    }

    .cart-two-button {
      margin-top: 2rem;
      display: flex;
      justify-content: space-between;
      gap: 2.2rem;
    }

    .order-total--amount {
      width: 100%;
      text-transform: capitalize;
      justify-content: flex-start;
      align-items: flex-start;

      .order-total--subdata {
        width: 100%;
        border: 0.1rem solid #f0f0f0;
        display: flex;
        flex-direction: column;
        gap: 1.8rem;
        padding: 3.2rem;
      }
    }
  }

  @media (max-width: 350px) {
    .cart p {
      font-size: 1rem;
      margin: 0;
  }
  .color-style {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    margin-top: 0.5rem!important;
    margin-left: .3rem!important;
  }
  }
`;

export default Cart;

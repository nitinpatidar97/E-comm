import React from 'react';
import CartAmountToggle from "./CartAmountToggle";
import FormetPrice from "../Helper/FormetPrice";
import { FaTrash } from "react-icons/fa";
import { useCartProduct } from '../Contaxt/CartContext';


const CartItems = ({product}) => {
  const { setDecrese, setIncrese, removeItem } = useCartProduct();

    const {
        id,
        image,
        name,
        color,
        Amount,
        price,
      } = product
      return <div className="row center justify-content-between py-4 mx-0 cart" key={id}>
        <div className="col-sm-3 col-5">
          <div className="row center">
            <div className="col-6 center">
              <figure className="m-0">
                {image && <img src={image.url} alt={image.filename} className="img-fluid" />}
              </figure>
            </div>
            <div className="col-6 p-0">
              <p className="mb-2">{name}</p>
              <p className="d-flex">Color : <p style={{ backgroundColor: color }} className="color-style"></p></p>
            </div>
          </div>
        </div>
        <div className="col-2 center hide"><FormetPrice price={price} /> </div>
        <div className="col-sm-2 col-5">
          <CartAmountToggle Amount={Amount} setDecrese={() => setDecrese(id)} setIncrese={() => setIncrese(id)} />
        </div>
        <div className="col-2 center hide"><FormetPrice price={price * Amount} /></div>
        <div className="col-2 center">
          <FaTrash className="remove_icon" onClick={() => removeItem(id)} />
        </div>
      </div>
}

export default CartItems;
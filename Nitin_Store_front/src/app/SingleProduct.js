import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useProduductContext } from "./Contaxt/ProductContext";
import PageNavigation from "./Components/PageNavigation";
import MyImage from "./Components/MyImage";
import FormetPrice from "./Helper/FormetPrice";
import { MdSecurity } from "react-icons/md";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import Star from "./Components/Star";
import AddToCart from "./Components/AddToCart";
import Loading from "./Components/Loading"

const API = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {
  const { id } = useParams();
  console.log("🚀 ~ file: SingleProduct.js:18 ~ SingleProduct ~ id:", id)
  const { getSingleProducts, isSingleLoading, singleProduct } = useProduductContext();

  const {
    name,
    price,
    company,
    description,
    category,
    stock,
    reviews,
    stars,
    image
  } = singleProduct;

  useEffect(() => {
    getSingleProducts(`${API}?id=${id}`);
  }, []);

  if (isSingleLoading) {
    return <Loading loadMsg={"Loading......"} />
  }

  return (
    <>
      <PageNavigation title={name} />
      <Wrapper className="container px-5 mt-3">
        <div className="row g-5">
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            {
              image ? <MyImage image={image} /> : "MyImg"
            }
          </div>
          <div className="col-md-6">

            <h2 className="text-uppercase">{name}</h2>

            <p>
              <Star star={stars} review={reviews} />
            </p>

            <span className="product-data-price">
              MRP : <del>{<FormetPrice price={price + 3000} />}</del>
            </span>

            <p className="product-data-real-price">
              Deal of the Day: <FormetPrice price={price} />
            </p>

            <p>{description}</p>

            <div className="product-data-warranty">
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Free Delivery</p>
              </div>

              <div className="product-warranty-data">
                <TbReplace className="warranty-icon" />
                <p>30 Days Replacement</p>
              </div>

              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Abhi Delivered </p>
              </div>

              <div className="product-warranty-data">
                <MdSecurity className="warranty-icon" />
                <p>2 Year Warranty </p>
              </div>
            </div>

            <p>Available : <span>{stock ? " In Stock" : "Not In Stock"}</span></p>
            <p>ID : <span>{id}</span></p>
            <p>Brand : <span>{company}</span></p>

            <hr />
            {
              singleProduct ? <AddToCart product={singleProduct} /> : null
            }
          </div>
        </div>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.section`
.product-data {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;
}
.product-data-warranty {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
    margin-bottom: 1rem;
}
.product-warranty-data {
      text-align: center;
}
.warranty-icon {
        background-color: rgba(220, 220, 220, 0.5);
        border-radius: 50%;
        width: 3rem;
        height: 3rem;
        padding: 0.6rem;
 }
 p {
    font-size: 1rem;
  }

.product-data-price {
  font-weight: bold;
}
.product-data-real-price {
    color: ${({ theme }) => theme.colors.btn};
}
.product-data-info {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-size: 1.8rem;
}
span {
      font-weight: bold;
    }

  hr {
    max-width: 100%;
    width: 100%;
    opacity: 100%;
  }

.product-images {
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: ${({ theme }) => theme.media.mobile}) {
  padding: 0 2.4rem;
}
@media (max-width: 770px) {
  padding-right: 0!important;
  padding-left: 0!important;
    
    .myImg{
      width:25%
    }
}
@media (max-width: 575px) {
  padding-right: 3rem!important;
  padding-left: 3rem!important;

    .myImg{
      width:25%
    }
}
@media (max-width: 350px) {
  padding-right: 3rem!important;
  padding-left: 3rem!important;
}
`;
export default SingleProduct;

import React from "react";
import styled from "styled-components";
import FilterSection from "./Components/FilterSection";
import Sort from "./Components/Sort";
import ProductList from "./Components/ProductList";
import {useFliterContaxt} from "./Contaxt/FilterContaxt"

const Products = () => {
  const {Filter_Product} = useFliterContaxt()

  return <Wrapper className="container px-5 mt-5">
    <div className="row g-3">
      <div className="col-sm-3">
        <FilterSection/>
      </div>
      <div className="col-sm-9">
        <div className="row">
          <Sort/>
        </div>
        <div className="row">
          <ProductList product ={Filter_Product}/>
        </div>
      </div>
    </div>
  </Wrapper>;
};

const Wrapper = styled.section`


  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    h3{
      font-size: 1.7rem;
    }
  }
`;

export default Products;

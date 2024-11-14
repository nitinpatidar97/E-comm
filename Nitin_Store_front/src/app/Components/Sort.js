import React from 'react';
import styled from 'styled-components';
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFliterContaxt } from '../Contaxt/FilterContaxt';

const Sort = () => {
  const { Grid_View, SetGridView, SetListView, Filter_Product, Sorting } = useFliterContaxt();
  return (
    <Wrapper>
      <div className="col-sm-4 d-flex mb-4">
        <button
          className={Grid_View ? 'sort-btn active' : 'sort-btn'}
          onClick={() => SetGridView()}
        >
          <BsFillGridFill className='icon' />
        </button>

        <span className='mx-2'></span>

        <button
          className={Grid_View ? 'sort-btn' : 'sort-btn active'}
          onClick={() => SetListView()}
        >
          <BsList className='icon' />
        </button>
      </div>
      <div className="col-sm-4 text-center">
        <p>{Filter_Product.length} Product Available</p>
      </div>
      <div className="col-sm-4">
        <select onChange={(e) => Sorting(e.target.value)} className="form-select rounded-0 ms-auto shadow-none sort-selection">
          <option value="lowest" selected>Price(lowest)</option>
          <option value="highest">Price(highest)</option>
          <option value="a-z">Price(a-z)</option>
          <option value="z-a">Price(z-a)</option>
        </select>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;

  select{
    width : 60%;
  }
    .sort-btn {
      padding: 0.5rem .8rem;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }

    .icon {
      font-size: 1rem;
    }
    .active {
      background-color: ${({ theme }) => theme.colors.black};
      color: #fff;
    }
    .sort-selection{
      cursor : pointer;
    }

    @media (max-width: 575px) {

      select{
        width : 100%;
      }
    
    }
    @media (max-width: 400px) {

      select{
        width : 80%;
      }
    
    }
`;

export default Sort
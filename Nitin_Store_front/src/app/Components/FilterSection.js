import React from 'react';
import styled from 'styled-components';
import { useFliterContaxt } from '../Contaxt/FilterContaxt';
import { FaCheck } from "react-icons/fa";
import FormetPrice from "../Helper/FormetPrice"
import { Button } from "../styles/Button"

const FilterSection = () => {
  const { All_Product, Filter: { text, category, color, price, minPrice }, FilterProducts, ClearFilters } = useFliterContaxt();

  const getUniqeValue = (data, propertie) => {
    let val = data.map((curEle) => curEle[propertie]);
    let uniqeVal = ["All", ... new Set(val)]
    if (propertie === "colors") {
      let color = [...new Set(uniqeVal.flat())];
      return color;
    }
    if (propertie === "price") {
      return Math.max(...val);
    }
    return uniqeVal;
  }

  const Uniqecategory = getUniqeValue(All_Product, "category");
  const Uniqecompany = getUniqeValue(All_Product, "company");
  const Uniqecolors = getUniqeValue(All_Product, "colors");
  const MaxPrice = getUniqeValue(All_Product, "price");

  return (
    <Wrapper>
      <div className="flex">
        <div>
          <form action="#" onSubmit={(e) => e.preventDefault()}>
            <input type="text" name='text' className='text-uppercase ps-2 mb-2' value={text} placeholder='Search' onChange={(e) => FilterProducts(e)} />
          </form>

          <div className='filter-category'>
            <h3>Category</h3>
            <form action="#" onSubmit={(e) => e.preventDefault()}>
              {
                Uniqecategory.map((curEle, index) => {
                  return <p key={index}>
                    <button
                      className={category === curEle ? "active" : ""}
                      onClick={(e) => FilterProducts(e)}
                      name="category"
                      value={curEle}
                    >
                      {curEle}
                    </button>
                  </p>
                })
              }
            </form>
          </div>
        </div>

        <div>
          <div className='mb-2'>
            <h3 className='pt-0'>Company</h3>
            <form action="#" onSubmit={(e) => e.preventDefault()}>
              <select name="company" onChange={(e) => FilterProducts(e)} className='filter-company--select pe-5'>
                {
                  Uniqecompany.map((curEle, index) => {
                    return <option value={curEle} key={index}>{curEle}</option>
                  })
                }
              </select>
            </form>
          </div>
          <div className='mb-2'>
            <h3>Colors</h3>
            <form action="#" onSubmit={(e) => e.preventDefault()} className="colors">
              {
                Uniqecolors.map((curEle, index) => {
                  if (curEle === "All") {
                    return <button
                      value={curEle}
                      name={"color"}
                      key={index}
                      onClick={(e) => FilterProducts(e)}
                      style={{ backgroundColor: curEle }}
                      className="color-all--style"
                    >
                      {curEle}
                    </button>
                  } else return <button
                    value={curEle}
                    name={"color"}
                    key={index}
                    onClick={(e) => FilterProducts(e)}
                    style={{ backgroundColor: curEle }}
                    className={curEle === color ? "btnStyle active" : "btnStyle"}
                  >
                    {curEle === color ? <FaCheck className='checkStyle' /> : ""}
                  </button>
                })
              }
            </form>
          </div>
          <div className='mb-3'>
            <h3>Price</h3>
            <form action="#" onSubmit={(e) => e.preventDefault()}>
              <p>
                <FormetPrice price={price} />
              </p>
              <input
                type="range"
                name="price"
                max={MaxPrice}
                min={minPrice}
                value={price}
                onChange={(e) => FilterProducts(e)}
              />
            </form>
          </div>

          <form action="#" onSubmit={(e) => e.preventDefault()}>
            <Button className='filter-clear' onClick={() => ClearFilters()}>Clear Filters</Button>
          </form>
        </div>
      </div>

    </Wrapper>
  )
}

const Wrapper = styled.section`

  h3 {
    padding: .7rem 0;
    font-size: 1.1rem;
  }
  .filter-category {
      button {
        border: none;
        background-color: ${({ theme }) => theme.colors.white};
        text-transform: capitalize;
        cursor: pointer;
        padding: 0;

        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
      }
  }

  .active {
        border-bottom: 1px solid ${({ theme }) => theme.colors.btn} !important;
        color: ${({ theme }) => theme.colors.btn};
  }

  .filter-company--select {
    cursor: pointer;
    padding: 0.2rem .3rem;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
  }

  .filter-color-style {
    display: flex;
    justify-content: center;
  }

  .color-all--style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
  }
  .colors {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .btnStyle {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.5rem;
    height: 1.5rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: .5rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: .8rem;
    color: #fff;
  }

  .filter_price {
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }

  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .filter-clear {
    background-color: #ec7063 !important;
    color: #000 !important;2
  }
  @media (max-width: 980px) {
    h3{
      font-size: 1.4rem !important;
    }
    button{
      font-size: 1.2rem !important;
    }
    p {
      font-size: 1.3rem;
    }
}
  @media (max-width: 575px) {
  .flex{
    display: flex;
    justify-content: space-between;
    margin-bottom : 2rem;
  }
}
  @media (max-width: 360px) {
  .flex{
    display: block;
    margin-bottom : 2rem;
  }
}


`;

export default FilterSection
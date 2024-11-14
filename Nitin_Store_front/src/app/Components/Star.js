import React from 'react';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import styled from "styled-components";

const Star = ({ star, review }) => {
    const ratingStar = Array.from({ length: 5 }, (curEle, index) => {
        const num = index + 0.5;
        return (
            <span key={index}>
                {
                    star >= index + 1 ? <FaStar className='icon'/> : star >= num ? <FaStarHalfAlt className='icon'/> : <
                        AiOutlineStar className='icon'/>
                }
            </span>
        )
    })

    return (
        <Wrapper>
            <div className="icon-style">
                {ratingStar}
                <p>({review} customer reviews)</p>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
  .icon-style {
    display: flex;
    gap: 0.2rem;
    align-items: center;
    justify-content: flex-start;

    .icon {
      font-size: 1.5rem;
      color: orange;
    }

    .empty-icon {
      font-size: 2.6rem;
    }
    p {
      margin: 0;
      padding-left: 1.2rem;
    }
  }
`;

export default Star;


// if (myStar===0) {
//     return <span><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/></span>;
// }else if (myStar === 1 && star>myStar) {
//     return <span><FaStar/><FaStarHalfAlt/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/></span>;
// }else if (myStar === 2 && star>myStar) {
//     return <span><FaStar/><FaStar/><FaStarHalfAlt/><AiOutlineStar/><AiOutlineStar/></span>;
// }else if (myStar === 3 && star>myStar) {
//     return <span><FaStar/><FaStar/><FaStar/><FaStarHalfAlt/><AiOutlineStar/></span>;
// }else if (myStar === 4 && star>myStar) {
//     return <span><FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalfAlt/></span>;
// }else if (myStar === 5) {
//     return <span><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></span>;
// }
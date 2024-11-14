import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const PageNavigation = ({title}) => {
  return (
    <Wrapper>
        <NavLink to="/">Home </NavLink> / {title}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  height: 5rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 1.5rem;
  padding-left: 1.2rem;

  a {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.blue};
  }
`;

export default PageNavigation
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Counter from './Counter';

const Navbar = styled.div`
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  background-color: rgba(244, 244, 244, 0.918);
  a {
    text-decoration: none;
  }
  p {
    margin-left: 10px;
    padding-right: 10vw;
    font-size: 0.9em;
    color: dimgray;
    font-weight: bold;
    background-color: rgba(244, 244, 244, 0.918);
    &:hover {
      color: #000;
    }
  }
`;

const LogoImg = styled.div`
  text-align: center;
  padding: 15px 0 50px 0;
  border-bottom: 3px solid rgba(236, 236, 236, 0.918);
  img {
    height: 70px;
  }
`;

const Logo = () => {
  return (
    <header>
      <Navbar>
        <Counter />
        <Link to='/cart'>
          <p>장바구니</p>
        </Link>
      </Navbar>
      <LogoImg>
        <Link to='/'>
          <img src='https://image.wingeat.com/logo/images/we_logo_center.png' alt=''></img>
        </Link>
      </LogoImg>
    </header>
  );
};

export default Logo;

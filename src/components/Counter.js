import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const CartCount = styled.span`
  display: inline-block;
  height: 11px;
  padding: 4px 10px;
  font-size: 75%;
  vertical-align: baseline;
  padding-right: 0.5rem;
  padding-left: 0.5rem;
  border-radius: 10rem;
  background-color: tomato;
  color: #dee2e6;
  line-height: 1;
  font-weight: bold;
`;

const Counter = () => {
  const count = useSelector(store => store.cart);
  return (
    <CartCount>
      {count.value}
    </CartCount>
  );
};

export default Counter;

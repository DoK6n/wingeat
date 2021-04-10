import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../redux/actions';

const CartArea = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;

  @media ${props => props.theme.mobile} {
    flex-direction: column;
  }
`;

const CartPageTitle = styled.h1`
  text-align: center;
  margin-bottom: 40px;
`;

const List = styled.div`
  font-size: 3vw;
  flex-grow: 1;
`;

const Order = styled.div`
  flex-grow: 0.5;
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-items: center;
`;

const Receipt = styled.div`
  width: 70%;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 2rem;
  padding: 20px 0 20px 0;
`;

const Expected = styled.span`
  line-height: 3em;
  font-size: 0.8em;
  font-weight: bold;
  color: #4f4f4f;

  @media ${(props) => props.theme.mobile} {
    font-size: 0.6rem;
  }
`;

const Price = styled.span`
  font-size: 1.5em;
  font-weight: bold;
  color: tomato;
`;

const Payment = styled.button`
  cursor: pointer;
  background-color: #ff3f42;
  color: #fff;
  border-radius: 5px;
  border: 0;
  outline: 0;
  width: 80%;
  height: 3.5rem;
  font-size: 1.7rem;
  font-weight: bold;
  margin-top: 2rem;

  @media ${(props) => props.theme.mobile} {
    font-size: 1.2rem;
  }
`;

const CartItem = styled.div`
  font-size: 1rem;
  border: 1px solid #000;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
  @media ${(props) => props.theme.mobile} {
    height: 170px;
    
  }
`;

const ItemImg = styled.img`
  width: 100px;
  height: 100px;

  @media ${(props) => props.theme.mobile} {
    width: 5em;
    height: 5em;
  }
`;

const ItemPrice = styled.div`
  text-align: end;
  font-weight: bold;
  font-size: 1.5em;
  
  @media ${(props) => props.theme.mobile} {
    font-size: 0.8em;
  }
`;

const CloseBtn = styled.div`
  text-align: end;
  span {
    cursor: pointer;
    font-weight: bold;
  }
`;

const ItemName = styled.p`
  font-size: 1.0em;

  @media ${(props) => props.theme.mobile} {
    font-size: 0.6rem;
  }
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;

function Cart() {
  const items = useSelector(store => store.cart);
  const dispatch = useDispatch();

  const urlForePart = 'https://image.wingeat.com/';

  const handleChange = e => {
    const itemData = JSON.parse(e.target.value);
    const itemPrice = parseInt(itemData.price);
    dispatch(actions.checkbox(itemPrice, itemData, e.target.checked));
  };

  return (
    <>
      <CartPageTitle>장바구니</CartPageTitle>
      <CartArea>
        {items.data.length === 0? <h1>장바구니에 담긴 상품이 없음</h1> : <>
        <List>
          {items.data.map((item, index) => (
            <CartItem key={index}>
              <CloseBtn
                onClick={() => {
                  return dispatch(actions.decrement(items.value, parseInt(item.price), item));
                }}>
                <span>X</span>
              </CloseBtn>
              <ItemInfo>
                <input type='checkbox' name='items' value={JSON.stringify(item)} onChange={handleChange} defaultChecked={item.checked} />
                <ItemName>{item.itemName}</ItemName>
              </ItemInfo>
              <ItemImg src={urlForePart + item.image} />
              <ItemPrice>합계 : {item.price.toLocaleString('ko-KR') + '원'}</ItemPrice>
            </CartItem>
          ))}
        </List>
        <Order>
          <Receipt>
            <Expected>결제 예정 금액</Expected>
            <Price>{items.price.toLocaleString('ko-KR') + '원'}</Price>
          </Receipt>
          <Payment>주문하기</Payment>
        </Order>
        </>}
      </CartArea>
    </>
  );
}

export default Cart;

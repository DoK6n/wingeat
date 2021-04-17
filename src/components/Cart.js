import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../redux/actions';
import * as carts from './cartStyled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCircle } from "@fortawesome/free-regular-svg-icons";

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
      <carts.CartPageTitle>장바구니</carts.CartPageTitle>
      <carts.CartArea>
        {items.data.length === 0? <h1>장바구니에 담긴 상품이 없음</h1> : <>
        <carts.List>
          {items.data.map((item, index) => (
            <carts.CartItem key={index}>
              <carts.CloseBtn>
                <span
                  onClick={() => {
                  return dispatch(actions.decrement(items.value, parseInt(item.price), item));
                }}
                >X</span>
              </carts.CloseBtn>

              <carts.ItemInfo onClick={() => {
                return dispatch(actions.checkbox(item.price, item, !item.checked));
              }}>
                {item.checked? 
                  <FontAwesomeIcon icon={faCheckCircle}/>
                  : <FontAwesomeIcon icon={faCircle} />}
                <carts.ItemName>{item.itemName}</carts.ItemName>
              </carts.ItemInfo>

              <carts.ItemImg src={urlForePart + item.image} />
              <carts.ItemPrice>합계 : {item.price.toLocaleString('ko-KR') + '원'}</carts.ItemPrice>
            </carts.CartItem>
          ))}
        </carts.List>
        <carts.Order>
          <carts.Receipt>
            <carts.Expected>결제 예정 금액</carts.Expected>
            <carts.Price>{items.price.toLocaleString('ko-KR') + '원'}</carts.Price>
          </carts.Receipt>
          <carts.Payment>주문하기</carts.Payment>
        </carts.Order>
        </>}
      </carts.CartArea>

    </>
  );
}

export default Cart;

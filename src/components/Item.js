import React from 'react';
import styled from 'styled-components';
import {useSelector, useDispatch} from 'react-redux';
import * as actions from '../redux/actions';

const ItemArea = styled.div`
  width: 22%;
  margin: 15px 0 15px 2.2%;
  color: #000;
  display: flex;
  flex-direction: column;
  

  @media ${(props) => props.theme.mobile} {
    width: 46%;
  }
  @media ${(props) => props.theme.tablet} {
    width: 30%;
  }
  @media ${(props) => props.theme.pc} {
    width: 22%;
  }
`;

const ItemImage = styled.img`
  width: 100%;
  border-radius: 0.5em;
  cursor: pointer;
`;

const ItemName = styled.p`
  padding-left: 5px;
  font-weight: bold;
  font-size: 12px;
  color: dimgray;
  margin: 10px 0 0 0;
  `;
  
  const ItemPrice = styled.p`
  padding-left: 5px;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 10px 0 0 0;
`;

const Item = (props) => {
  const urlForePart = 'https://image.wingeat.com/';

  const dispatch = useDispatch();
  const count = useSelector((store) => store.cart);

  return (
    <>
      <ItemArea>
        <ItemImage 
          src={urlForePart + props.data.image} 
          onClick={() => {
            return dispatch(actions.increment(
              count.value,
              parseInt(props.data.price),
              props.data))
          }}
        />
          <ItemName>
            {props.data.itemName}
          </ItemName>
          <ItemPrice>
            {parseInt(props.data.price).toLocaleString('ko-KR') + '원'}
          </ItemPrice>
      </ItemArea>    
    </>
  );
};

export default Item;

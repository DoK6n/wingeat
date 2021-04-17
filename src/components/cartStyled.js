import styled from 'styled-components';

export const CartArea = styled.div`
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

export const CartPageTitle = styled.h1`
  text-align: center;
  margin-bottom: 40px;
`;

export const List = styled.div`
  font-size: 3vw;
  flex-grow: 1;
`;

export const Order = styled.div`
  flex-grow: 0.5;
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-items: center;
`;

export const Receipt = styled.div`
  width: 70%;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 2rem;
  padding: 20px 0 20px 0;
`;

export const Expected = styled.span`
  line-height: 3em;
  font-size: 0.8em;
  font-weight: bold;
  color: #4f4f4f;

  @media ${(props) => props.theme.mobile} {
    font-size: 0.6rem;
  }
`;

export const Price = styled.span`
  font-size: 1.5em;
  font-weight: bold;
  color: tomato;
`;

export const Payment = styled.button`
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

export const CartItem = styled.div`
  font-size: 1rem;
  border: 1px solid #000;
  height: 220px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
  @media ${(props) => props.theme.mobile} {
    height: 170px auto;
    
  }
`;

export const ItemImg = styled.img`
  width: 100px;
  height: 100px;

  @media ${(props) => props.theme.mobile} {
    width: 5em;
    height: 5em;
  }
`;

export const ItemPrice = styled.div`
  text-align: end;
  font-weight: bold;
  font-size: 1.5em;
  
  @media ${(props) => props.theme.mobile} {
    font-size: 0.8em;
  }
`;

export const CloseBtn = styled.div`
  text-align: end;
  font-size: 1.5em;
  span {
    cursor: pointer;
    font-weight: bold;
  }
`;

export const ItemName = styled.p`
  margin-left: 0.7em;
  @media ${(props) => props.theme.mobile} {
    font-size: 0.9rem;
  }
`;

export const ItemInfo = styled.div`
  display: flex;
  font-size: 1.5em;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  border-top: 1px solid rgba(233, 233, 233, 0.87)
`;
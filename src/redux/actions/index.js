export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const CHECKED = 'CHECKED';

export const increment = (count, price, cartData) => {
  return {
    type: INCREMENT,
    inc: count + 1,
    price: price,
    data: cartData,
  };
};

export const decrement = (count, price, cartData) => {
  return {
    type: DECREMENT,
    dec: count - 1,
    price: price,
    data: cartData,
  };
};

export const checkbox = (price, cartData, checked) => {
  return {
    type: CHECKED,
    checked: checked,
    price: price,
    data: cartData,
  };
};

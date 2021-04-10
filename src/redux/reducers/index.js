import { INCREMENT, DECREMENT, CHECKED } from '../actions';
import { combineReducers } from 'redux';
import Swal, { ALERTTYPE } from '../../components/alert';

const initState = {
  value: 0,
  price: 0,
  data: [],
};

const cart = (state = initState, action) => {
  switch (action.type) {
    case INCREMENT:
      Swal(ALERTTYPE.add);
      action.data.checked = true;

      return {
        ...state,
        value: action.inc,
        price: state.price + action.price,
        data: [...state.data, action.data],
      };

    case DECREMENT:
      Swal(ALERTTYPE.remove);
      // 해당하는 요소 검색 후 삭제
      const findItem = state.data.find(item => item.id === action.data.id);
      const idx = state.data.indexOf(findItem);
      if (idx > -1) state.data.splice(idx, 1);

      if (action.data.checked) {
        return {
          ...state,
          value: action.dec,
          price: state.price - action.price,
          data: [...state.data],
        };
      } else {
        return {
          ...state,
          value: action.dec,
          price: state.price,
          data: [...state.data],
        };
      }

    case CHECKED:
      // action.data의 checked를 넘겨받은 checked값으로 변경
      action.data.checked = action.checked;

      // state.data에서 해당하는 요소 검색후 checked로 변경
      const findItemCheck = state.data.find(item => item.id === action.data.id);
      const idxCheck = state.data.indexOf(findItemCheck);
      if (idxCheck > -1) state.data[idxCheck].checked = action.checked;

      if (!action.checked) {
        return {
          ...state,
          price: state.price - action.price,
          data: [...state.data],
        };
      } else {
        return {
          ...state,
          price: state.price + action.price,
          data: [...state.data],
        };
      }
    default:
      return state;
  }
};

const rootReducer = combineReducers({ cart });

export default rootReducer;

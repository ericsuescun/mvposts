import { createStore } from 'redux';
import posts from './posts';
import invrsSort from './sort';

const adjust = (state, action) => {
  let newItem;
  let newList;
  switch (action.type) {
    case 'INCREMENT':
      state.list.map((item, n) => {
        if(n === action.index) {
          newItem = { ...item, votes: item.votes + 1 };
          newList = invrsSort([...state.list.slice(0, n), newItem, ...state.list.slice(n + 1)], state.order);  
        }
      });
      return {...state, list: newList };
    case 'DECREMENT':
      state.list.map((item, n) => {
        if(n === action.index) {
          newItem = { ...item, votes: item.votes - 1 };
          newList = invrsSort([...state.list.slice(0, n), newItem, ...state.list.slice(n + 1)], state.order);  
        }
      });
      return {...state, list: newList };
    case 'ORDER_ASC':
        return {
          order: false,
          list: invrsSort(state.list, false)
        };
    case 'ORDER_DSC':
        return {
          order: true,
          list: invrsSort(state.list, true)
        };
    default:
        return state;
  }
}

export default createStore(adjust, { order: true, list: invrsSort(posts, true) });
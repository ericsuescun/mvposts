import { createStore } from 'redux';
import posts from './posts';
import invrsSort from './sort';

const adjust = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
    	console.log('+(' + action.index + ')');
    	state.list.map((item, n) => {
    		if(n === action.index) {
    			
    			// let newItem = { id: item.id, title: item.title, description: item.description, url: item.url, votes: item.votes + 1, writer_avatar_url: item.writer_avatar_url, post_image_url: item.post_image_url};
    			let newItem = { ...item, votes: item.votes + 3 };
    			let newList = invrsSort([...state.list.slice(0, n), newItem, ...state.list.slice(n + 1)], state.order);
    			console.log(newList);
    			console.log({...state, list: newList});
    			return {
    				...state,
    				list: newList
    			};
    		} else {
    			return state;
    		}
    	});
    	return state;
    case 'DECREMENT':
    	console.log('-');
    	return state;
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
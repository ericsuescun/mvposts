import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import store from '../store';

class ButtonBar extends Component {

	handleOrderAsc(e) {
	  e.preventDefault();
	  store.dispatch({ type: 'ORDER_ASC'});
	}  

	handleOrderDsc(e) {
	  e.preventDefault();
	  store.dispatch({ type: 'ORDER_DSC'});
	}

	render() {
		return (
			<div className='button-bar'>
				<span>Orden:
					<Button className='buttons' variant={!store.getState().order ? "primary" : "outline-primary"} onClick={this.handleOrderAsc.bind(this)} >Ascendente</Button> 
					<Button variant={store.getState().order ? "primary" : "outline-primary"} onClick={this.handleOrderDsc.bind(this)} >Descendente</Button>
				 </span>
			</div>
		);
	}
}

export default ButtonBar;
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, ButtonToolbar, Image } from 'react-bootstrap';
import store from './store';
import posts from './posts';
import invrsSort from './sort';

class ButtonBar extends Component {
	constructor(props) {
		super(props);

	}

	render() {
		return (
			<div className='button-bar'>
				<span>Orden:
					<Button className='buttons' variant={!this.state.order ? "primary" : "outline-primary"} onClick={this.handleOrderAsc.bind(this)} >Ascendente</Button> 
					<Button variant={this.state.order ? "primary" : "outline-primary"} onClick={this.handleOrderDsc.bind(this)} >Descendente</Button>
				 </span>
			</div>
		);
	}
}




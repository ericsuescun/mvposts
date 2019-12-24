import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Image } from 'react-bootstrap';
import store from '../store';
// import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee, faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';


class PostsList extends Component {

	handleIncrement(index, e) {
	  e.preventDefault();
	  store.dispatch({ type: 'INCREMENT', index: index});
	}

	handleDecrement(index, e) {
	  e.preventDefault();
	  store.dispatch({ type: 'DECREMENT', index: index});
	}


	render() {
		return(
			store.getState().list.map((item, index) =>
			  <Row key={'id' + item.id}>
			    <Col xs={4}>
			      <Image src={item.post_image_url} rounded fluid />
			    </Col>
			    <Col xs={1}>
			      <div className='centered-label'>
			        <FontAwesomeIcon className='arrows' icon="sort-up" onClick={this.handleIncrement.bind(this, index)} />
			        <p>{item.votes}</p>
			        <FontAwesomeIcon className='arrows' icon="sort-down" onClick={this.handleDecrement.bind(this, index)} />
			      </div>
			    </Col>
			    <Col xs={7}>
			      <div key={'id' + index}>
			        <h5 className='itemTitle'>{item.title}</h5>
			        <p>{item.description}</p>
			        <span>Escrito por:<Image width={50} height={50} src={item.writer_avatar_url} roundedCircle fluid /></span>
			      </div>
			    </Col>
			  </Row>
			)
		);
	}
}

export default PostsList;
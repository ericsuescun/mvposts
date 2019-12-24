import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, ButtonToolbar, Image } from 'react-bootstrap';
import store from './store';
import posts from './posts';
import invrsSort from './sort';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';

library.add(faCoffee, faSortUp, faSortDown);

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
    order: true,
    list: invrsSort(posts, true)
    }

    store.subscribe(() => {
      this.setState({
        order: store.getState().order,
        list: store.getState().list
      });
    });
  }

  handleOrderAsc(e) {
    e.preventDefault();
    store.dispatch({ type: 'ORDER_ASC'});
  }  

  handleOrderDsc(e) {
    e.preventDefault();
    store.dispatch({ type: 'ORDER_DSC'});
  }

  handleIncrement(index, e) {
    e.preventDefault();
    store.dispatch({ type: 'INCREMENT', index: index});
  }

  handleDecrement(index, e) {
    e.preventDefault();
    store.dispatch({ type: 'DECREMENT', index: index});
  }

  render() {

    return (
      <div>
        <Container>
          <Row>
            <Col xs={{ span: 8, offset: 2}} mt={3}>
              <br/>
              <h1 className='blogTitle'>Blog posts populares</h1>
              <hr />
              <br/>
              <div className='button-bar'>
                <span>Orden:
                <Button className='buttons' variant={!this.state.order ? "primary" : "outline-primary"} onClick={this.handleOrderAsc.bind(this)} >Ascendente</Button> 
                <Button variant={this.state.order ? "primary" : "outline-primary"} onClick={this.handleOrderDsc.bind(this)} >Descendente</Button>
                 </span>
              </div>
              <br/>
              {this.state.list.map((item, index) =>
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
                    </div>
                  </Col>
                </Row>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;

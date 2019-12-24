import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import store from './store';
import posts from './posts';
import invrsSort from './sort';
import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';
import ButtonBar from './components/ButtonBar';
import PostsList from './components/PostsList';

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
              <ButtonBar />
              <br/>
              <PostsList />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;

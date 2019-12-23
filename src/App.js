import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import store from './store';
import posts from './posts';
import invrsSort from './sort';

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
        <span>Orden: </span>
        <Button variant={!this.state.order ? "primary" : "outline-primary"} onClick={this.handleOrderAsc.bind(this)}>Ascendente</Button>
        <Button variant={this.state.order ? "primary" : "outline-primary"} onClick={this.handleOrderDsc.bind(this)} >Descendente</Button>
        {this.state.list.map((item, index) =>
          <div key={'id' + index}>
            <p>{item.title}</p>
            <p>{item.description}</p>
            <p>Id{item.id}: Votes{item.votes}</p>
            <Button key={item.id + 'up'} variant="info" onClick={this.handleIncrement.bind(this, index)}>+</Button>
            <Button key={item.id + 'dw'} variant="info" onClick={this.handleDecrement.bind(this, index)}>-</Button>
          </div>
          )
        }
      </div>
    );
  }
}

export default App;

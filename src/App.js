import React, { Component } from 'react';
import './App.css';
import posts from './posts';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';


class App extends Component {

  invrsSort(arry, polarity) {
    if(polarity) {
      return arry.sort(function(a,b) { return b.votes - a.votes });
    } else {
      return arry.sort(function(a,b) { return a.votes - b.votes });  
    }
  }

  constructor(props) {
    super(props);
    let list = this.invrsSort(posts, true);
    // list.sort(function(a,b) { return b.votes - a.votes });
    this.state = {order: true, list: list};
  }

  handleOrder(e) {
    e.preventDefault();
    this.setState({ order: !this.state.order});
    this.setState({ list: this.invrsSort(this.state.list, this.state.order)});
  }

    handleOrderAsc(e) {
    e.preventDefault();
    this.setState({ order: false, list: this.invrsSort(this.state.list, false)});
  }  

  handleOrderDsc(e) {
    e.preventDefault();
    this.setState({ order: true, list: this.invrsSort(this.state.list, true)});
  }

  pushUp(index, e) {
    e.preventDefault();
    this.state.list.map((item, n) => {
      if(index === n) {
        let newItem = { id: item.id, title: item.title, description: item.description, url: item.url, votes: item.votes + 1, writer_avatar_url: item.writer_avatar_url, post_image_url: item.post_image_url};
        this.setState({ list: [...this.state.list.slice(0, n), newItem, ...this.state.list.slice(n + 1)]});
      } else {
        return this.state;
      }
    })
  }

  pushDown(index, e) {
    e.preventDefault();
    this.state.list.map((item, n) => {
      if(index === n) {
        let newItem = { id: item.id, title: item.title, description: item.description, url: item.url, votes: item.votes - 1, writer_avatar_url: item.writer_avatar_url, post_image_url: item.post_image_url};
        this.setState({ list: [...this.state.list.slice(0, n), newItem, ...this.state.list.slice(n + 1)]});
      } else {
        return this.state;
      }
    })
  }

  render() {

    return (
      <div>
        <span>Orden: </span>
        <Button variant={!this.state.order ? "primary" : "outline-primary"} onClick={this.handleOrderAsc.bind(this)}>Ascendente</Button>
        <Button variant={this.state.order ? "primary" : "outline-primary"} onClick={this.handleOrderDsc.bind(this)}>Descendente</Button>
        {this.state.list.map((item, index) =>
          <div>
            <p>{item.title}</p>
            <p>{item.description}</p>
            <p>Id{item.id}: Votes{item.votes}</p>
            <Button key={item.id + 'up'} variant="info" onClick={this.pushUp.bind(this, index)}>+</Button>
            <Button key={item.id + 'dw'} variant="info" onClick={this.pushDown.bind(this, index)}>-</Button>
          </div>
          )
        }
      </div>
    );
  }
}

export default App;

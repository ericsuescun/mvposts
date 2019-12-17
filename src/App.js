import React, { Component } from 'react';
import './App.css';
import posts from './posts';

class App extends Component {

  invrsSort(arry, polarity) {
    if(polarity) {
      return arry.sort(function(a,b) { return a.votes - b.votes });
    } else {
      return arry.sort(function(a,b) { return b.votes - a.votes });  
    }
  }

  constructor(props) {
    super(props);
    let list = this.invrsSort(posts, false);
    // list.sort(function(a,b) { return b.votes - a.votes });
    this.state = {order: true, list: list};
  }

  render() {

    return (
      <div>
        {this.state.list.map(item =>
          <div>
            <p>{item.title}</p>
            <p>{item.description}</p>
          </div>
          )
        }
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import {Cityinside}  from '../../common/api/city';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  componentDidMount() {
    Cityinside().then(res => {
      console.log(res);
    });
  }
  render() {
    return (
      <div>首页</div>
    );
  }
}

export default App;

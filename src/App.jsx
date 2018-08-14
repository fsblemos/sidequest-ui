import axios from 'axios';
import React, { Component } from 'react';
import Counter from './Counter';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      schedulers: [],
    };

    this.getData();
  }

  getData() {
    return axios.get('//localhost:3000/data').then(({ data }) => {
      this.setState({ schedulers: data.schedulers });
    });
  }

  render() {
    const { schedulers } = this.state;

    if (schedulers.length) {
      return schedulers.map(scheduler => (
        <Counter key={scheduler.pid} counter={scheduler.tasks.length} />
      ));
    }

    return <span>Loading data...</span>;
  }
}

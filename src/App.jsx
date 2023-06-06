import React, {Component} from 'react';
import Hello from './components/Hello/';
import Grid from './components/Grid/';

export default class App extends Component {
  render() {
    return (
      <div>
        <Hello/>
        <Grid row={3} col={1}/>
      </div>
    )
  }
}

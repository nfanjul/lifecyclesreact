import React, { Component } from 'react';
import { traceLifecycle } from 'react-lifecycle-visualizer';
import Person from '../../components/Person/Person';
import World from '../../components/World/World';

import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHome: true,
    }
    props.trace('constructor --> props ' + JSON.stringify(props));
    props.trace('constructor --> state ' + JSON.stringify(this.state));
  }
  
  onClickIsHome = () =>  this.setState({ isHome: !this.state.isHome});

  render() {
    return (
      <div className="Home">
        <button onClick={this.onClickIsHome}> {this.state.isHome ? 'Enter god mode' : 'Kill this person'} </button>
        {this.state.isHome ? <World /> : <Person />}
      </div>
    );
  }
}

export default traceLifecycle(Home);

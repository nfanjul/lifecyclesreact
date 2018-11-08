import React, { Component } from 'react';
import { traceLifecycle } from 'react-lifecycle-visualizer';
import Picture from '../Picture/Picture';
import worldImage from '../../images/mundo.jpg';

class World extends Component {

  componentWillUnmount = () => {
    this.props.trace('componentWillUnmount');
  }
  
  render() {
    return (
      <div className="Home">
        <Picture picture={worldImage} alt="world" />
      </div>
    );
  }
}

export default traceLifecycle(World);

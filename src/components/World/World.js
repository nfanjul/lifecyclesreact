import React, { Component } from 'react';
import { traceLifecycle } from 'react-lifecycle-visualizer';
import Picture from '../Picture/Picture';
import worldImage from '../../images/mundo.png';

class World extends Component {

  componentWillUnmount = () => {
    this.props.trace('componentWillUnmount');
  }
  
  render() {
    return (
      <div className="World">
        <Picture picture={worldImage} alt="world" css={'Picture'} />
      </div>
    );
  }
}

export default traceLifecycle(World);

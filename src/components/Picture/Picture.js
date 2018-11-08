import React, { Component } from 'react';
import { traceLifecycle } from 'react-lifecycle-visualizer';

import './Picture.css';

class Picture extends Component {

  shouldComponentUpdate = (nextProps, nextState) => {
    if(nextProps.picture !== this.props.picture) {
      return true;
    }
    return false
  };

  render() {
    return (
      <div className="Picture">
        <img src={this.props.picture} alt={this.props.alt}/>
      </div>
    )
  }
}

export default traceLifecycle(Picture);
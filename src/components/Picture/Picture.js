import React, { Component } from 'react';
import { traceLifecycle } from 'react-lifecycle-visualizer';

import './Picture.css';

class Picture extends Component {

  shouldComponentUpdate = (nextProps, nextState) => {
    // SHOW CODE 3
    if(nextProps.picture !== this.props.picture) {
      this.props.trace('shouldComponentUpdate: SI RENDER');
      return true;
    }
    this.props.trace('shouldComponentUpdate: NO RENDER');
    return false
  };

  render() {
    return (
      <div className={this.props.css}>
        <img src={this.props.picture} className={this.props.imgCss} width={this.props.width} id={this.props.alt} alt={this.props.alt}/>
      </div>
    )
  }
}

export default traceLifecycle(Picture);
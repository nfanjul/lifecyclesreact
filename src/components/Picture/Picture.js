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
      <div className={this.props.css}>
        <img src={this.props.picture} className={this.props.imgCss} width={this.props.width} id={this.props.alt} alt={this.props.alt}/>
      </div>
    )
  }
}

export default traceLifecycle(Picture);
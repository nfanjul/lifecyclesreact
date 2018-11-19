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
      personAge: 0,
    }
    props.trace('constructor --> props ' + JSON.stringify(props));
    props.trace('constructor --> state ' + JSON.stringify(this.state));
  }

  onClickIsHome = () => this.setState({ isHome: !this.state.isHome });

  onClickIncreaseAge = () => {
    if (this.state.personAge < 100) {
      this.setState({ personAge: this.state.personAge + 10 });
    }
  };

  onClickResetAge = () => this.setState({ personAge: 0 });

  renderPerson = () => 
    <React.Fragment>
      <Person personAge={this.state.personAge}  onClickResetAge={this.onClickResetAge}/>
      <button className='plus' onClick={this.onClickIncreaseAge}> + </button> <br />
    </React.Fragment>
  

  render() {
    return (
      <div className="Home">
        <button className='home-button' onClick={this.onClickIsHome}> {this.state.isHome ? 'Enter god mode' : 'Kill this person'} </button>
        {this.state.isHome ? <World /> : this.renderPerson() }
      </div>
    );
  }
}

export default traceLifecycle(Home);

import React, { Component } from 'react';
import { traceLifecycle } from 'react-lifecycle-visualizer';
import Person from '../../components/Person/Person';
import World from '../../components/World/World';

import './Home.css';

class Home extends Component {
  // SHOW CODE 1
  constructor(props) {
    super(props);
    this.state = {
      isHome: true,
      personAge: 0,
    }
  }

  onClickIsHome = () => this.setState({ isHome: !this.state.isHome });

  // SHOW CODE 1.2
  onClickIncreaseAge = () => {
    if (this.state.personAge < 80){
      this.setState({ personAge: this.state.personAge + 10 });
    }
  };

  onClickResetAge = () => this.setState({ personAge: 0 });

  renderPerson = () => <Person personAge={this.state.personAge} onClickIncreaseAge={this.onClickIncreaseAge}  onClickResetAge={this.onClickResetAge}/>
  
  // SHOW CODE 1.1
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

import React, { Component } from 'react';
import { traceLifecycle } from 'react-lifecycle-visualizer';

import defaultData from '../../Api/api';
import { updateLive, initPerson } from './service';
import Picture from '../Picture/Picture';
import './Person.css';

class Person extends Component {
  constructor(props) {
    super(props);
    this.state = initPerson;
  }

  static getDerivedStateFromProps = (nextProps, prevState) => {
    // First mount
    // if (props.person.eyeColor !== 'green') {
    //   props.person.eyeColor = 'green';
    //   state = props;
    //   return state;
    // }
    // Updates
    debugger;
    nextProps.trace('getDerivedStateFromProps next -->' + JSON.stringify(nextProps));
    nextProps.trace('getDerivedStateFromProps prev -->' + JSON.stringify(prevState));
    // Validete if != prev to next
      const updatedPerson = updateLive(nextProps.personAge, prevState.person);
      if (updatedPerson) {
        return { ...prevState, person: updatedPerson };
      }
      // prevState = nextProps;
      // return prevState;
      return null;
    //Posible return null if not changes
  };

  componentDidMount = () => {
    const data = defaultData;
    this.props.trace('componentDidMount: ' + JSON.stringify(data));
    if (data) {
      this.setState({ person: data });
    }
  };

  getSnapshotBeforeUpdate = (prevProps, prevstate) => {
    // Are we adding new items to the list?
    // Capture the scroll position so we can adjust prevstate later.
    // if (prevProps.list.length < this.props.list.length) {
    //   const list = this.listRef.current;
    //   return list.scrollHeight - list.scrollTop;
    // }
    // return null;
    // if (prevstate.languages.length < this.props.languages.length) {
    //   // TODO: Add prevstate
    // } 
    return {
      salaryDiference: this.state.person.salary - prevstate.person.salary
    };
  };

  componentDidUpdate(prevProps, prevstate, snapshot) {
    this.salaryDiference = snapshot.salaryDiference;
  }

  componentWillUnmount = () => {
    this.props.trace('componentWillUnmount');
    this.setState(initPerson);
  }

  // renderLanguages = () =>
  //   this.state.person.languages.map(lang => {
  //     return <div key={lang}> {lang.join()} </div>;
  //   });

  // increaseAge = () => {
  //   if (this.state.person.age < 100) {
  //     this.setState({
  //       person: { ...this.state.person, age: this.state.person.age + 10 }
  //     });
  //   }
  // }

  render() {
    return (
      <div className="Person">
        <Picture picture={this.state.person.picture} alt="person" />
        <div className="personInfo">
          <h2> {this.state.person.name} </h2>
          <b>Eye color:</b> {this.state.person.eyeColor} <br />
          <b>Hair color:</b> {this.state.person.hairColor} <br />
          <b>Age:</b> {this.state.person.age}{' '}
          <b>Languages:</b> {this.state.person.languages.join(', ')} <br />
          <b>Work:</b> {this.state.person.work} <br />
          <b>Salari:</b> {this.state.person.salary} <br />
          <b>Salary diference:</b> {this.salaryDiference}
        </div>
      </div>
    );
  }
}

export default traceLifecycle(Person);

//https://github.com/Oblosys/react-lifecycle-visualizer#readme

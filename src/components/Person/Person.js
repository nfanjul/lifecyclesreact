import React, { Component } from "react";
import { traceLifecycle } from "react-lifecycle-visualizer";

import defaultData from "../../Api/api";
import { updateLive, initPerson } from "./service";
import Picture from "../Picture/Picture";
import "./Person.css";

class Person extends Component {
  constructor(props) {
    super(props);
    this.state = initPerson;
  }

  shouldComponentUpdate = () => {
    // do some stuffs
    return true;
  };

  componentWillUnmount = () => {
    this.props.trace('componentWillUnmount' + JSON.stringify(this.state));
  }

  componentDidMount = () => {
    const data = defaultData;
    this.props.trace('componentDidMount: ' + JSON.stringify(data));
    if (data) {
      this.setState({ person: data });
    }
  };

  static getDerivedStateFromProps = (props, state) => {
    // First mount
    // if (props.person.eyeColor !== "green") {
    //   props.person.eyeColor = "green";
    //   state = props;
    //   return state;
    // }
    // Updates
    const updatedPerson = updateLive(state.person);
    if (updatedPerson) {
      return { ...state, person: updatedPerson };
    }
    state = props;
    return state;
  };

  getSnapshotBeforeUpdate = (prevProps, prevstate) => {
    return {
      salaryDiference: this.state.person.salary - prevstate.person.salary
    };
  };

  componentDidUpdate(prevProps, prevstate, snapshot) {
    console.log("Salary diference", snapshot.salaryDiference);
    this.salaryDiference = snapshot.salaryDiference;
  }

  increaseAge = () => {
    if (this.state.person.age < 100) {
      this.setState({
        person: { ...this.state.person, age: this.state.person.age + 10 }
      });
    }
  }

  // renderLanguages = () =>
  //   this.state.person.languages.map(lang => {
  //     return <div key={lang}> {lang.join()} </div>;
  //   });

  render() {
    return (
      <div className="Person">
        <Picture picture={this.state.person.picture} alt="person" />
        <div className="personInfo">
          <h2> {this.state.person.name} </h2>
          <b>Eye color:</b> {this.state.person.eyeColor} <br />
          <b>Hair color:</b> {this.state.person.hairColor} <br />
          <b>Age:</b> {this.state.person.age}{" "}
          <button onClick={this.increaseAge}> + </button> <br />
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

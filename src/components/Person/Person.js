import React, { Component } from "react";

import "./Person.css";
import Person20 from "../../images/20.png";

class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.salaryDiference = 0;
  }

  shouldComponentUpdate = () => {
    // do some stuffs
    return true;
  };

  static getDerivedStateFromProps = (props, state) => {
    // First mount
    if (props.person.eyeColor !== "Green") {
      props.person.eyeColor = "Green";
      state = props;
      return state;
    }
    // Updates
    switch (state.person.age) {
      case 10:
        state.person.languages.push("Spanish");
        return state;
      case 20:
        state.person.work = "Becary";
        state.person.salary = 500;
        state.person.languages.push("English");
        state.person.picture = Person20;
        return state;
      case 30:
        state.person.work = "Programmer";
        state.person.salary = 1200;
        return state;
      case 50:
        state.person.work = "Programmer";
        state.person.salary = 2100;
        return state;
      case 80:
        state.person.work = "Retired";
        state.person.salary = 0;
        return state;
      default:
        break;
    }
    return null;
  };

  componentDidMount = () => {
    //this.props.getSomeInfo();
  };

  getSnapshotBeforeUpdate = (prevProps, prevstate) => {
    return {
      salaryDiference: this.state.person.salary - prevstate.person.salary
    };
  };

  componentDidUpdate(prevProps, prevstate, snapshot) {
    this.salaryDiference = snapshot.salaryDiference;
  }

  increaseAge = () => {
    this.setState({
      person: { ...this.state.person, age: this.state.person.age + 10 }
    });
    this.setPicture();
  };

  setPicture = () => {
    console.log('!!!')
    this.setState({ picture: this.state.person.picture });
  };

  renderLanguages = () =>
    this.state.person.languages.map(language => {
      return <div key={language}> {language} </div>;
    });

  render() {
    return (
      <div className="Person">
        <h2> {this.state.person.name} </h2>
        <b>Eye color:</b> {this.state.person.eyeColor} <br />
        <b>Age:</b> {this.state.person.age}{" "}
        <button onClick={this.increaseAge}> + </button> <br />
        <b>Languages:</b> {this.renderLanguages()} <br />
        <b>Work:</b> {this.state.person.work} <br />
        <b>Salari:</b> {this.state.person.salary} <br />
        <b>Salary diference:</b> {this.salaryDiference}
      </div>
    );
  }
}

export default Person;

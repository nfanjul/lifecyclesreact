import React, { Component } from "react";
import { traceLifecycle } from "react-lifecycle-visualizer";
import defaultData from "../../Api/api";
import Person from "../../components/Person/Person";
import Home from "../../components/Home/Home";

import "./World.css";

class World extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHome: true,
      person: {
        name: "",
        eyeColor: "",
        hairColor: "",
        age: 0,
        languages: [],
        work: "",
        salary: 0,
        picture: ""
      }
    };
  }

  componentDidMount = () => {
    const data = defaultData;
    this.props.trace('componentDidMount: ' + JSON.stringify(data));
    if (data) {
      this.setState({ person: data });
    }
  };
  
  onClickIsHome = () =>  this.setState({ isHome: !this.state.isHome});

  render() {
    return (
      <div className="World">
        <button onClick={this.onClickIsHome}> {this.state.isHome ? 'Enter god mode' : 'Kill this person'} </button>
        {this.state.isHome ? <Home /> : <Person person={this.state.person} />}
      </div>
    );
  }
}

export default traceLifecycle(World);

import React, { Component } from "react";
import { traceLifecycle } from "react-lifecycle-visualizer";
import defaultData from "../../Api/api";
import Person from "../../components/Person/Person";

import "./World.css";

class World extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        name: "",
        eyeColor: "",
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
    if (data) {
      this.setState({ person: data });
    }
  };

  render() {
    return (
      <div className="World">
        <Person person={this.state.person} />
      </div>
    );
  }
}

export default traceLifecycle(World);

import React, { Component } from "react";
import Person from "../../components/Person/Person";

import Picture from '../Picture/Picture';
import "./World.css";
import Person0 from '../../images/0.png';

class World extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        name: "Pepe",
        eyeColor: "Brown",
        age: 0,
        languages: [],
        work: "Student",
        salary: 0,
        picture: Person0
      }
    };
  }

  render() {
    return (
      <div className="World">
      {console.log(this.state.person.picture)}
        <Picture picture={this.state.person.picture}/>
        <Person person={this.state.person} />
      </div>
    );
  }
}

export default World;

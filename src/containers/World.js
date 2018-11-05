import React, { Component } from 'react';
import Person from '../components/Person';

class World extends Component {
  constructor(props) {
    super(props);
    this.state = {
        person: {
            name: 'Pepe',
            eyeColor: 'brown',
            age: 0,
            idioms: [],
            work: 'studiant',
            salary: 0,
        },
    };
}

  render() {
    return       (
      <div className="World">
        <Person person={this.state.person} />
      </div>
    );
  }
}

export default World;

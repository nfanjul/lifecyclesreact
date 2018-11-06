import React, { Component } from 'react';
import { traceLifecycle } from 'react-lifecycle-visualizer';
import updateLive from './service';

class Person extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.salaryDiference = 0;
    }

    shouldComponentUpdate = () => {
        // do some stuffs
        return true;
    }

    static getDerivedStateFromProps = (props, state) => {
        // First mount
        if (props.person.eyeColor !== 'green') {
            props.person.eyeColor = 'green';
            state = props;
            return state;
        }
        // Updates
        const updatedPerson = updateLive(state.person);
        if (updatedPerson) {
            return { ...state, person: updatedPerson }
        }

        return null;
    }

    componentDidMount = () => {
        // TODO
    }

    getSnapshotBeforeUpdate = (prevProps, prevstate) => {
        return { salaryDiference: this.state.person.salary - prevstate.person.salary };
    }

    componentDidUpdate(prevProps, prevstate, snapshot) {
        console.log('Salary diference', snapshot.salaryDiference);
        this.salaryDiference = snapshot.salaryDiference;
    }

    increaseAge = () => this.setState({ person: { ...this.state.person, age: this.state.person.age + 10 } });

    renderLanguages = () => this.state.person.languages.map((lang) => { return <div key={lang}> {lang} </div> });

    render() {
        return (
            <div className="Person">
                <h3> {this.state.person.name} </h3>
                Eye color: {this.state.person.eyeColor} <br />
                Age: {this.state.person.age} <button onClick={this.increaseAge}> + </button> <br />
                Languages: {this.renderLanguages()} <br />
                Work: {this.state.person.work} <br />
                Salari: {this.state.person.salary} <br />
                Salary diference: {this.salaryDiference}
            </div>
        );
    }
}

export default traceLifecycle(Person);

//https://github.com/Oblosys/react-lifecycle-visualizer#readme

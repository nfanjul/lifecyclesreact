import React, { Component } from 'react';

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
        switch (state.person.age) {
            case 10:
                debugger;
                state.person.idioms.push('spanish');
                return state;
            case 20:
                debugger;
                state.person.work = 'becary';
                state.person.salary = 500;
                return state;
            case 30:
                debugger;
                state.person.work = 'programmer';
                state.person.salary = 1200;
                return state;
            default:
                break;
        }
        return null;
    }

    componentDidMount = () => {
        //this.props.getSomeInfo();
    }


    getSnapshotBeforeUpdate = (prevProps, prevstate) => {
        debugger;
        return { salaryDiference: this.state.person.salary - prevstate.person.salary };
    }


    componentDidUpdate(prevProps, prevstate, snapshot) {
        debugger;
        console.log('Salary diference', snapshot.salaryDiference);
        // this is not triggering a re-render becouse is an uncontrolled property
        this.salaryDiference = snapshot.salaryDiference;
    }

    increaseAge = () => this.setState({ person: { ...this.state.person, age: this.state.person.age + 10 } });

    renderIdioms = () => this.state.person.idioms.map((idiom) => { return <div key={idiom}> {idiom} </div> });


    render() {
        debugger;
        return (
            <div className="Person">
                <h3> {this.state.person.name} </h3>
                Eye color: {this.state.person.eyeColor} <br />
                Age: {this.state.person.age} <button onClick={this.increaseAge}> + </button> <br />
                Idioms: {this.renderIdioms()} <br />
                Work: {this.state.person.work} <br />
                Salari: {this.state.person.salary} <br />
                Salary diference: {this.salaryDiference}
            </div>
        );
    }
}

export default Person;

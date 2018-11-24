import React, { Component } from 'react';
import { traceLifecycle } from 'react-lifecycle-visualizer';

import defaultData from '../../Api/api';
import { updateLive, initPerson } from './service';
import Picture from '../Picture/Picture';
import moneyImage from '../../images/money.png';
import './Person.css';

class Person extends Component {
  constructor(props) {
    super(props);
    this.state = initPerson;
  }

  static getDerivedStateFromProps = (nextProps, prevState) => {
    // Updates
    nextProps.trace('getDerivedStateFromProps next -->' + JSON.stringify(nextProps));
    nextProps.trace('getDerivedStateFromProps prev -->' + JSON.stringify(prevState));
    // Validete if != prev to next
    const updatedPerson = updateLive(nextProps.personAge, prevState.person);
    if (updatedPerson) {
      return { person: updatedPerson };
    }
    return null;
    //Posible return null if not changes
  };

  componentDidMount = () => {
    // SHOW CODE 2
    const data = Object.assign({}, defaultData);
    this.props.trace('componentDidMount: ' + JSON.stringify(data));
    if (data) {
      this.setState({ person: data });
    }
  };

  getSnapshotBeforeUpdate = (prevProps, prevstate) => {
    // SHOW CODE 4
    return {
      salaryDiference: this.state.person.salary - prevstate.person.salary
    };
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    // SHOW CODE 5
    prevProps.trace('componentDidUpdate prevProps -->' + JSON.stringify(prevProps));
    prevProps.trace('componentDidUpdate prevState -->' + JSON.stringify(prevState));
    prevProps.trace('componentDidUpdate snapshot -->' + JSON.stringify(snapshot));
    if(snapshot.salaryDiference !== 0)
    {
      this.props.trace('componentDidUpdate: DIFFERENCE');
    }
    const moneyImage = document.querySelector('.MoneyImage');
    if (moneyImage) {
      let imageWidth = moneyImage.offsetWidth;
      if (moneyImage && snapshot.salaryDiference > 0) {
        imageWidth = imageWidth + 23;
        moneyImage.style.width = `${imageWidth}px`;
      }
      if (moneyImage && snapshot.salaryDiference < 0) {
        moneyImage.style.width = "0px";
      }
    }
  }

  componentWillUnmount = () => {
    // SHOW CODE 6
    this.props.trace('componentWillUnmount: KILL MARCELA');
    this.props.onClickResetAge();
    this.setState(initPerson);
  }

  render() {
    return (
      <div className="Person">
        <Picture picture={this.state.person.picture} alt="person" css={'Picture'} />
        <button className='plus' onClick={this.props.onClickIncreaseAge}> + </button> <br />

        <div className="personInfo">
          <h2> {this.state.person.name} </h2>
          <b>Eye color:</b> {this.state.person.eyeColor} <br />
          <b>Hair color:</b> {this.state.person.hairColor} <br />
          <b>Age:</b> {this.props.personAge}{' '} <br />
          <b>Languages:</b> {this.state.person.languages.join(', ')} <br />
          <b>Work:</b> {this.state.person.work} <br />
          <b>Salari:</b> {this.state.person.salary} <br />
          <b>Salary diference:</b>
          {this.state.person.salary > 0 ? <Picture picture={moneyImage} alt="money" width={0} css={'MoneyImage'} /> : null}
        </div>
      </div>
    );
  }
}

export default traceLifecycle(Person);

//https://github.com/Oblosys/react-lifecycle-visualizer#readme

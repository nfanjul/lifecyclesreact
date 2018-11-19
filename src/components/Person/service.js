import Person10 from '../../images/10.png';
import Person20 from '../../images/20.png';
import Person30 from '../../images/30.png';
import Person50 from '../../images/50.png';
import Person80 from '../../images/80.png';

export const initPerson = {
    person: {
        name: '',
        eyeColor: '',
        hairColor: '',
        age: 0,
        languages: [],
        work: '',
        salary: 0,
        picture: '',
        imageWidth: 0
    }
}

export const updateLive = (age, person) => {
    if (person !== undefined) {
        const updatedPerson = Object.assign({}, person)
        switch (age) {
            case 10:
                updatedPerson.age = 10;
                updatedPerson.languages.push('Spanish');
                updatedPerson.picture = Person10;
                return updatedPerson;
            case 20:
                updatedPerson.age = 20;
                updatedPerson.work = 'Becary';
                updatedPerson.hairColor = 'Red';
                updatedPerson.salary = 500;
                updatedPerson.picture = Person20;
                return updatedPerson;
            case 30:
                updatedPerson.age = 30;
                updatedPerson.languages.push('English');
                updatedPerson.work = 'Programmer';
                updatedPerson.hairColor = 'Blue';
                updatedPerson.salary = 1200;
                updatedPerson.picture = Person30;
                return updatedPerson;
            case 50:
                updatedPerson.age = 50;
                updatedPerson.work = 'Key consultant';
                updatedPerson.hairColor = 'Black';
                updatedPerson.salary = 2200;
                updatedPerson.picture = Person50;
                return updatedPerson;
            case 80:
                updatedPerson.age = 80;
                updatedPerson.work = 'Retired';
                updatedPerson.hairColor = 'White';
                updatedPerson.salary = 0;
                updatedPerson.retirement = 0;
                updatedPerson.picture = Person80;
                return updatedPerson;
            default:
                //    return initPerson;
                break;
        }
    }
    return null;
}

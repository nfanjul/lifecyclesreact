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
    }
}

export const updateLive = (age, person) => {
    if (person !== undefined) {
        switch (age) {
            case 10:
                person.age = 10;
                person.languages.push('Spanish');
                person.picture = Person10;
                return person;
            case 20:
                person.age = 20;
                person.work = 'Becary';
                person.hairColor = 'Red';
                person.salary = 500;
                person.picture = Person20;
                return person;
            case 30:
                debugger
                person.age = 30;
                person.languages.push('English');
                person.work = 'Programmer';
                person.hairColor = 'Blue';
                person.salary = 1200;
                person.picture = Person30;
                return person;
            case 50:
                person.age = 50;
                person.work = 'Key consultant';
                person.hairColor = 'Black';
                person.salary = 2200;
                person.picture = Person50;
                return person;
            case 80:
                person.age = 80;
                person.work = 'Retired';
                person.hairColor = 'White';
                person.salary = 0;
                person.retirement = 0;
                person.picture = Person80;
                return person;
            default:
                //    return initPerson;
                break;
        }
    }
    return null;
}

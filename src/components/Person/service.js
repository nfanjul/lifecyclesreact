import Person10 from "../../images/10.png";
import Person20 from "../../images/20.png";
import Person30 from "../../images/30.png";
import Person50 from "../../images/50.png";
import Person80 from "../../images/80.png";

const updateLive = (person) => {
    if(person !== undefined)
    {
        switch (person.age) {
            case 10:
                person.languages.push('spanish');
                person.picture = Person10;
                return person;
            case 20:
                person.work = 'becary';
                person.hairColor= 'Red';
                person.salary = 500;
                person.picture = Person20;
                return person;
            case 30:
                person.languages.push('english');
                person.work = 'programmer';
                person.hairColor= 'Blue';
                person.salary = 1200;
                person.picture = Person30;
                return person;
            case 50:
                person.work = 'Key consultant';
                person.hairColor= 'Black';
                person.salary = 2200;
                person.picture = Person50;
                return person;
            case 80:
                person.work = 'retired';
                person.hairColor= 'White';
                person.salary = 0;
                person.retirement = 0;
                person.picture = Person80;
                return person;
            default:
                break;
        }
    }
    return null;
}

export default updateLive;

const updateLive = (person) => {
    debugger;
    if(person !== undefined)
    {
        switch (person.age) {
            case 10:
                person.languages.push('spanish');
                return person;
            case 20:
                person.work = 'becary';
                person.hairColor= 'Red';
                person.salary = 500;
                return person;
            case 30:
                person.work = 'programmer';
                person.hairColor= 'Blue';
                person.salary = 1200;
                return person;
            case 50:
                person.work = 'Key consultant';
                person.hairColor= 'Gray';
                person.salary = 2200;
                return person;
            case 80:
                person.work = 'retired';
                person.hairColor= 'White';
                person.salary = 0;
                person.retirement = 0;
                return person;
            default:
                break;
        }
    }
    return null;
}

export default updateLive;

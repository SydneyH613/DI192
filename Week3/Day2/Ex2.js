function displayStudentInfo({ first, last }) {
    return `Your full name is ${first} ${last}`;
}

displayStudentInfo({ first: 'Elie', last: 'Schoppik' });
// output: 'Your full name is Elie Schoppik'
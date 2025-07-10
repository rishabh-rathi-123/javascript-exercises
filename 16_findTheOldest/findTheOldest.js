const findTheOldest = function(people) {
    return people.reduce((acc, person) => {
        if (acc === null)
            return person;
        
        let death1, death2;

        let currentYear = new Date().getFullYear();
        if (acc.yearOfDeath === undefined)
            death1 = currentYear - acc.yearOfBirth;
        else
            death1 = acc.yearOfDeath - acc.yearOfBirth;

        if (person.yearOfDeath === undefined)
            death2 = currentYear - person.yearOfBirth;
        else
            death2 = person.yearOfDeath - person.yearOfBirth;

        if (death2 > death1)
            return person;
        else
            return acc;
    }, null);
};

// Do not edit below this line
module.exports = findTheOldest;

function getFilteredAnimals (data, arg) {
    const result = [];
    data.forEach(name => {
        name.people.forEach(person => {
            person.animals.forEach(animal => {
                if (animal.name.includes(arg)) {
                    result.push(animal.name);
                }
            });
        });
    });
    return result.length > 0 ? result : undefined;
}

module.exports = { getFilteredAnimals };
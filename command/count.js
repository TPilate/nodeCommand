function getCountedPeopleAndAnimals (data) {
    data.forEach(el => {
        peopleCount = el.people.length
        peopleName = el.name
        el.name = `${peopleName}[${peopleCount}]`
        el.people.forEach(person => {
            const animalCount = person.animals.length;
            person.name = `${person.name}[${animalCount}]`
        })
    })
    return JSON.stringify(data, null, 2)
}

module.exports = { getCountedPeopleAndAnimals }
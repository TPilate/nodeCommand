const { data } = require('./data');
const { getFilteredAnimals } = require('./command/animals');
const { getCountedPeopleAndAnimals } = require('./command/count');


if (require.main === module) {
    const filterArg = process.argv.find(arg => arg.startsWith('--filter='));
    const count = process.argv.find(arg => arg.startsWith('--count'));

    if (filterArg) {
        const arg = filterArg.split('=')[1]
        const filteredResult = getFilteredAnimals(data, arg)

        if (arg) {
            filteredResult ? console.log('Here is your filtered result : ', filteredResult) : console.log('No results found.')
        } else {
            console.log('Please provide an argument to the filer. Here is an example --filter=ou')
        }
    } else if (count) {
        const countCommand = getCountedPeopleAndAnimals(data)
        console.log(countCommand)
    }
}
const { getCountedPeopleAndAnimals } = require('./count'); // Adjust the import based on your file structure

const data = [{
    name: 'Dillauti',
    people:
        [{
            name: 'Winifred Graham',
            animals:
                [{ name: 'Anoa' },
                { name: 'Duck' },
                { name: 'Narwhal' },
                { name: 'Badger' },
                { name: 'Cobra' },
                { name: 'Crow' }]
        },
        {
            name: 'Blanche Viciani',
            animals:
                [{ name: 'Barbet' },
                { name: 'Rhea' },
                { name: 'Snakes' },
                { name: 'Antelope' },
                { name: 'Echidna' },
                { name: 'Crow' },
                { name: 'Guinea Fowl' },
                { name: 'Deer Mouse' }]
        }]
}];

describe('getCountedPeopleAndAnimals', () => {
    it('should correctly count people and animals and append in the names', () => {
        const expectedOutput = [{
            name: 'Dillauti[2]',
            people:
                [{
                    name: 'Winifred Graham[6]',
                    animals:
                        [{ name: 'Anoa' },
                        { name: 'Duck' },
                        { name: 'Narwhal' },
                        { name: 'Badger' },
                        { name: 'Cobra' },
                        { name: 'Crow' }]
                },
                {
                    name: 'Blanche Viciani[8]',
                    animals:
                        [{ name: 'Barbet' },
                        { name: 'Rhea' },
                        { name: 'Snakes' },
                        { name: 'Antelope' },
                        { name: 'Echidna' },
                        { name: 'Crow' },
                        { name: 'Guinea Fowl' },
                        { name: 'Deer Mouse' }]
                }]
        }];

        const result = getCountedPeopleAndAnimals(data);

        expect(result).toEqual(JSON.stringify(expectedOutput, null, 2));
    });
});

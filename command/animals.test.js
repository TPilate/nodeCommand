const { data } = require('../data');
const { getFilteredAnimals } = require('./animals'); // Adjust the import based on your file structure

describe('getFilteredAnimals', () => {
    test('returns animals matching the filter', () => {
        const result = getFilteredAnimals(data, 'ou');

        expect(result).toEqual([
            'Deer Mouse', 'Dormouse',
            'Mouse', 'Courser',
            'Frogmouth', 'Agouti',
            'Groundhog', 'Courser',
            'Grouse'
        ]);
    });

    test('returns an undefined if no animals match the filter', () => {
        const result = getFilteredAnimals(data, 'xyz');

        expect(result).toEqual(undefined);
    });
});

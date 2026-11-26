import {calculatePairs, cardsMatch,calculateAverage} from '../gameTests.js';

test('3x4 board has 6 matching pairs', () => {
    const result = calculatePairs(3, 4);
    expect(result).toBe(6);
});


test('2 cards with the same type and colour', () => {
    const card1 = {
        getAttribute: (name) => {
            if (name === 'type') return 'circle';
            if (name === 'colour') return 'red';
        }
    };

    const card2 = {
        getAttribute: (name) => {
            if (name === 'type') return 'circle';
            if (name === 'colour') return 'red';
        }
    };

    const result = cardsMatch(card1, card2);
    expect(result).toBe(true);
});


test('cards with different colours not match', () => {
    const card1 = {
        getAttribute: (name) => {
            if (name === 'type') return 'circle';
            if (name === 'colour') return 'red';
        }
    };

    const card2 = {
        getAttribute: (name) => {
            if (name === 'type') return 'circle';
            if (name === 'colour') return 'blue';
        }
    };

    const result = cardsMatch(card1, card2);
    expect(result).toBe(false);
});


test('Average clicks are calculated correctly', () => {
    const result = calculateAverage(60, 3);
    expect(result).toBe(20);
});
export function calculatePairs(rows, cols) {
    const totalCards = rows * cols;
    return totalCards / 2;

}


export function cardsMatch(card1, card2){
    return card1.getAttribute('type') === card2.getAttribute('type') && card1.getAttribute('colour') === card2.getAttribute('colour');
}


export function calculateAverage(totalClicks, numberOfGames) {
    return totalClicks / numberOfGames;
}
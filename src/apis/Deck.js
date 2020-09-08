const deck = [];

const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const suits = ["diamonds", "clubs", "hearts", "spades"];

for (suit of suits) {
    for (value of values) {
        card = {value: value, suit: suit}
        deck.push(card)
    }
}

export const deck;
const getDeck = () => {
    const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    const suits = ["diamonds", "clubs", "hearts", "spades"];
    const deck = [];

    for(let i = 0; i < suits.length; i++)
        {
        for(let x = 0; x < values.length; x++)
            {
                let card = {Value: values[x], Suit: suits[i]};
                deck.push(card);
            }
        }
    return deck;
}

export const deck = getDeck();




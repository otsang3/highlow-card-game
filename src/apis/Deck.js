const getDeck = () => {
    const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    const suits = ["Diamonds", "Clubs", "Hearts", "Spades"];
    const deck = [];
    const getImgURL = (value, suit) => {
        const imageURL = "https://deckofcardsapi.com/static/img/";
        const valueSuit = value + suit.charAt(0);
        return imageURL + valueSuit + ".png"
    }
    

    for(let i = 0; i < suits.length; i++)
        {
        for(let x = 0; x < values.length; x++)
            {
                let imgURL = getImgURL(values[x], suits[i])
                let card = {value: values[x], suit: suits[i], image: imgURL};
                deck.push(card);
            }
        }
    return deck;
}

export const deck = getDeck();




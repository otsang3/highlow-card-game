const getDeck = () => {
    const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    const suits = ["Diamonds", "Clubs", "Hearts", "Spades"];
    const deck = [];

    const getImgURL = (rank, suit) => {
        if (rank === "10") {
            rank = "0"
        }
        const imageURL = "https://deckofcardsapi.com/static/img/";
        const rankSuit = rank + suit.charAt(0);
        return imageURL + rankSuit + ".png"
    }

    const getValue = (rank) => {
        switch(rank) {
            case "A":
                return 1;
            case "J":
                return 11;
            case "Q":
                return 12;
            case "K":
                return 13;
            default:
                return parseInt(rank)
        }
    }
    

    for(let i = 0; i < suits.length; i++)
        {
        for(let x = 0; x < ranks.length; x++)
            {
                let imgURL = getImgURL(ranks[x], suits[i])
                let value = getValue(ranks[x])
                let card = {rank: ranks[x], suit: suits[i], value: value, imgURL: imgURL};
                deck.push(card);
            }
        }
    deck.sort(() => Math.random() - 0.5);
    return deck;
}

export const deck = getDeck();




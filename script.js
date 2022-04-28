let randomnSuit = () => {

    let Suit = ["diamond", "club", "heart", "spade"];
    let rand = Math.floor(Math.random() * Suit.length);
    if (rand == 0) {
        return (suitcard.innerHTML = ('<div class="diamonds"></div>'))
    } else if (rand == 1) {
        return (suitcard.innerHTML = ('<div class="clubs"></div>'))
    } else if (rand == 2) {
        return (suitcard.innerHTML = ('<div class="heart"></div>'))
    } else {
        return (suitcard.innerHTML = ('<div class="spades"></div>'))
    }
}

let CardNumber = () => {
    let ContentCard = Math.floor(Math.random() * 13 + 1)
    if (ContentCard == 1) {
        return "A";
    } else if (ContentCard == 11) {
        return "J";
    } else if (ContentCard == 12) {
        return "Q";
    } else if (ContentCard == 13) {
        return "K";
    } else {
        return ContentCard
    }
}

const centercard = document.querySelector('p');
centercard.innerHTML = CardNumber();
let suitcard = document.querySelector('.up');
suitcard.innerHTML = randomnSuit();

let downsuit = document.querySelector('.down')
downsuit.innerHTML = suitcard.innerHTML = randomnSuit()

console.log(CardNumber())
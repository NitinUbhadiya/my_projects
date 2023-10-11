function arrangeCards(cardPaths, div_id) {
  // console.log('Method called...', cardPaths)
  // 'game-board'
    const gameBoard = document.getElementById(div_id); // get the game board element
    const cardWidth = 100; // width of each card in pixels
    const cardHeight = 150; // height of each card in pixels
    let x = 150 * div_id[div_id.length-1]; // starting x position
    let y = 0 * div_id[div_id.length-1]; // starting y position

    // loop through each card path and create an img element for it
    for (let i = 0; i < 7; i++) {

      const cardImg = document.createElement('img');
      cardImg.src = cardPaths[i];
      // console.log(cardPaths[i])
      // cardPaths.splice(i, 1)
      cardImg.style.position = 'absolute';
    //   cardImg.style.position = 'relative';
      cardImg.style.left = x + 'px';
      cardImg.style.top = y + 'px';
      cardImg.style.height = cardHeight + 'px';
      cardImg.style.weight = cardWidth + 'px';
      
      // add the card img element to the game board
      gameBoard.appendChild(cardImg);
      
      // update the x and y positions for the next card
    //   x += 20; // add a small gap between casrds
      y += 37;
    }
  }


  // Shuffle the deck
  // /home/nitin/Code/web_dev/21_card_magic/src/img/cards
const cardPaths = [
  "src/img/cards/10_of_clubs.png",
  "src/img/cards/10_of_diamonds.png",
  "src/img/cards/10_of_hearts.png",
  "src/img/cards/10_of_spades.png",
  "src/img/cards/2_of_clubs.png",
  "src/img/cards/2_of_clubs.png",
  "src/img/cards/2_of_hearts.png",
  "src/img/cards/2_of_spades.png",
  "src/img/cards/3_of_clubs.png",
  "src/img/cards/3_of_diamonds.png",
  "src/img/cards/3_of_hearts.png",
  "src/img/cards/3_of_spades.png",
  "src/img/cards/4_of_clubs.png",
  "src/img/cards/4_of_diamonds.png",
  "src/img/cards/4_of_hearts.png",
  "src/img/cards/4_of_spades.png",
  "src/img/cards/5_of_clubs.png",
  "src/img/cards/5_of_diamonds.png",
  "src/img/cards/5_of_hearts.png",
  "src/img/cards/5_of_spades.png",
  "src/img/cards/6_of_clubs.png",
  "src/img/cards/6_of_diamonds.png",
  "src/img/cards/6_of_hearts.png",
  "src/img/cards/6_of_spades.png",
  "src/img/cards/7_of_clubs.png",
  "src/img/cards/7_of_diamonds.png",
  "src/img/cards/7_of_hearts.png",
  "src/img/cards/7_of_spades.png",
  "src/img/cards/8_of_clubs.png",
  "src/img/cards/8_of_diamonds.png",
  "src/img/cards/8_of_hearts.png",
  "src/img/cards/8_of_spades.png",
  "src/img/cards/9_of_clubs.png",
  "src/img/cards/9_of_diamonds.png",
  "src/img/cards/9_of_hearts.png",
  "src/img/cards/9_of_spades.png",
  "src/img/cards/ace_of_clubs.png",
  "src/img/cards/ace_of_diamonds.png",
  "src/img/cards/ace_of_hearts.png",
  "src/img/cards/ace_of_spades2.png",
  // "src/img/cards/ace_of_spades.png",
  "src/img/cards/black_joker.png",
  "src/img/cards/jack_of_clubs2.png",
  // "src/img/cards/jack_of_clubs.png",
  "src/img/cards/jack_of_diamonds2.png",
  // "src/img/cards/jack_of_diamonds.png",
  "src/img/cards/jack_of_hearts2.png",
  // "src/img/cards/jack_of_hearts.png",
  "src/img/cards/jack_of_spades2.png",
  // "src/img/cards/jack_of_spades.png",
  "src/img/cards/king_of_clubs2.png",
  // "src/img/cards/king_of_clubs.png",
  "src/img/cards/king_of_diamonds2.png",
  // "src/img/cards/king_of_diamonds.png",
  "src/img/cards/king_of_hearts2.png",
  // "src/img/cards/king_of_hearts.png",
  "src/img/cards/king_of_spades2.png",
  // "src/img/cards/king_of_spades.png",
  "src/img/cards/queen_of_clubs2.png",
  // "src/img/cards/queen_of_clubs.png",
  "src/img/cards/queen_of_diamonds2.png",
  // "src/img/cards/queen_of_diamonds.png",
  "src/img/cards/queen_of_hearts2.png",
  // "src/img/cards/queen_of_hearts.png",
  "src/img/cards/queen_of_spades2.png",
  // "src/img/cards/queen_of_spades.png",
  "src/img/cards/red_joker.png",
  // "src/img/cards/",
  // "src/img/cards/",
  // "src/img/cards/",
  // "src/img/cards/",
  // "src/img/cards/",
  // "src/img/cards/",
  // "src/img/cards/",
  // "src/img/cards/",
  // "src/img/cards/",
  // "src/img/cards/",
  // "src/img/cards/",
  // "src/img/cards/",
]
// alert(cardPaths.length)
// for (let i = deck.length - 1; i > 0; i--) {
//   const j = Math.floor(Math.random() * (i + 1));
//   [deck[i], deck[j]] = [deck[j], deck[i]];
// }

col_list = []
for (let col=0; col<3; col++){
  cards_col = []
  for (let i=0; i<7; i++){
    index = Math.floor(Math.random()* cardPaths.length)
    // console.log(i)
    // console.log('index: ' + index)
    cards_col.push(cardPaths[index])
    // console.log('cards_col: ', cards_col.length)
    cardPaths.slice(index, 1)
    // // delete cardPaths[index]
    // console.log('cardPaths: ', cardPaths.length)
    // alert(cardPaths.length)
    arrangeCards(cards_col, 'col'+(col+1))
  }
  col_list.push(cards_col);
}
console.log(col_list);




// alert(cardPaths.length)

// const suits = ["hearts", "diamonds", "clubs", "spades"];
// const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
// const deck = [];

// // Create the deck of cards
// for (let i = 0; i < suits.length; i++) {
//   for (let j = 0; j < ranks.length; j++) {
//     deck.push({suit: suits[i], rank: ranks[j]});
//   }
// }

// // Shuffle the deck
// for (let i = deck.length - 1; i > 0; i--) {
//   const j = Math.floor(Math.random() * (i + 1));
//   [deck[i], deck[j]] = [deck[j], deck[i]];
// }

// // Deal the cards
// let index = 0;
// for (let i = 0; i < 7; i++) {
//   for (let j = i; j < 7; j++) {
//     const card = deck[index++];
//     const stack = document.getElementById(`stack${j}`);
//     const div = document.createElement("div");
//     div.classList.add("card", "face-down");
//     div.dataset.suit = card.suit;
//     div.dataset.rank = card.rank;
//     div.style.top = `${i * 20}px`;
//     stack.appendChild(div);
//     console.log(card, stack, div);
//   }
// }

// // Set up the stock and waste piles
// for (let i = index; i < deck.length; i++) {
//   const card = deck[i];
//   const div = document.createElement("div");
//   div.classList.add("card", "face-down");
//   div.dataset.suit = card.suit;
//   div.dataset.rank = card.rank;
//   document.getElementById("stock").appendChild(div);
// }

// // Set up the click event handlers for the stock and waste piles
// document.getElementById("stock").addEventListener("click", function() {
//   const stock = document.getElementById("stock");
//   const waste = document.getElementById("waste");
//   if (stock.children.length > 0) {
//     const card = stock.lastChild;
//     card.classList.remove("face-down");
//     card.classList.add("face-up");
//     waste.appendChild(card);
//   }
// });

// document.getElementById("waste").addEventListener

console.log(document.querySelectorAll(".col"))
var numberOfCols = document.querySelectorAll(".col").length;
for (var col=0; col < numberOfCols; col++){
  document.querySelectorAll(".col")[col].addEventListener("click", function () {
    alert(this.id)
  });
}


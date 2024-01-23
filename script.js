let foundCards = []
let idColor = []
let clickedCard = null
let combosFound = []
let matchCards = 0

const cards = document.getElementsByClassName('card')

const colorHidden = document.getElementsByClassName('color-hidden')

// iterate through cards, and for each card attach an event lisenter
// for each card

// add event listener

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener('click', (event) => {
    // if there are four cards in the array
    //return
    if (foundCards.length === 4) {
      return
    }

    // console.log(event.target)
    const clickedCard = event.target
    // remove the class of 'color-hidden' from the classList of the clickedCard

    clickedCard.classList.remove('color-hidden')

    const colorAttribute = clickedCard.getAttribute('color')
    clickedCard.style.pointerEvents = 'none'

    //console.log('color', colorAttribute)
    //foundCards.push(colorAttribute)
    const idColor = clickedCard.getAttribute('id')
    foundCards.push(colorAttribute)
    foundCards.push(idColor)
    //
    //get the elment id
    // push the id
    if (foundCards.length === 4 && foundCards[0] === foundCards[2]) {
      matchCards++
      foundCards = []
      // clickedCard.classList.remove('color-hidden')
      //openCards = openCards + 2
    } else if (foundCards.length === 4 && foundCards[1] !== foundCards[3]) {
      // ....disable all board elements, disable body
      setTimeout(() => {
        console.log('color id', foundCards[1])
        let card1 = document.getElementById(foundCards[1])
        card1.classList.add('color-hidden')
        card1.style.pointerEvents = ''
        let card2 = document.getElementById(foundCards[3])
        card2.classList.add('color-hidden')
        card2.style.pointerEvents = ''
        // add color hidden to card 2
        // clickedCard.classList.add('color-hidden')

        foundCards = []
        //....renable the body, board elements
      }, 500)
    }
    if (matchCards === 6) {
      window.location.replace('index2.html')
    }
  })
}

document.getElementById('play').addEventListener('click', function () {
  window.location.href = 'index.html'
})

/*if (cards[i].colorAttribute === cards[i].colorAttribute) {
        const foundCards2 = cards[i].getAttribute('color')
        foundCards++
      }
    if (cards[i].colorAttribute !== cards[i].colorAttribute) {
      const foundCards3 = clickedCard.classList.add('color-hidden')
      console.log('hhhhh')
    }*/

/*
} else {
  console.log("The symbols on the two cards do not match.");
}

if (combosFound === 6) {
  alert('YOU WIN')
}
*/
/*
If it's the first card in a pair, remember its symbol.



If it's the second card in a pair:



Compare the symbols of the two cards.




If they match:

Keep the cards face-up.


Increment the number of matched pairs.

Check if all pairs have been matched.

If all pairs have been matched, end the game.

If they don't match:

Wait for a short period.

Flip both cards face-down.

If the game ends, display a congratulatory message with the number of moves and elapsed time.*/

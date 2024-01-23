let foundCards = []
let idColor = []
let clickedCard = null
let combosFound = []
//a counter variable used to keep track of the number of matches made by the user.
let matchCards = 0

//select all elements in the document with the class name 'card' and store them in the cards variable.
const cards = document.getElementsByClassName('card')

//select all elements in the document with the class name 'color-hidden' and store them in the colorHidden variable.
const colorHidden = document.getElementsByClassName('color-hidden')

// iterate through each element in the cards collection
for (let i = 0; i < cards.length; i++) {
  //for each card attach an event lisenter function for the 'click' event.
  cards[i].addEventListener('click', (event) => {
    // if there are 2 cards with an array that has a length of 4(once the user has found the maximum number of cards this ensures that the user cannot select any additional cards )

    if (foundCards.length === 4) {
      //return without executing any further code
      return
    }

    //target: refers to the element(cards) that triggered the event.
    //event.target: represent the specific card that the user clicked on.
    //assigning event.target to the clickedCard variable
    const clickedCard = event.target
    // remove the class of 'color-hidden' class from the clickedCard (this will show the card color)
    clickedCard.classList.remove('color-hidden')

    // this save the clickared 'color' in a colorAttribute vriable
    const colorAttribute = clickedCard.getAttribute('color')

    //used to disable another click events on the clickedCard element.
    clickedCard.style.pointerEvents = 'none'

    // this save the clickared 'id' in a idColor vriable
    const idColor = clickedCard.getAttribute('id')

    //we are adding(or saving) the colorAttribute value as a new element at the end of the foundCards array.
    foundCards.push(colorAttribute)
    //we are adding(or saving) the idColor value as a new element at the end of the foundCards array.(push the id)
    foundCards.push(idColor)

    //(foundCards.length === 4 )This condition checks if the length of the (foundCards.push(colorAttribute) array)  is equal to 4. This implies that the user has found and matched two cards.

    //(foundCards[0] === foundCards[2])This condition checks if the value of the first card in the foundCards.push(colorAttribute) array is equal to the value of the third card. This suggests that the user has found a pair of matching cards.
    //If both of these conditions are true, the code within the if statement {} block will be executed.
    if (foundCards.length === 4 && foundCards[0] === foundCards[2]) {
      //This code increments the value(let matchCards = 0) stored in the matchCards variable by 1.
      matchCards++
      //This code assigns an empty array ([]) to the foundCards variable. It clears the foundCards array, getting ready for the user to find the next set of matching cards.
      foundCards = []

      //(foundCards.length === 4 )This condition checks if the length of the (foundCards.push(colorId) array)  is equal to 4. This implies that the user has found and matched two cards.

      //foundCards[1] !== foundCards[3])This condition checks if the value of the second card in the (foundCards.push(clorid) array) is equal to the value of the fourth card. This suggests that the user has found a pair of different id cards.
      //If both of these conditions are true, the code within the if statement {} block will be executed.
    } else if (foundCards.length === 4 && foundCards[1] !== foundCards[3]) {
      //here we set a time out for the unmatched card to close after 500 milliseconds.

      setTimeout(() => {
        //this is a variable created for card1 with index number 1 from foundCards.push(idColor)array
        let card1 = document.getElementById(foundCards[1])
        //this hide the colour of the card
        card1.classList.add('color-hidden')
        //this prevent clicking on the same card again
        card1.style.pointerEvents = ''
        //this is a variable created for card2 with index number 3 from foundCards.push(idColor)array
        let card2 = document.getElementById(foundCards[3])
        //this hide the colour of the card
        card2.classList.add('color-hidden')
        //this prevent clicking on the same card again
        card2.style.pointerEvents = ''
        //This code assigns an empty array ([]) to the foundCards variable. It clears the foundCards array, getting ready for the user to find the next set of matching cards.
        foundCards = []
      }, 500)
    }
    //the if statment here says that if matchCards = 6 open the index2.html window
    if (matchCards === 6) {
      window.location.replace('index2.html')
    }
  })
}
//this select the play button id
document
  .getElementById('play')
  // this is an event listener added to the button in order to take us to the back to the game window (index.html)
  .addEventListener('click', function () {
    window.location.href = 'index.html'
  })

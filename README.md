# Memory Matching Cards game

the objective of the game is to match pairs of cards with the same color.

## example 

an example of a wireframe for the main game page:

-----------------------------

|                 Header                  |

-----------------------------

|                  Game                    |

|                                                |

|               Card Grid                |

-----------------------------

|                   Footer                 |

-----------------------------

## To do list for the overall game:

Create a grid of facedown cards on the game board.

Attach a click event listener to each card.

When a card is clicked:

Flip the card face-up to reveal the symbol.

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

If the game ends, display a congratulatory message with the number of moves and elapsed time.

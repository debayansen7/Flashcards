import { LOAD_All_DECKS, ADD_DECK, ADD_CARD, UPDATE_SCORE } from '../actions';
import { saveDeckTitle } from '../utils/api';

const InitialState = []

function decks (state = InitialState, action) {
  switch (action.type) {

    case LOAD_All_DECKS :
      return action.allDecks

    case ADD_DECK :
      let arrData = action.deck;
      let newArr = state;
      newArr = newArr.concat(arrData);
      saveDeckTitle(newArr);
      return state = newArr

    case ADD_CARD :
      let deckTitle = action.deckTitle;
      let cardData = action.card;
      let deckState = state.map((card) => {
        if(card.title === deckTitle){
          card.questions.push(cardData);
          card.count = card.count+1;
        }
        return card
      });
      saveDeckTitle(deckState);
      return state = deckState

    case UPDATE_SCORE:
      let deckScore = action.score;
      deckTitle = action.title;
      deckState = state.map((deck) => {
        if(deck.title === deckTitle){
          deck.score = deckScore;
        }
        return deck
      });
      saveDeckTitle(deckState);
      return state = deckState;

    default :
      return state
  }
}

export default decks

import { LOAD_All_DECKS, ADD_DECK, ADD_CARD } from '../actions';
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
      // console.log("New state: ",newArr);
      saveDeckTitle(newArr);
      return state = newArr

    case ADD_CARD :
      console.log("State: ",state);
      let deckTitle = action.deckTitle;
      let cardData = action.card;
      let deckState = state.map((card) => {
        if(card.title === deckTitle){
          card.questions.push(cardData);
          card.count = card.count+1;
        }
        return card
      });
      // console.log("New State: ",deckState);
      return state = deckState

    default :
      return state
  }
}

export default decks

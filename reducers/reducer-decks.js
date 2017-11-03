import { LOAD_All_DECKS, ADD_DECK } from '../actions';
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

    default :
      return state
  }
}

export default decks

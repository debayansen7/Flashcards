// import { LOAD_DECK, LOAD_QUESTIONS } from '../actions'
import { LOAD_DECK, LOAD_QUESTIONS, ADD_CARD } from '../actions';
import { saveDeckTitle } from '../utils/api';

function selectedDeck (state = {}, action) {
  switch (action.type) {

    case LOAD_DECK :
      // console.log(action.deck);
      return {
        ...state,
        ...action.deck
      }

    case LOAD_QUESTIONS :
      return {
        ...state,
        ...action.questions
      }

    case ADD_CARD :
      let arrData = action.card;
      let newArr = state.questions;
      newArr = newArr.concat(arrData);
      let counter = state.count;
      console.log("New state: ",newArr);
      // saveDeckTitle(newArr);
      return {
        ...state,
        questions: newArr,
        count: counter+1
      }

    default :
      return state
  }
}

export default selectedDeck

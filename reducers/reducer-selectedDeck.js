// import { LOAD_DECK, LOAD_QUESTIONS } from '../actions'
import { LOAD_DECK, LOAD_QUESTIONS, ADD_CARD, UPDATE_SCORE, UPDATE_CURRENT_CARD } from '../actions/actionTypes';
import { saveDeckTitle } from '../utils/api';

function selectedDeck (state = {}, action) {
  switch (action.type) {

    case LOAD_DECK :
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
      return {
        ...state,
        questions: newArr,
        count: counter+1
      }

    case UPDATE_SCORE:
      return {
        ...state,
        score: action.score
      }

    case UPDATE_CURRENT_CARD:
      return {
        ...state,
        currentCard: action.currentCard
      }

    default :
      return state
  }
}

export default selectedDeck

// import { LOAD_DECK, LOAD_QUESTIONS } from '../actions'
import { LOAD_DECK, LOAD_QUESTIONS, ADD_CARD, UPDATE_SCORE, UPDATE_CURRENT_CARD } from '../actions';
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

    case UPDATE_SCORE:
      console.log("Action Score-",action.score);
      console.log("Action Title-",action.title);
      return {
        ...state,
        score: action.score
      }

    case UPDATE_CURRENT_CARD:
      console.log("Action -",action.currentCard);
      return {
        ...state,
        currentCard: action.currentCard
      }

    default :
      return state
  }
}

export default selectedDeck

import { LOAD_DECK, LOAD_QUESTIONS, ADD_CARD } from '../actions'

function selectedDeck (state = {}, action) {
  switch (action.type) {

    case LOAD_DECK :
      console.log(action.deck);

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
      let arrData = action.question;
      let newArr = state.questions;
      newArr = newArr.concat(arrData);
      // console.log("New state: ",newArr);
      // saveDeckTitle(newArr);
      return state.questions = newArr

    default :
      return state
  }
}

export default selectedDeck

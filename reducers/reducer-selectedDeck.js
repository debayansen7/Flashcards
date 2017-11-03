import { LOAD_DECK, LOAD_QUESTIONS } from '../actions'

function selectedDeck (state = {}, action) {
  switch (action.type) {
    case LOAD_DECK :
      return {
        ...state,
        ...action.selectedDeck,
      }

    case LOAD_QUESTIONS :
      return {
        ...state,
        ...action.entry
      }

    default :
      return state
  }
}

export default selectedDeck

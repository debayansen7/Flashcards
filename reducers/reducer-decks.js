import { LOAD_All_DECKS, CREATE_DECK, REMOVE_DECK } from '../actions'

function decks (state = {}, action) {
  switch (action.type) {
    case LOAD_All_DECKS :
      return {
        ...state,
        ...action.entries,
      }
    case CREATE_DECK :
      return {
        ...state,
        ...action.entry
      }

    case REMOVE_DECK :
      return {
        ...state,
        ...action.entry
      }

    default :
      return state
  }
}

export default decks

import { LOAD_QUIZ_QUESTIONS  } from '../actions/actionTypes';
import { saveDeckTitle } from '../utils/api';

const InitialState = []

function quiz (state = InitialState, action) {
  switch (action.type) {

    case LOAD_QUIZ_QUESTIONS:
      return action.questions

    default :
      return state
  }
}

export default quiz

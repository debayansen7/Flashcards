import { LOAD_QUIZ_QUESTIONS  } from '../actions';
import { saveDeckTitle } from '../utils/api';

const InitialState = []

function quiz (state = InitialState, action) {
  switch (action.type) {

    case LOAD_QUIZ_QUESTIONS:
      // console.log(action);
      return action.questions

    default :
      return state
  }
}

export default quiz

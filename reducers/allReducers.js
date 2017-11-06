import {combineReducers} from 'redux';
import decks from './reducer-decks'
import selectedDeck from './reducer-selectedDeck';
import quiz from './reducer-quiz';

const allReducer = combineReducers({
  decks: decks,
  selectedDeck: selectedDeck,
  quiz: quiz
})

export default allReducer;

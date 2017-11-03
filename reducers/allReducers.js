import {combineReducers} from 'redux';
import decks from './reducer-decks'
import selectedDeck from './reducer-selectedDeck';


const allReducer = combineReducers({
  decks: decks,
  selectedDeck: selectedDeck,
})

export default allReducer

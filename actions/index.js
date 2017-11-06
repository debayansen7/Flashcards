import {
  LOAD_All_DECKS,
  ADD_DECK,
  LOAD_DECK,
  LOAD_QUESTIONS,
  ADD_CARD,
  UPDATE_SCORE,
  UPDATE_CURRENT_CARD,
  LOAD_QUIZ_QUESTIONS
} from './actionTypes';

export function loadAllDecks(allDecks) {
  return {
    type: LOAD_All_DECKS,
    allDecks,
  }
}
export function addDeck(deck) {
  return {
    type: ADD_DECK,
    deck,
  }
}

export function loadDeck(deck) {
  return {
    type: LOAD_DECK ,
    deck,
  }
}
export function loadQuetions(questions) {
  return {
    type: LOAD_QUESTIONS ,
    questions,
  }
}
export function addCard(deckTitle, card) {
  return {
    type: ADD_CARD,
    deckTitle,
    card,
  }
}
export function updateScore (title, score){
  return {
    type: UPDATE_SCORE ,
    title,
    score,
  }
}
export function updateCurrentCard (currentCard){
  return {
    type: UPDATE_CURRENT_CARD ,
    currentCard,
  }
}

export function loadQuizQuestions (questions){
  return {
    type: LOAD_QUIZ_QUESTIONS ,
    questions,
  }
}

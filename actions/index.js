export const LOAD_All_DECKS = 'LOAD_All_DECKS';
export const ADD_DECK = 'ADD_DECK';

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

export const LOAD_DECK = 'LOAD_DECK';
export const LOAD_QUESTIONS = 'LOAD_QUESTIONS';
export const ADD_CARD = 'ADD_CARD';
export const UPDATE_SCORE = 'UPDATE_SCORE';
export const UPDATE_CURRENT_CARD = 'UPDATE_CURRENT_CARD';

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
  // console.log(currentCard);
  return {
    type: UPDATE_CURRENT_CARD ,
    currentCard,
  }
}

export const LOAD_QUIZ_QUESTIONS = 'LOAD_QUIZ_QUESTIONS';
export function loadQuizQuestions (questions){
  return {
    type: LOAD_QUIZ_QUESTIONS ,
    questions,
  }
}

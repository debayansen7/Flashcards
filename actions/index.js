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
export function addCard(deckTitle, question) {
  return {
    type: ADD_CARD,
    deckTitle,
    question,
  }
}

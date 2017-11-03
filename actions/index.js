export const LOAD_All_DECKS = 'LOAD_All_DECKS';
export const CREATE_DECK = 'CREATE_DECK';
export const REMOVE_DECK = 'REMOVEll_DECK';

export function loadAllDecks(allDecks) {
  return {
    type: LOAD_All_DECKS,
    allDecks,
  }
}
export function createDeck(deck) {
  return {
    type: CREATE_DECK,
    deck,
  }
}
export function removeDeck(deck) {
  return {
    type: REMOVE_DECK,
    deck,
  }
}

export const LOAD_DECK = 'LOAD_DECK';
export const LOAD_QUESTIONS = 'LOAD_QUESTIONS';

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

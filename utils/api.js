import { AsyncStorage } from 'react-native';

const key = 'Decks';

// getDecks: return all of the decks along with their titles, questions, and answers.
export function getDecks(){
  return AsyncStorage.getItem(key).then((data) => {return JSON.parse(data)})
};

// getDeck: take in a single id argument and return the deck associated with that id.
export function getDeck(keyDeck){
  return AsyncStorage.getItem(key).then((data) => {
    let decks = JSON.parse(data).Decks
    return decks.filter((deck) => deck.title === keyDeck)
  })
};

// saveDeckTitle: take in a single title argument and add it to the decks.
export function saveDeckTitle(data){
  return AsyncStorage.mergeItem(key, JSON.stringify({
    [key]: data
  }))
};

// addCardToDeck: take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title.
export function addCardToDeck(){

};

export function removeData (key) {
  return AsyncStorage.getItem(key)
    .then((results) => {
      const data = JSON.parse(results)
      data[key] = undefined
      delete data[key]
      AsyncStorage.setItem(key, JSON.stringify(data))
    })
}

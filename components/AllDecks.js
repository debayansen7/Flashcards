import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { loadAllDecks } from '../actions/index';

import { white, gray, black, lightPurp } from '../utils/colors'
import { getDecks } from '../utils/api'

class AllDecks extends React.Component{

  componentDidMount() {
    getDecks().then((results)=> {
      if(results !== null){
        let decks = results.Decks;
        // console.log("Results: ",decks);
        this.props.loadAllDecks(decks)
      }

    })
  }

  renderDecks = (deckList) => {
    return (
      <View>
        {deckList}
      </View>
    );
  }

  // <View style={styles.deckListStyle} key={deck.title} >
  // </View>

  render(){
    const {decks} = this.props;
    return(
      <View style={styles.container}>
        <Text style={styles.header1}>All Decks here:</Text>
        {
          decks.length >= 1 ?
          decks.map((deck)=> {
            return (
                <TouchableOpacity
                  style={styles.deckListStyle}
                  key={deck.title}
                  onPress={() => this.props.navigation.navigate('Deck', {deckTitle: deck.title})}>
                  <Text style={styles.deckListText}>{deck.title}</Text>
                  <Text style={styles.deckListText}>{deck.questions.length} Cards</Text>
                </TouchableOpacity>
            )
          })
          :
          <Text >No Decks yets</Text>
        }
      </View>
    );
  }
}

function mapStateToProps({decks}) {
  return{decks}
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({loadAllDecks},dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AllDecks);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header1:{
    color:black,
    fontWeight: 'bold',
    fontSize: 20,
  },
  deckListStyle: {
    backgroundColor: white,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height: '20%',
    padding: 10,
    margin:5,
    borderColor : lightPurp,
    borderWidth : 2,
    borderRadius : 7
  },
  deckListText: {
    color:black,
    fontSize: 20,
  }

});

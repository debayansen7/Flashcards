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

  //renders the list of decks
  renderList = ({ item }) => {
    let cardTitle = item.title;
    let cardCount = item.questions.length;
    // console.log(cardTitle, cardCount);
    return(
      <TouchableOpacity style={styles.deckListStyle}
        onPress={() => this.props.navigation.navigate('Deck',{deckTitle: cardTitle, deckCardCount: cardCount})}>
        <Text style={styles.deckListText}>{cardTitle} Deck - {cardCount} Cards</Text>
      </TouchableOpacity>
    )
  };

  // returns the key for the FlatList
  _keyExtractor = (item, index) => index;

  render(){
    const {decks} = this.props;
    // console.log(decks);
    return(
      <View style={styles.container}>
        <Text style={styles.header1}>All Decks here:</Text>
        {
          decks !== [] ?
          <FlatList
            data={decks} renderItem = {this.renderList} keyExtractor={this._keyExtractor}
          />
          :
          <Text >No Decks yets</Text>
        }
      </View>
    )
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

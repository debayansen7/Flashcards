import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { loadAllDecks } from '../actions/index';

import { getDecks } from '../utils/api';
import styles from '../components/styles';

class AllDecks extends React.Component{

  componentDidMount() {
    getDecks().then((results)=> {
      if(results !== null){
        let decks = results.Decks;
        this.props.loadAllDecks(decks)
      }

    })
  }

  //renders the list of decks
  renderList = ({ item }) => {
    let cardTitle = item.title;
    let cardCount = item.questions.length;
    let cardScore = item.score;
    return(
      <TouchableOpacity style={styles.deckListStyle}
        onPress={() => this.props.navigation.navigate('Deck',{deckTitle: cardTitle, deckCardCount: cardCount})}>
        <Text style={styles.deckListText}>Deck - {cardTitle}, Cards - {cardCount} </Text>
      </TouchableOpacity>
    )
  };

  // returns the key for the FlatList
  _keyExtractor = (item, index) => index;

  render(){
    const {decks} = this.props;
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

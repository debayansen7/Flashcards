import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { loadDeck } from '../actions/index';

import { white, gray, black, green } from '../utils/colors';
import { getDeck } from '../utils/api';

class Deck extends React.Component{
  constructor(props){
  	super(props);

    this.toAddCardSection= this.toAddCardSection.bind(this);
    this.toStartQuizSection= this.toStartQuizSection.bind(this);
  }

  toAddCardSection(){
    console.log("Go to AddCardSection");
    this.props.navigation.navigate('NewQuestionView', {deck: this.props.selectedDeck});
  }

  toStartQuizSection(){
    console.log("Go to StartQuizSection");
    this.props.navigation.navigate('Quiz', {deck: this.props.selectedDeck});
  }

  componentDidMount() {
    getDeck().then((results)=> {
      let dataSet = results.Decks;
      console.log(dataSet);
      let selectedDeck = this.props.navigation.state.params.deckTitle;
      console.log(selectedDeck);
      let newArr = dataSet.filter((deck) => deck.title === selectedDeck)
      console.log(newArr);
      let objData = {
        title: newArr[0].title,
        questions: newArr[0].questions,
        count: newArr[0].questions.length
      }
      console.log(objData);
      this.props.loadDeck(objData)
      // this.setState({
      //   title: this.props.navigation.state.params.deckTitle
      // })
    });
  }

  render(){
    console.log(this.props.navigation);
    const {selectedDeck} = this.props;
    return(
      <View style={styles.container}>
        <Text style={styles.header1}>{selectedDeck.title}</Text>
        <Text style={styles.header2}>{selectedDeck.count} - Cards</Text>
        <TouchableOpacity style={styles.addBtn} onPress={this.toAddCardSection}>
          <Text>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.startQuizBtn} onPress={this.toStartQuizSection}>
          <Text>Start Quiz</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

function mapStateToProps({selectedDeck}) {
  return{selectedDeck}
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({loadDeck},dispatch)
}
// export default Deck;
export default connect(mapStateToProps, mapDispatchToProps)(Deck);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header1:{
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  header2:{
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  addBtn:{
    backgroundColor: white,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    margin:5,
    borderColor : green,
    borderWidth : 2,
    borderRadius : 7
  },
  startQuizBtn:{
    backgroundColor: white,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    margin:5,
    borderColor : green,
    borderWidth : 2,
    borderRadius : 7
  },
  text:{

  }

});

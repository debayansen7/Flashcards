import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { loadDeck, loadQuizQuestions } from '../actions/index';

import { white, gray, black, green } from '../utils/colors';
import { getDeck } from '../utils/api';
import { clearlocalNotification, setlocalNotification } from '../utils/helper';

class Deck extends React.Component{
  constructor(props){
  	super(props);
    this.state={
      title: '',
      count: 0,
    }
    this.toAddCardSection= this.toAddCardSection.bind(this);
    this.toStartQuizSection= this.toStartQuizSection.bind(this);
  }

  toAddCardSection(){
    // console.log("Go to AddCardSection");
    this.props.navigation.navigate('NewQuestionView', {deck: this.props.selectedDeck});
  }

  toStartQuizSection(){
    // console.log("Go to StartQuizSection");
    clearlocalNotification().then(setlocalNotification)
    this.props.navigation.navigate('Quiz', {deck: this.props.selectedDeck});
  }

  componentDidMount() {
      // console.log("deck loading");
      let selectedDeck = this.props.navigation.state.params.deckTitle;
      getDeck(selectedDeck).then((deck)=> {
        // console.log(deck);
        let objData = {
          title: deck[0].title,
          questions: deck[0].questions,
          count: deck[0].questions.length,
          score: deck[0].score,
          currentCard: 0,
        }
        // console.log(objData);
        // console.log(this.props.selectedDeck.count);
        this.setState({
          title:objData.title,
          count: objData.count
        })
        // if(this.props.selectedDeck.count === undefined ){
          this.props.loadDeck(objData)
          // this.props.loadQuizQuestions(objData.questions)
        //   console.log("True");
        // }else{
        //   console.log("False");
        // }
    });
  }

  render(){
    // console.log(this.props.navigation.goBack);
    const {title, count, score} = this.props.selectedDeck;
    return(
      <View style={styles.container}>
        <Text style={styles.header1}>{title}</Text>
        <Text style={styles.header2}>{count} - Cards, Score - {score}</Text>
        <TouchableOpacity style={styles.addBtn} onPress={this.toAddCardSection}>
          <Text>Add Card</Text>
        </TouchableOpacity>
        { count !== 0 ?
          <TouchableOpacity style={styles.startQuizBtn} onPress={this.toStartQuizSection}>
            <Text>Start Quiz</Text>
          </TouchableOpacity>
          :
          <Text> </Text>
        }
      </View>
    );
  }
}

function mapStateToProps({decks, selectedDeck}) {
  return{decks, selectedDeck}
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({loadDeck, loadQuizQuestions},dispatch)
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

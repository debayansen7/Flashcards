import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { loadDeck, loadQuizQuestions } from '../actions/index';
import { getDeck } from '../utils/api';
import { clearlocalNotification, setlocalNotification } from '../utils/helper';
import styles from '../components/styles';

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
    this.props.navigation.navigate('NewQuestionView', {deck: this.props.selectedDeck});
  }

  toStartQuizSection(){
    clearlocalNotification().then(setlocalNotification)
    this.props.navigation.navigate('Quiz', {deck: this.props.selectedDeck});
  }

  componentDidMount() {
    let selectedDeck = this.props.navigation.state.params.deckTitle;
    getDeck(selectedDeck).then((deck)=> {
      let objData = {
        title: deck[0].title,
        questions: deck[0].questions,
        count: deck[0].questions.length,
        score: deck[0].score,
        currentCard: 0,
      }
      this.setState({title:objData.title,count: objData.count})
      this.props.loadDeck(objData)
    });
  }

  render(){
    const {title, count, score} = this.props.selectedDeck;
    return(
      <View style={styles.container}>
        <Text style={styles.deckHeader1}>{title}</Text>
        <Text style={styles.deckHeader2}>{count} - Cards, Score - {score}</Text>
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
export default connect(mapStateToProps, mapDispatchToProps)(Deck);

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Animated} from 'react-native';
import { purple, lightPurp, red, green, white, gray, black, pink } from '../utils/colors'

import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { updateScore, updateCurrentCard } from '../actions/index';

class Quiz extends React.Component{
  constructor(props){
  	super(props);
  	this.state = {
      cards:[],
      currentCard: {},
      cardCount: 0,
      allCardsCount: 0,
      answerShow: false,
      score: 0,
      showAns: false,
    };
    this.correctAnswer = this.correctAnswer.bind(this);
    this.incorrectAnswer = this.incorrectAnswer.bind(this);
    this.nxtQuestion = this.nxtQuestion.bind(this);
    this.resetQuiz = this.resetQuiz.bind(this);
    this.renderQuestion = this.renderQuestion.bind(this);
    this.showAns = this.showAns.bind(this);
  }

  componentDidMount() {

    // console.log(this.props.selectedDeck);
    // // console.log(this.props.quiz);
    // const { questions } = this.props.selectedDeck;
    // this.setState({
    //   allCardsCount: this.props.selectedDeck.questions.length,
    //   cards: this.props.selectedDeck.questions,
    //   currentCard: questions[this.state.cardCount]
    // })
    // console.log(this.state.currentCard);

    // this.animatedValue = new Animated.Value(0);
  }

  showAns(){
    this.setState({
      showAns: true
    })
  };

  correctAnswer(){
    console.log("Score: ",this.props.selectedDeck.score);
    let title = this.props.selectedDeck.title;
    let score = 0;
    score = this.props.selectedDeck.score+1;
    console.log(score);
    this.props.updateScore(title, score);
  };

  incorrectAnswer(){
    console.log("Score: ",this.props.selectedDeck.score);
    let title = this.props.selectedDeck.title;
    let score = 0;
    if(this.props.selectedDeck.score > 0){
      score = this.props.selectedDeck.score-1;
      console.log(score);
      this.props.updateScore(title, score);
    }
  };

  nxtQuestion(){
    console.log("Next Question");
    let currentCard = this.props.selectedDeck.currentCard+1;
    console.log(currentCard);
    this.props.updateCurrentCard(currentCard);
  };

  resetQuiz(){
    console.log("Reset Quiz");
    let title = this.props.selectedDeck.title;
    this.props.updateScore(title, 0);
    this.props.updateCurrentCard(0);

  };

  renderQuestion(qList){
    // console.log(qList);
    const correct = 'correct';
    const incorrect = 'incorrect';
    return (
      <View>
        <View style={styles.qArea}>
          <Text style={styles.qHeader}>Question:</Text>
          <Text style={styles.qText}>{qList.question}</Text>
        </View>
        {
          this.state.showAns ?
          <View style={styles.qArea}>
            <Text style={styles.qHeader}>Answer:</Text>
            <Text style={styles.qText}>{qList.answer}</Text>
          </View>
          :
          <View style={styles.qArea}></View>
        }

        <View style={styles.bodyBtn}>
          <TouchableOpacity style={styles.showAns} onPress={this.showAns}>
            <Text style={styles.showAnsText}>Show Answer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.correctBtn} onPress={this.correctAnswer}>
            <Text style={styles.inputText}>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.incorrectBtn} onPress={this.incorrectAnswer}>
            <Text style={styles.inputText}>Incorrect</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  };

  render() {
    // console.log(this.props);
    const { count, currentCard, questions, score } = this.props.selectedDeck;
    // const { cardCount, allCardsCount, currentCard, cards, score } = this.state;
    // const { cardCount, allCardsCount, currentCard, cards, score } = this.props.quiz;
    // console.log(questions);

    return(
      <View style={styles.container}>

        <View style={styles.counterArea}>
          <Text style={styles.counterText}>Question No: {currentCard+1}/{count}</Text>
        </View>

        <View style={styles.bodyArea}>
          {this.renderQuestion(questions[currentCard])}
        </View>

        <View style={styles.btnArea}>
          <Text style={styles.scoreArea}>Score: {score}</Text>
          <TouchableOpacity style={styles.resetBtn} onPress={this.resetQuiz}>
            <Text style={styles.btnText}>Reset Quiz</Text>
          </TouchableOpacity>
          {count > 1 && currentCard+1 !== count?
            <TouchableOpacity style={styles.nxtBtn} onPress={this.nxtQuestion}>
              <Text style={styles.btnText}>Next Question</Text>
            </TouchableOpacity>
            :
            <Text> </Text>
          }
        </View>

      </View>
    );
  }

}

function mapStateToProps({decks, selectedDeck}) {
  return{decks, selectedDeck}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({updateScore, updateCurrentCard},dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    padding:10,
  },
  counterArea: {
    width: '100%',
    height: '10%',
    padding: 10,
    backgroundColor: lightPurp,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    borderColor: purple,
    borderWidth: 2,
    marginBottom: 5,
  },
  counterText:{
    fontSize: 18,
    color: white,
  },
  bodyArea: {
    height: '70%',
    backgroundColor: white,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: purple,
    borderWidth: 2,
    marginBottom: 5,
  },
  qArea:{
    height: '35%',
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  qHeader:{
    fontSize: 18,
    fontWeight: 'bold',
    textDecorationLine : 'underline',
  },
  qText:{
    fontSize: 18,
    fontWeight: 'bold',
  },
  bodyBtn: {
    height: '30%',
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  showAns:{
    backgroundColor: white,
    padding: 10,
    borderColor: green,
    borderWidth: 2,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  showAnsText:{
    color: green,
    fontSize: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  correctBtn: {
    backgroundColor: green,
    padding: 10,
    borderColor: black,
    borderWidth: 2,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  incorrectBtn: {
    backgroundColor: red,
    padding: 10,
    borderColor: black,
    borderWidth: 2,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  inputText:{
    color: white,
    fontSize: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnArea: {
    height: '15%',
    flex:1,
    flexDirection: 'row',
    backgroundColor: white,
    borderColor: purple,
    borderWidth: 2,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scoreArea:{
    backgroundColor: white,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  nxtBtn:{
    backgroundColor: green,
    padding: 10,
    borderWidth: 2,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  resetBtn:{
    backgroundColor: pink,
    padding: 10,
    borderWidth: 2,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  btnText:{
    color: white,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

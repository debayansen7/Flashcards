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
      showScore: false,
    };
    this.correctAnswer = this.correctAnswer.bind(this);
    this.incorrectAnswer = this.incorrectAnswer.bind(this);
    this.resetQuiz = this.resetQuiz.bind(this);
    this.renderQuestion = this.renderQuestion.bind(this);
    this.showAns = this.showAns.bind(this);
    this.updateScore = this.updateScore.bind(this);
    this.updateCard = this.updateCard.bind(this);
    this.backToDeck = this.backToDeck.bind(this);
  };

  componentWillMount() {
    this.animatedValue = new Animated.Value(0);
    this.value = 0;
    this.animatedValue.addListener(({ value }) => {
      this.value = value;
    })
    this.frontInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['0deg','180deg']
    })

    this.backInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['180deg','360deg']
    })
  };

  showAns(){
    if(this.value >= 90){
      this.setState({showAns: false})
      Animated.spring(this.animatedValue, {
        toValue: 0,
        friction: 8,
        tension: 11,
      }).start();
    }else{
      this.setState({showAns: true})
      Animated.spring(this.animatedValue, {
        toValue: 180,
        friction: 8,
        tension: 11,
      }).start();
    }

  };

  updateScore(score){
    console.log("Score: ",score);
    let title = this.props.selectedDeck.title;
    this.props.updateScore(title, score);
  };

  updateCard(currentCard){
    if(currentCard >= this.props.selectedDeck.count){
      this.setState({showScore:true});
      this.props.updateCurrentCard(0);
    }else{
      this.props.updateCurrentCard(currentCard);
    }
  };

  correctAnswer(){
    let score = 0;
    if(this.state.score < this.props.selectedDeck.count){
      score = this.state.score+1;
      this.setState({score})
      console.log("Increment Score: ",score);
      this.updateScore(score);
    }
    this.setState({showAns: false});
    this.showAns();
    let currentCard = this.props.selectedDeck.currentCard+1;
    this.updateCard(currentCard);
  };

  incorrectAnswer(){
    this.setState({showAns: false});
    this.showAns();
    let currentCard = this.props.selectedDeck.currentCard+1;
    this.updateCard(currentCard);
  };

  resetQuiz(){
    let title = this.props.selectedDeck.title;
    this.props.updateScore(title, 0);
    this.props.updateCurrentCard(0);
    this.setState({showScore:false});
    this.setState({showAns: false});
    this.showAns();
  };

  backToDeck(){
    //Navigate to deck details page
    const {goBack} = this.props.navigation;
    goBack();
  }

  renderQuestion(qList){
    const correct = 'correct';
    const incorrect = 'incorrect';
    const frontAnimationStyle = {
      transform: [
        { rotateY: this.frontInterpolate }
      ]
    };
    const backAnimationStyle = {
      transform: [
        { rotateY: this.backInterpolate }
      ]
    };

    return (
      <View>
        {
          !this.state.showAns ?
          <Animated.View style={[styles.qArea, frontAnimationStyle]}>
          <Text style={styles.qHeader}>Question:</Text>
          <Text style={styles.qText}>{qList.question}</Text>
          </Animated.View>
          :
          <Animated.View style={[styles.qArea, styles.qAreaBk, backAnimationStyle]}>
          <Text style={styles.qHeader}>Answer:</Text>
          <Text style={styles.qText}>{qList.answer}</Text>
          </Animated.View>
        }

        <View style={styles.bodyBtn}>
          {
            this.state.showAns ?
            <TouchableOpacity style={styles.showAns} onPress={this.showAns}>
              <Text style={styles.showAnsText}>Show Question</Text>
            </TouchableOpacity>
            :
            <TouchableOpacity style={styles.showAns} onPress={this.showAns}>
              <Text style={styles.showAnsText}>Show Answer</Text>
            </TouchableOpacity>
          }
          <TouchableOpacity
            style={!this.state.showAns ? styles.disabled : styles.correctBtn}
            onPress={this.correctAnswer}
            disabled={!this.state.showAns}>
            <Text style={styles.inputText}>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={!this.state.showAns ? styles.disabled : styles.incorrectBtn}
            onPress={this.incorrectAnswer}
            disabled={!this.state.showAns}>
            <Text style={styles.inputText}>Incorrect</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  };

  render() {
    const { count, currentCard, questions } = this.props.selectedDeck;
    const { score } = this.state;
    return(
      <View style={styles.container}>

        <View style={styles.counterArea}>
          <Text style={styles.counterText}>Question No: {currentCard+1}/{count}</Text>
        </View>

        {
          this.state.showScore ?
          <View style={styles.bodyArea}>
          <Text>Final Score: {this.props.selectedDeck.score}</Text>
          </View>
          :
          <View style={styles.bodyArea}>
            {this.renderQuestion(questions[currentCard])}
          </View>
        }

        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.resetBtn} onPress={this.resetQuiz}>
            <Text style={styles.btnText}>Reset Quiz</Text>
          </TouchableOpacity>
          { this.state.showScore ?
            <TouchableOpacity style={styles.nxtBtn} onPress={this.backToDeck}>
              <Text style={styles.btnText}>Back to Deck</Text>
            </TouchableOpacity>
            :
            <Text> </Text>
          }
        </View>

      </View>
    );
  }

};

function mapStateToProps({decks, selectedDeck}) {
  return{decks, selectedDeck}
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({updateScore, updateCurrentCard},dispatch)
};

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
    marginBottom: 5,
  },
  qArea:{
    height: '35%',
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backfaceVisibility: 'hidden',
  },
  qAreaBk:{
    backgroundColor: white,
    // position: 'absolute',
    // top: 0
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
    margin: 2,
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
    margin: 2,
  },
  incorrectBtn: {
    backgroundColor: red,
    padding: 10,
    borderColor: black,
    borderWidth: 2,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
  },
  disabled:{
    backgroundColor: gray,
    padding: 10,
    borderColor: black,
    borderWidth: 2,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
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

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Animated} from 'react-native';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { updateScore, updateCurrentCard } from '../actions/index';
import styles from '../components/styles';

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
    let title = this.props.selectedDeck.title;
    this.props.updateScore(title, score);
  };

  updateCard(currentCard){
    this.showAns();
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
      this.updateScore(score);
    }
    this.setState({showAns: false});
    let currentCard = this.props.selectedDeck.currentCard+1;
    this.updateCard(currentCard);
  };

  incorrectAnswer(){
    this.setState({showAns: false});
    let currentCard = this.props.selectedDeck.currentCard+1;
    this.updateCard(currentCard);
    this.updateScore(this.state.score);
  };

  resetQuiz(){
    let title = this.props.selectedDeck.title;
    this.setState({score: 0});
    this.updateCard(0);
    this.updateScore(0);
    this.setState({showScore:false});
    this.setState({showAns: false});
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
          <Text style={styles.qText}>Your Final Score: {this.props.selectedDeck.score}/{count}</Text>
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

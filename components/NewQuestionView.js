import React,{ Component } from 'react';
import { KeyboardAvoidingView, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { addCard } from '../actions/index';
import styles from '../components/styles';

class NewQuestionView extends Component{
  constructor(props){
  	super(props);
  	this.state = {
      question: '',
      answer: '',
      title: ''
    };
    this.submit = this.submit.bind(this);
  }

  submit(){
    if(this.state.question !== '' && this.state.answer!== '' ){
      alert("Successfully submited your Question and Answer.");
      let cardData = {
        question : this.state.question,
        answer : this.state.answer
      }
      this.setState({title: this.props.selectedDeck.title})
      let deckTitle = this.props.selectedDeck.title;

      //save to redux
      this.props.addCard(deckTitle, cardData);

      //Navigate to deck details page
      const {goBack} = this.props.navigation;
      goBack();

    }else{
      alert("Cannot have blank fields!!")
    }

    //reset state
    this.setState({question: '', answer: ''})
  }

  render(){
    return(
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <Text style={styles.text}>Your question:</Text>
        <TextInput
          style={styles.textInput}
          value={this.state.question}
          placeholder="Add your question"
          onChangeText={(question) => this.setState({question})}
          blurOnSubmit/>

        <Text style={styles.text}>Correct answer:</Text>
        <TextInput
          style={styles.textInput}
          value={this.state.answer}
          placeholder="Add your answer"
          onChangeText={(answer) => this.setState({answer})}
          blurOnSubmit/>

        <TouchableOpacity onPress={this.submit} style={styles.submit}>
          <Text style={styles.submitText}>SUBMIT</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}
function mapStateToProps({decks, selectedDeck}) {
  return{decks, selectedDeck}
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({addCard},dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(NewQuestionView);

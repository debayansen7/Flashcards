import React from 'react';
import { KeyboardAvoidingView, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { addCard } from '../actions/index';

import { white, red, gray, black } from '../utils/colors';

class NewQuestionView extends React.Component{
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
      console.log(this.state.question);
      console.log(this.state.answer);
      console.log("Submit your Question and Answer.");
      let cardData = {
        question : this.state.question,
        answer : this.state.answer
      }
      // console.log(this.props.selectedDeck.title);
      this.setState({title: this.props.selectedDeck.title})
      let deckTitle = this.props.selectedDeck.title;

      //save to redux
      this.props.addCard(deckTitle, cardData);

      //Navigate to deck details page
      this.props.navigation.navigate('Deck', {deckTitle: deckTitle});

    }else{
      alert("Cannot have blank fields!!")
    }

    //reset state
    this.setState({question: '', answer: ''})
  }

  render(){
    console.log("DeckTitle: ",this.props.selectedDeck.title);
    return(
      <KeyboardAvoidingView style={styles.container}>
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
// export default NewQuestionView;
export default connect(mapStateToProps,mapDispatchToProps)(NewQuestionView);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: black,
    fontSize: 20,
    fontWeight: 'bold',
  },
  textInput: {
    fontSize: 18,
    color: 'blue',
    borderColor: '#7a42f4',
    padding: 10,
    marginBottom: 10,
    borderRadius: 7,
    borderWidth: 1,
    width: '70%',
    textAlign: 'center'
  },
  submit: {
    backgroundColor: white,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderColor: 'green',
    borderWidth: 2,
    borderRadius: 7,
    width: '30%'
  },
  SubmitText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18
  }
});

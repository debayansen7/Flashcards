import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux';

import Buttons from './Buttons'
import { addDeck } from '../actions/index';
import { white, red, gray, black } from '../utils/colors';

class NewQuestionView extends React.Component{

  state = {
    question: '',
    answer: ''
  }

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.text}>Your question:</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Add your question"
          onChangeText={(text) => this.setState({question})}
          blurOnSubmit/>

          <Text style={styles.text}>Your answer:</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Add your answer"
            onChangeText={(text) => this.setState({answer})}
            blurOnSubmit/>
        <Buttons />
      </View>
    );
  }
}

export default NewQuestionView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: black,
    fontSize: 30,
    fontWeight: 'bold',
  },
  textInput: {
    fontSize: 25,
    color: 'blue',
    borderColor: '#7a42f4',
    padding: 10,
    marginBottom: 10,
    borderRadius: 7,
    borderWidth: 1,
    width: '70%',
    textAlign: 'center'
  },
  submitBtn: {
    backgroundColor: 'green',
    padding: '5%',
    color: white,
    borderRadius: 7,
  }
});

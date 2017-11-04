import React from 'react';
import { KeyboardAvoidingView, View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { addDeck } from '../actions/index';

import Buttons from './Buttons'
import { white, red, gray, black } from '../utils/colors';

class AddDeck extends React.Component{
  constructor(props){
  	super(props);
  	this.state = {
      text: ''
    };
    this.submit= this.submit.bind(this);
  }

  submit(){

    if(this.state.text !== ''){
      let data = this.state.text;
      // alert("You created a new deck: "+data);
      let deckData = {
        title:data,
        questions:[],
        count: 0,
        score: 0,
      }

      //save to redux
      this.props.addDeck([deckData]);

      //Navigate to deck details page
      this.props.navigation.navigate('Deck', {deckTitle: data});

    }else{
      alert(" Title cannot be blank, please try again!!")
    }

    //reset state
    this.setState({text: ''})
  };

  render(){
    return(
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <Text style={styles.text}>What is the title of your new deck?</Text>
        <TextInput style={styles.textInput} value={this.state.text} placeholder="Create Deck"
                    onChangeText={(text) => this.setState({text})} />
        <TouchableOpacity onPress={this.submit} style={styles.submit}>
          <Text style={styles.submitText}>SUBMIT</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

function mapStateToProps({decks}) {
  return{decks}
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({addDeck}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AddDeck);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: black,
    fontSize: 18,
    fontWeight: 'bold',
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'center',
  },
  textInput: {
    fontSize: 18,
    color: 'blue',
    borderColor: '#7a42f4',
    marginBottom: 10,
    borderRadius: 7,
    borderWidth: 1,
    width: '70%',
    height: 45,
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

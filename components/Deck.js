import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { white, gray, black } from '../utils/colors'

class Deck extends React.Component{
  render(){
    console.log(this.props.navigation);
    return(
      <View style={styles.container}>
        <Text>Deck View - {this.props.navigation.state.params.deckTitle}</Text>
        <TouchableOpacity style={styles.addBtn}>
          <Text>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.startQuizBtn}>
          <Text>Start Quiz</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Deck;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addBtn:{
    
  },
  startQuizBtn:{

  }

});

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { white, gray, black } from '../utils/colors'

class AddDeck extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <Text>What is the title of your new deck?</Text>
        <Text>Add New Deck</Text>
        <TouchableOpacity onPress={() => alert('Hello')}>
          <Text>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default AddDeck;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { white, gray, black } from '../utils/colors'

class Deck extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <Text>Deck View</Text>
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
});

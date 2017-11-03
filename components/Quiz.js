import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { white, gray, black } from '../utils/colors'

class Quiz extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <Text>Quiz View</Text>
      </View>
    );
  }
}

export default Quiz;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

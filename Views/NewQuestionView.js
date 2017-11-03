import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { white, gray, black } from '../utils/colors'

class NewQuestionVeiw extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <Text>New Question View</Text>
      </View>
    );
  }
}

export default NewQuestionVeiw;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { white, gray, black } from '../utils/colors'

class AllDecks extends React.Component{
  render(){
    return(
      <View style={styles.container} >
        <Text>All Decks here:</Text>
      </View>
    );
  }
}

export default AllDecks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

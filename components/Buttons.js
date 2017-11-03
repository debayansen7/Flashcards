import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { white, gray, black } from '../utils/colors'

function Buttons ({ children, onPress, style = {} }) {
  return(
    <TouchableOpacity onPress={onPress} style={styles.submit}>
      <Text style={[styles.submit, style]}>{children}</Text>
    </TouchableOpacity>
  )
}


export default Buttons;

const styles = StyleSheet.create({
  submit: {
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 7,
    width: '30%'
  },
  text: {
    textAlign: 'center',
    color: 'white'
  }
});

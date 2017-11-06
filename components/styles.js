import { StyleSheet } from 'react-native';
import { purple, gray, white, red, orange, blue, lightPurp, pink, black, green } from '../utils/colors';
import { font18, font20, font22 } from '../utils/fontSize';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // ------------ All Deck View Styles-----------------
  header1:{
    color:black,
    fontWeight: 'bold',
    fontSize: font22,
  },
  deckListStyle: {
    backgroundColor: white,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    margin:5,
    borderColor : lightPurp,
    borderWidth : 2,
    borderRadius : 7
  },
  deckListText: {
    color:black,
    fontSize: font20,
  },
  // ------------ Add Deck View / Add Card View Styles-----------------
  text: {
    color: black,
    fontSize: font18,
    fontWeight: 'bold',
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'center',
  },
  textInput: {
    fontSize: font18,
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
    fontSize: font18
  },
  // ------------ Deck View Styles-----------------
  deckHeader1:{
    fontSize: font22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  deckHeader2:{
    fontSize: font20,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  addBtn:{
    backgroundColor: white,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    margin:5,
    borderColor : green,
    borderWidth : 2,
    borderRadius : 7
  },
  startQuizBtn:{
    backgroundColor: white,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    margin:5,
    borderColor : green,
    borderWidth : 2,
    borderRadius : 7
  },
  // ------------ Quiz View Styles-----------------
  counterArea: {
    width: '100%',
    height: '10%',
    padding: 10,
    backgroundColor: lightPurp,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    borderColor: purple,
    borderWidth: 2,
    marginBottom: 5,
  },
  counterText:{
    fontSize: font18,
    color: white,
  },
  bodyArea: {
    height: '70%',
    backgroundColor: white,
    borderColor: white,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },
  qArea:{
    height: '35%',
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backfaceVisibility: 'hidden',
  },
  qAreaBk:{
    backgroundColor: white,
  },
  qHeader:{
    fontSize: font18,
    fontWeight: 'bold',
    textDecorationLine : 'underline',
  },
  qText:{
    fontSize: font20,
    fontWeight: 'bold',
  },
  bodyBtn: {
    height: '30%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  showAns:{
    backgroundColor: white,
    padding: 10,
    borderColor: green,
    borderWidth: 2,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
  },
  showAnsText:{
    color: green,
    fontSize: font20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  correctBtn: {
    backgroundColor: green,
    padding: 10,
    borderColor: black,
    borderWidth: 2,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
  },
  incorrectBtn: {
    backgroundColor: red,
    padding: 10,
    borderColor: black,
    borderWidth: 2,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
  },
  disabled:{
    backgroundColor: gray,
    padding: 10,
    borderColor: black,
    borderWidth: 2,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
  },
  inputText:{
    color: white,
    fontSize: font18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnArea: {
    height: '15%',
    flex:1,
    flexDirection: 'row',
    backgroundColor: white,
    borderColor: white,
    borderWidth: 2,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scoreArea:{
    backgroundColor: white,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  nxtBtn:{
    backgroundColor: green,
    padding: 10,
    borderWidth: 2,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  resetBtn:{
    backgroundColor: pink,
    padding: 10,
    borderWidth: 2,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  btnText:{
    color: white,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

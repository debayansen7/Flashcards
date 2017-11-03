import React from 'react';
import { StyleSheet, Text, View, Platform, StatusBar } from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Constants } from 'expo';
import { FontAwesome, Ionicons, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import allReducers from './reducers/allReducers'

// -------------Views--------------------
import AllDecks from './Views/AllDecks';
import AddDeck from './Views/AddDeck';
import Deck from './Views/Deck';
import NewQuestionView from './Views/NewQuestionView';
import Quiz from './Views/Quiz';

// -------------Components--------------------
import { purple, gray, white, red, orange, blue, lightPurp, pink, black } from './utils/colors'

function UdaciStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const Tabs = TabNavigator({
  AllDecks: {
    screen: AllDecks,
    navigationOptions: {
      tabBarLabel: 'All Decks',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
    },
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'Add New Deck',
      tabBarIcon: ({ tintColor }) => <FontAwesome name='md-cards-outline' size={30} color={tintColor} />
    },
  }
  },  {
    navigationOptions: {
      header: null
    },
    tabBarOptions: {
      activeTintColor: white,
      style: {
        height: 60,
        backgroundColor: black,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 60,
        shadowOpacity: 1
      }
    }
  }
)

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: black,
      }
    }
  },
  Deck:{
      screen: Deck,
  },
  NewQuestionView:{
      screen: NewQuestionView,
  },
  Quiz:{
      screen: Quiz,
  },
})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(allReducers)} >
        <View style={{flex: 1}}>
          <UdaciStatusBar backgroundColor={black} barStyle="light-content" />
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}

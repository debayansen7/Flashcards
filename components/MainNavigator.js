import { TabNavigator, StackNavigator } from 'react-navigation';
import { purple, gray, white, red, orange, blue, lightPurp, pink, black } from '../utils/colors';

import AllDecks from './AllDecks';
import AddDeck from './AddDeck';
import Deck from './Deck';
import NewQuestionView from './NewQuestionView';
import Quiz from './Quiz';

export const Tabs = TabNavigator({
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

export const MainNavigator = StackNavigator({
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
    navigationOptions: {
      title: 'Deck View',
      headerTintColor: white,
      headerStyle: {
        backgroundColor: black,
      }
    }
  },
  NewQuestionView:{
      screen: NewQuestionView,
      navigationOptions: {
        title: 'Add Card',
        headerTintColor: white,
        headerStyle: {
          backgroundColor: black,
        }
      }
  },
  Quiz:{
      screen: Quiz,
      navigationOptions: {
        title: 'Quiz',
        headerTintColor: white,
        headerStyle: {
          backgroundColor: black,
        }
      }
  }
})

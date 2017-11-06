import React,{ Component } from 'react';
import { StyleSheet, Text, View, Platform, StatusBar } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import { createStore, applyMiddleware, compose } from 'redux';
import allReducers from './reducers/allReducers';
// import thunk from 'redux-thunk';
// import logger from 'redux-logger';

import { Constants } from 'expo';
import { FontAwesome, Ionicons, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';

// -------------Views--------------------
import { MainNavigator } from './components/MainNavigator';

// -------------other functions--------------------
import { purple, gray, white, red, orange, blue, lightPurp, pink, black } from './utils/colors'
import { setlocalNotification } from './utils/helper'

function UdaciStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

// const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ }) : compose;
// const enhancer = composeEnhancers(applyMiddleware(thunk, logger));
// const store = createStore(allReducers, enhancer);
const store = createStore(allReducers);

export default class App extends Component {

  componentDidMount() {
    setlocalNotification()
  }

  render() {
    return (
      <Provider store={store} >
        <View style={{flex: 1}}>
          <UdaciStatusBar backgroundColor={black} barStyle="light-content" />
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from "./state/store/configureStore"
import ContactListContainer from "./components/ContactListContainer"

import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';


const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ContactListContainer />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

});

export default App
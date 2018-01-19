import React, { Component } from 'react';
import {
  FlatList,
  Platform,
  StyleSheet,
  TouchableHighlight,
  Text,
  View
} from 'react-native';

class CheckBox extends Component {

  render() {
    const { check, item, handleClick } = this.props
    return (
    // I wont lie, this is very hacky LOL
    <TouchableHighlight onPress={() => handleClick(item)} style={styles.checkbox}>
      { check ? <View style={styles.on}></View> : <View style={styles.off}></View> }
    </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  checkbox: {
    width: 20,
    height: 20,
  },
  on: {
    width: 20,
    height: 20,
    backgroundColor: "blue",
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  off: {
    width: 20,
    height: 20,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
})

export default CheckBox
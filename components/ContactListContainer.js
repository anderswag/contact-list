/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux'
import Contacts from 'react-native-contacts'

import ContactList from './ContactList'

import { fetchContacts } from '../state/actions/contacts';

class ContactListContainer extends Component {

  componentDidMount() {
    const { fetchContacts } = this.props
    fetchContacts()
  }

  render() {
    const { contacts } = this.props
    return (
      <View style={styles.mainContainer}>
        <ContactList contacts={contacts}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    padding: 25,
  }
});

const mapStateToProps = (state) => {
  console.log("STATE")
  console.log(state)
  return {
    contacts: state.updateStore ? state.updateStore.contacts : null,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchContacts: () => dispatch(fetchContacts())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ContactListContainer)
// export default ContactListContainer
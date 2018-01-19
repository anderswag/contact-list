import Contacts from "react-native-contacts"

export function updateContactList(contacts) {
  return {
    type: 'UPDATE_CONTACT_LIST',
    contacts,
  }
}

export function fetchContacts() {
  // Gets phones contacts
  return function(dispatch) {
    Contacts.getAll((err, contacts) => {
      if(err === 'denied'){
        // dispatch error action
        console.log(`Error - ${err}`)
      } else {
        // contacts returned in []
        // disaptch update action
        console.log(contacts)
        dispatch(updateContactList(contacts))
      }
    })
  }
}
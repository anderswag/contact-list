// Not the best way to initialize state but temporary work around
const initialState = {
  contacts: [],
  selected: []
}

export function updateStore(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_CONTACT_LIST':
      return {
        ...state,
        ["contacts"] : action.contacts
      }

    case 'SELECT_CONTACT':
      return {
        ...state,
        ["selected"] : state.selected.concat(action.contact.recordID)
      }
    default:
      return state;
  }
}

// Not the best way to initialize state but temporary work around
const initialState = {
  contacts: []
}

export function updateStore(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_CONTACT_LIST':
    console.log("Updating Store - contacts")
      return {
        ...state,
        ["contacts"] : action.contacts
      }

    default:
      return state;
  }
}
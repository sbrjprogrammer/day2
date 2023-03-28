const initialState = { };

function FormReducers(state = initialState, action) {
  switch(action.type) {
    case 'SOME_ACTION':
      // return updated state
      return { ...state, /* updated state */ };
    default:
      // return current state
      return state;
  }
}

export default FormReducers
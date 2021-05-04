import FETCH_MESSAGES from '../actions';

const messagesReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_MESSAGES:
      return action.payload.messages;
    default:
      return state;
  }
};

export default messagesReducer;

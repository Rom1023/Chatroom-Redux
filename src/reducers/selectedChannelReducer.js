import SELECTED_CHANNEL from '../actions';

const selectedChannelReducer = (state = 'general', action) => {
  switch (action.type) {
    case SELECTED_CHANNEL:
      return action.payload;
    default:
      return state;
  }
};

export default selectedChannelReducer;

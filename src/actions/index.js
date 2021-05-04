// TODO: add and export your own actions
const BASE_URL = "https://wagon-chat.herokuapp.com/";

export const FETCH_MESSAGES = 'FETCH_MESSAGES';
export const SELECTED_CHANNEL = 'SELECTED_CHANNEL';

export const fetchMessages = (channel) => {
  const promise = fetch(`${BASE_URL}${channel}/messages`)
    .then(response => response.json());
  return {
    type: FETCH_MESSAGES,
    payload: promise
  };
};

export const selectedChannel = (channel) => {
  return {
    type: SELECTED_CHANNEL,
    payload: channel
  };
};

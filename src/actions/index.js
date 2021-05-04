// TODO: add and export your own actions
const BASE_URL = "https://wagon-chat.herokuapp.com/";

export const FETCH_MESSAGES = 'FETCH_MESSAGES';
export const SELECT_CHANNEL = 'SELECT_CHANNEL';
export const CREATE_MESSAGE = 'CREATE_MESSAGE';

export const fetchMessages = (channel) => {
  const promise = fetch(`${BASE_URL}${channel}/messages`)
    .then(response => response.json());
  return {
    type: FETCH_MESSAGES,
    payload: promise
  };
};

export const createMessage = (channel, author, content) => {
  const body = { author, content };
  const promise = fetch(`${BASE_URL}${channel}/messages`, {
    method: "POST",
    body: JSON.stringify(body)
  })
    .then(response => response.json());
  return {
    type: CREATE_MESSAGE,
    payload: promise
  };
};

export const selectChannel = (channel) => {
  return {
    type: SELECT_CHANNEL,
    payload: channel
  };
};

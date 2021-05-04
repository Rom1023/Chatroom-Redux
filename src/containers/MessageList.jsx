import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Actions
import { fetchMessages } from '../actions';

class MessageList extends Component {
  componentWillMount = () => {
    this.props.fetchMessages();
  }

  render() {
    return (
      <h2>Chatroom</h2>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { fetchMessages: fetchMessages }, dispatch);
};

const mapStateToProps = (reduxState) => {
  return { messages: reduxState.messages };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);

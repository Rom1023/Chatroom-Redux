import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Components
import Message from '../components/Message';

// Actions
import { fetchMessages } from '../actions';

class MessageList extends Component {
  componentWillMount = () => {
    this.props.fetchMessages(this.props.selectedChannel);
  }

  render() {
    return (
      <div className="chatroom">
        <h2>Chatroom</h2>
        {this.props.messages.map((message) => {
          return <Message key={message.id} message={message} />;
        })}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { fetchMessages: fetchMessages }, dispatch);
};

const mapStateToProps = (reduxState) => {
  return {
    messages: reduxState.messages,
    selectedChannel: reduxState.selectedChannel
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Components and Containers
import Message from '../components/Message';
import MessageForm from './MessageForm';

// Actions
import { fetchMessages } from '../actions';

class MessageList extends Component {
  componentWillMount = () => {
    this.props.fetchMessages(this.props.selectedChannel);
  }

  // componentDidUpdate = () => {
  //   this.refresher = setInterval(this.fetchMessages, 5000);
  // };

  // componentWillUnmount = () => {
  //   this.clear(this.refresher);
  // };

  // fetchMessages = () => {
  //   return this.props.fetchMessages(this.props.selectedChannel);
  // };

  render() {
    return (
      <div className="chatroom">
        <h2>Chatroom</h2>
        {this.props.messages.map((message) => {
          return <Message key={message.id} message={message} />;
        })}
        <MessageForm />
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

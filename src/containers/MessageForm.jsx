import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

// Actions
import { createMessage } from '../actions';

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createMessage(this.props.selectedChannel, this.props.currentUser, this.state.value);
    this.setState({ value: '' });
  };

  render() {
    return (
      <form action="post" onSubmit={this.handleSubmit}>
        <div className="chat-form">
          <input type="textarea" value={this.state.value} onChange={this.handleChange} placeholder="Write your message" />
          <button type="submit" className="chat-form-button"><FontAwesomeIcon icon={faPaperPlane} /></button>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { createMessage }, dispatch
  );
};

const mapStateToProps = (reduxState) => {
  return {
    messages: reduxState.messages,
    selectedChannel: reduxState.selectedChannel,
    currentUser: reduxState.currentUser
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Actions
import { selectChannel } from '../actions';

class ChannelList extends Component {
  constructor(props) {
    super(props);
    this.state = { display: true };
  }

  handleClick = (event) => {
    this.props.selectChannel(event.target.value);
  };

  handleButtonClick = () => {

  };

  render() {
    return (
      <div className="channel-list-container">
        <button onClick={this.handleButtonClick}>X</button>
        <h2>Channels</h2>
        <ul className="channel-list">
          {this.props.channels.map((channel) => {
            return (
              <li key={channel}>
                <button className={this.props.selectedChannel === channel ? 'channel-list-button channel-active' : 'channel-list-button'} value={channel} onClick={this.handleClick}>{channel}</button>
              </li>);
          })}
        </ul>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { selectChannel: selectChannel }, dispatch
  );
};

const mapStateToProps = (reduxState) => {
  return {
    channels: reduxState.channels,
    selectedChannel: reduxState.selectedChannel
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);


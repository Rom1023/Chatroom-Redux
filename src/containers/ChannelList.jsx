import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Actions
import { selectedChannel } from '../actions';

class ChannelList extends Component {
  handleClick = () => {
    this.props.selectedChannel(this.props.selectedChannel);
  };

  render() {
    return (
      <div className="channel-list">
        <ul>
          {this.props.channels.map((channel) => {
            return (
              <li key={channel}>
                <button className="channel-list-button" onClick={this.handleClick}>{channel}</button>
              </li>);
          })}
        </ul>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { selectedChannel: selectedChannel }, dispatch
  );
};

const mapStateToProps = (reduxState) => {
  return {
    channels: reduxState.channels,
    selectedChannel: reduxState.selectedChannel
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);

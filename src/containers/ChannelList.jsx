import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Actions
import { fetchMessages } from '../actions';

class ChannelList extends Component {
  constructor(props) {
    super(props);
    this.state = { display: true };
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.channelFromParam !== this.props.channelFromParam) {
      this.props.fetchMessages(this.props.channelFromParam);
    }
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
                <Link to={`/${channel}`} className={this.props.channelFromParam === channel ? 'channel-list-button channel-active' : 'channel-list-button'}>
                  {channel}
                </Link>
              </li>);
          })}
        </ul>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { fetchMessages: fetchMessages }, dispatch
  );
};

const mapStateToProps = (reduxState) => {
  return {
    channels: reduxState.channels,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);


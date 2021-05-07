import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

// Actions
import { fetchMessages } from '../actions';


class ChannelList extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpened: true };
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.channelFromParam !== this.props.channelFromParam) {
      this.props.fetchMessages(nextProps.channelFromParam);
    }
  };

  render() {
    return (
      this.state.isOpened ? (
        <div className="channel-list-container">
          <FontAwesomeIcon icon={faTimesCircle} onClick={() => this.setState({ isOpened: !this.state.isOpened })} className="channel-list-close-icon" />
          <h2>Channels</h2>
          <ul className="channel-list">
            {this.props.channels.map((channel) => {
              return (
                <li key={channel}>
                  <Link to={`/${channel}`} className={this.props.channelFromParam === channel ? 'channel-list-link channel-active' : 'channel-list-link'}>
                    {channel}
                  </Link>
                </li>);
            })}
          </ul>
        </div>
      ) : (
        <div className="channel-list-container-closed">
          <FontAwesomeIcon icon={faBars} onClick={() => this.setState({ isOpened: !this.state.isOpened })} className="channel-list-bar-icon" />
        </div>
      )
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

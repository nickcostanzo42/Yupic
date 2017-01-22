import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { ListView } from 'react-native';
import { UserFeedHeader } from './common';
import { fetchFollowing } from '../actions';
import Hr from 'react-native-hr';

class UserFeed extends Component {
  componentWillMount() {
    this.props.fetchFollowing();

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ following }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1,r2) => r1 !== r2
    })

    this.dataSource = ds.cloneWithRows(following);
  }



  onSearchPress() {
    Actions.searchPage();
  }

  onHomePress() {
    Actions.homePage();
  }

  render() {
    return (
      <UserFeedHeader
        headerText="Your People"
        homePress={this.onHomePress.bind(this)}
        searchPress={this.onSearchPress.bind(this)}
      />
    )
  }
}

const mapStateToProps = state => {
const following = _.map(state.following, (val, uid) => {
    return { ...val, uid}
  })

return { following }
}

export default connect(mapStateToProps, { fetchFollowing })(UserFeed);

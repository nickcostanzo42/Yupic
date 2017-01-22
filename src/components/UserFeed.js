import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { ListView, View, Text } from 'react-native';
import { UserFeedHeader } from './common';
import { fetchFollowing, findFollowingInfo } from '../actions';
import ListItem from './ListItem'
import firebase from 'firebase';
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

  renderRow(follow) {
  firebase.database().ref(`/users/${follow.uid}/`)
    .on('value', snapshot => {
      follow.username = snapshot.child('username').val()
      follow.userpic = snapshot.child('userpic').val()
    })
  console.log(follow)
  return <ListItem follow={follow} />

  }


  onSearchPress() {
    Actions.searchPage();
  }

  onHomePress() {
    Actions.homePage();
  }

  render() {
    return (
    <View>
      <UserFeedHeader
        headerText="Your People"
        homePress={this.onHomePress.bind(this)}
        searchPress={this.onSearchPress.bind(this)}
      />

      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    </View>
    )
  }
}

const mapStateToProps = state => {
  const following = _.map(state.following, (val, email) => {
    return { ...val, email }
  })
return { following }
}

export default connect(mapStateToProps, {
  fetchFollowing, findFollowingInfo
})(UserFeed);

import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { View, Text, Image } from 'react-native';
import { Header, CardSection, Card, Button, InputNoLabel, UserFeedHeader } from './common';
import Hr from 'react-native-hr';

class UserFeed extends Component {

  onSearchPress() {
    Actions.searchPage();
  }

  render() {
    return (
      <UserFeedHeader
        headerText="Your People"
        homePress={() => console.log("pressed")}
        searchPress={this.onSearchPress.bind(this)}
      />
    )
  }
}

export default UserFeed;

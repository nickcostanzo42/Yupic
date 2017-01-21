import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { View, Text, Image } from 'react-native';
import { Header, CardSection, Card, Button, InputNoLabel } from './common';
import Hr from 'react-native-hr';
import { updateUsername, updatePicUrl, updateInfo, updateFail } from '../actions'


class UpdateUser extends Component {

  onProfilePress() {
    Actions.homePage();
  }

  onSavePress() {
    const newUsername = this.props.userinfo.updateUsername;
    const newPic = this.props.userinfo.updatePic;
    const currentUsername = this.props.userinfo.username;
    const currentPic = this.props.userinfo.userpic;

    if (newUsername && newPic) {
      this.props.updateInfo(newUsername, newPic)
    } else if (newUsername && !newPic) {
      this.props.updateInfo(newUsername, currentPic)
    } else if (newPic && !newUsername) {
      this.props.updateInfo(currentUsername, newPic)
    } else {
      this.props.updateFail();
    }
  }

  onUpdateUsername(text) {
    this.props.updateUsername(text);
  }

  onUpdatePicture(text) {
    this.props.updatePicUrl(text);
  }

  render() {
    return (
      <View>
        <Header
          headerText="Update"
        />

        <Card style={{marginLeft: 20, marginRight: 20}}>

        <CardSection >
          <InputNoLabel
            placeholder="Update Username"
            onChangeText={this.onUpdateUsername.bind(this)}
            value={this.props.userinfo.updateUsername}
          />
        </CardSection>

        <CardSection>
          <InputNoLabel
            placeholder="Update Picture (URL)"
            onChangeText={this.onUpdatePicture.bind(this)}
            value={this.props.userinfo.updatePic}
          />
        </CardSection>

      </Card>

        <Button
          style={{backgroundColor: '#007aff',
          marginLeft: 20, marginRight: 20, marginBottom: 20}}
          textStyle={{fontFamily: 'Marker Felt'}}
          onPress={this.onSavePress.bind(this)}
        >
          Save Changes
        </Button>

        <Button
          style={{backgroundColor: '#007aff',
          marginLeft: 20, marginRight: 20, marginBottom: 20}}
          textStyle={{fontFamily: 'Marker Felt'}}
          onPress={this.onProfilePress.bind(this)}
        >
          Profile
        </Button>

      </View>
    )
  }
}

const mapStateToProps = state => {
  console.log(state)

  return state
}

export default connect( mapStateToProps, {
  updateUsername, updatePicUrl, updateInfo, updateFail
})(UpdateUser);

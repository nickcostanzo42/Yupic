import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { View, Text, Image } from 'react-native';
import { Header, CardSection, Card, Button, InputNoLabel } from './common';
import Hr from 'react-native-hr';

class UpdateUser extends Component {

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
          />
        </CardSection>

        <CardSection>
          <InputNoLabel
            secureTextEntry
            placeholder="Update Picture (URL)"
          />
        </CardSection>

      </Card>

        <Button
          style={{backgroundColor: '#007aff',
          marginLeft: 20, marginRight: 20, marginBottom: 20}}
          textStyle={{fontFamily: 'Marker Felt'}}
        >
          Save Changes
        </Button>

        <Button
          style={{backgroundColor: '#007aff',
          marginLeft: 20, marginRight: 20, marginBottom: 20}}
          textStyle={{fontFamily: 'Marker Felt'}}
        >
          Profile
        </Button>

      </View>
    )
  }
}

export default UpdateUser;

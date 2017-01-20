import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import Hr from 'react-native-hr';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, InputNoLabel, Header, Button } from './common';


class SignUpForm extends Component {

  loginPress() {
    Actions.login();
  }

  render(){
    return(
    <View >

      <Header
        headerText="Yupic"
        >
      </Header>

      <Card style={{marginLeft: 20, marginRight: 20}}>

        <CardSection >
          <InputNoLabel
            placeholder="E-mail Address"
          />
        </CardSection>

        <CardSection>
          <InputNoLabel
            secureTextEntry
            placeholder="Password"
          />
        </CardSection>

        <CardSection>
          <InputNoLabel
            placeholder="Username (this can be changed)"
          />
        </CardSection>

      </Card>

      <Button
        style={{backgroundColor: '#007aff',
        marginLeft: 20, marginRight: 20, marginBottom: 20}}
        textStyle={{fontFamily: 'Marker Felt'}}
      >
        Sign Up
      </Button>

      <Hr
        lineColor="black"
        text="or"
      />

       <Button
        style={{backgroundColor: '#007aff',
        marginLeft: 20, marginRight: 20, marginBottom: 20}}
        textStyle={{fontFamily: 'Marker Felt'}}
        onPress={this.loginPress}
      >
        Back to Login
      </Button>

    </View>
    )
  }
}



export default SignUpForm;

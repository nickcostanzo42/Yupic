import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Hr from 'react-native-hr';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, InputNoLabel, Header, Button } from './common';


class LoginForm extends Component {

  signUpPress() {
    Actions.signUp();
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

      </Card>

      <Button
        style={{backgroundColor: '#007aff',
        marginLeft: 20, marginRight: 20, marginBottom: 20}}
        textStyle={{fontFamily: 'Marker Felt'}}
      >
        Login
      </Button>

      <Hr
        lineColor="black"
        text="or"
      />

       <Button
        style={{backgroundColor: '#007aff',
        marginLeft: 20, marginRight: 20, marginBottom: 20}}
        textStyle={{fontFamily: 'Marker Felt'}}
        onPress={this.signUpPress}
      >
        Sign Up
      </Button>

    </View>
    )
  }
}



export default LoginForm;

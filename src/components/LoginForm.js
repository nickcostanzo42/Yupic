import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import Hr from 'react-native-hr';
import { Actions } from 'react-native-router-flux';
import { emailChanged, passwordChanged, loginUser } from '../actions'
import { Card, CardSection, InputNoLabel, Header, Button, Spinner } from './common';


class LoginForm extends Component {

  signUpPress() {
    Actions.signUp();
  }

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onLoginPress() {
    const {email, password} = this.props

    this.props.loginUser({ email, password })
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />
    }

    return (
     <Button
        style={{backgroundColor: '#007aff',
        marginLeft: 20, marginRight: 20, marginBottom: 20}}
        textStyle={{fontFamily: 'Marker Felt'}}
        onPress={this.onLoginPress.bind(this)}
      >
        Login
      </Button>
    )
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
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <InputNoLabel
            secureTextEntry
            placeholder="Password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>



      </Card>

      <Text style={styles.errorTextStyle}>
          {this.props.error}
      </Text>

        {this.renderButton()}

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

const styles = {
  errorTextStyle: {
    fontSize: 10,
    marginTop: 15,
    alignSelf: 'center',
    color: 'red'
  }
}


const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;

  return { email, password, error, loading };
}



export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser })(LoginForm);

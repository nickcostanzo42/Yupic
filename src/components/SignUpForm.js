import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import Hr from 'react-native-hr';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, InputNoLabel, Header, Button, Spinner } from './common';
import { emailChanged, passwordChanged, signupUser, usernameChanged } from '../actions'



class SignUpForm extends Component {

  loginPress() {
    Actions.login();
  }

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onUserNameChange(text) {
    this.props.usernameChanged(text);
  }

  onSignupPress() {
    const {email, password, username} = this.props

    this.props.signupUser({ email, password, username })
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
        onPress={this.onSignupPress.bind(this)}
      >
        SignUp
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

        <CardSection>
          <InputNoLabel
            placeholder="Username (this can be changed)"
            onChangeText={this.onUserNameChange.bind(this)}
            value={this.props.username}
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
        onPress={this.loginPress}
      >
        Back to Login
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

const mapStateToProps = ({ signup }) => {
  const { email, password, error, loading, username } = signup;

  return { email, password, error, loading, username }
}

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, signupUser, usernameChanged
})(SignUpForm);

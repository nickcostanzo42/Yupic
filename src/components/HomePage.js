import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Header, CardSection, Card, Button } from './common';
import { userInfoFetch, userPicFetch } from '../actions';
import Hr from 'react-native-hr';


class HomePage extends Component {

  componentWillMount(){
    this.props.userInfoFetch();
  }

  onUpdatePress() {
    Actions.updatePage();
  }

  onYourPeoplePress() {
    Actions.userFeed();
  }

  render() {
    return (
      <View>
        <Header
          headerText={this.props.userinfo.username}
        />

        <View style={styles.userInfoStyle}>
          <Image
            style={styles.thumbnailStyle}
            source={{uri: this.props.userinfo.userpic}}
          />
          <Text style={styles.viewsStyle}>
            Views:
          </Text>
        </View>

        <Button
        style={{backgroundColor: '#007aff',
        marginLeft: 20, marginRight: 20, marginBottom: 20}}
        textStyle={{fontFamily: 'Marker Felt'}}
        onPress={this.onYourPeoplePress.bind(this)}
        >
          Your People
        </Button>

        <Button
        style={{backgroundColor: '#007aff',
        marginLeft: 20, marginRight: 20, marginBottom: 20}}
        textStyle={{fontFamily: 'Marker Felt'}}
        onPress={this.onUpdatePress.bind(this)}
        >
          Update
        </Button>



      </View>
    )
  }

}

const styles = {
  userInfoStyle: {
    borderWidth: 1,
    margin: 5,
    padding: 5,
    backgroundColor: '#fff',
    flexDirection: 'column',
    borderColor: '#ddd',
    position: 'relative'
  },
  thumbnailStyle: {
    height: 200,
    width: 350
  }
}

const mapStateToProps = state => {
  console.log(state)
  // this.props.userInfoFetch();
  return state
}

export default connect(mapStateToProps, { userInfoFetch, userPicFetch })(HomePage);

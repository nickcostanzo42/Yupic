import React, { Component } from 'react';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { Text, TouchableWithoutFeedback, View, Image } from 'react-native';
import { CardSection } from './common';
import { Actions } from 'react-native-router-flux';
import { findFollowingInfo } from '../actions'

class ListItem extends Component {


  componentWillMount() {
    const { uid } = this.props.follow
    this.props.findFollowingInfo(uid);
  }


render() {
  const { uid } = this.props.follow;

  return (

      <View style={styles.userInfoStyle}>
          <Text>
            {this.props.follow.username}
          </Text>
          <Image
            style={styles.thumbnailStyle}
            source={{uri: this.props.follow.userpic}}
          />
      </View>

    )
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  },
    userInfoStyle: {
    borderWidth: 1,
    margin: 5,
    padding: 5,
    backgroundColor: '#fff',
    flexDirection: 'column',
    borderColor: '#ddd',
    position: 'relative',
    alignItems: 'center'
  },
  thumbnailStyle: {
    height: 200,
    width: 350
  }
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps, {
  findFollowingInfo
})(ListItem);

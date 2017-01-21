import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Image } from 'react-native';
import { Header, CardSection, Card } from './common';
import { userInfoFetch } from '../actions';
import Hr from 'react-native-hr';


class HomePage extends Component {

  componentWillMount(){
    this.props.userInfoFetch();
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
            source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
          />
          <Text style={styles.viewsStyle}>
            Views:
          </Text>
        </View>



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

export default connect(mapStateToProps, { userInfoFetch })(HomePage);

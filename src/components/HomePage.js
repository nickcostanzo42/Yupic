import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Image } from 'react-native';
import { Header, CardSection, Card } from './common';
import { userInfoFetch } from '../actions';

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
      <Card>

        <CardSection>
          <Image
            style={styles.thumbnailStyle}
            source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
          />
        </CardSection>

        <CardSection>
          <Text style={styles.viewsStyle}>
            Stuff
          </Text>
        </CardSection>

      </Card>
      </View>
    )
  }

}

const styles = {
  thumbnailStyle: {
    height: 200,
    width: 200,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  viewsStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
}

const mapStateToProps = state => {
  console.log(state)
  // this.props.userInfoFetch();
  return state
}

export default connect(mapStateToProps, { userInfoFetch })(HomePage);

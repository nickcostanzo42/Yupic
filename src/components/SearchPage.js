import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Image } from 'react-native';
import { SearchHeader, InputNoLabel, Button, CardSection } from './common';
import { Actions } from 'react-native-router-flux';
import { searchChange, searchForEmail, followUser,
  checkFollowing, unfollowUser } from '../actions';



class SearchPage extends Component {

  onBackPress() {
    Actions.userFeed();
  }

  onSearchChange(text) {
    this.props.searchChange(text);
  }

  onSearchPress() {
    const emailSearch = this.props.search.searchVal
    const formatEmailSearch = emailSearch.replace(/\./g, ',')
    this.props.searchForEmail(formatEmailSearch);
    this.props.checkFollowing(formatEmailSearch);
  }

  onFollowPress() {
    const emailSearch = this.props.search.searchVal
    const formatEmailSearch = emailSearch.replace(/\./g, ',')
    const {searchUid} = this.props.search

    this.props.followUser(searchUid, formatEmailSearch);
  }

  onUnfollowPress() {
    const emailSearch = this.props.search.searchVal
    const formatEmailSearch = emailSearch.replace(/\./g, ',')

    this.props.unfollowUser(formatEmailSearch);
  }

  renderSearchResults() {
    const { searchPic, searchUsername } = this.props.search;
    if (searchPic === null || searchUsername === null ||
      searchPic === '' || searchUsername === ''){
      return (
        <View>
          <Text>No Results</Text>
        </View>
      )
    }


    return (
      <View style={styles.userInfoStyle}>
          <Text>
            {this.props.search.searchUsername}
          </Text>
          <Image
            style={styles.thumbnailStyle}
            source={{uri: this.props.search.searchPic}}
            resizeMode='contain'
          />
      </View>
    )
  }


  renderFollowButton() {
    if (this.props.userinfo.following) {
    return(
        <Button
          style={{backgroundColor: '#007aff',
          marginLeft: 20, marginRight: 20, marginBottom: 20}}
          textStyle={{fontFamily: 'Marker Felt'}}
          onPress={this.onUnfollowPress.bind(this)}
        >
          Unfollow
        </Button>
      )
    }

    return(
       <Button
        style={{backgroundColor: '#007aff',
        marginLeft: 20, marginRight: 20, marginBottom: 20}}
        textStyle={{fontFamily: 'Marker Felt'}}
        onPress={this.onFollowPress.bind(this)}
      >
        Follow
      </Button>
    )
  }

  render() {
    return (
      <View>

        <SearchHeader
          headerText="Search"
          backPress={this.onBackPress.bind(this)}
        />

        <CardSection>
          <InputNoLabel
            placeholder="Search by email"
            onChangeText={this.onSearchChange.bind(this)}
            value={this.props.search.searchVal}
          />
        </CardSection>

        <Button
          style={{backgroundColor: '#007aff',
          marginLeft: 20, marginRight: 20, marginBottom: 20}}
          textStyle={{fontFamily: 'Marker Felt'}}
          onPress={this.onSearchPress.bind(this)}
        >
          Find People
        </Button>

        {this.renderSearchResults()}

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
  searchChange, searchForEmail, followUser,
  checkFollowing, unfollowUser
})(SearchPage);

//Import libraries for making a component
import React from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';

//Making a component
const UserFeedHeader = (props) => {
  const { textStyle, viewStyle, navStyle, homeStyle, searchStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>

      <View style={navStyle}>

      <TouchableWithoutFeedback
        onPress={props.homePress}
      >
      <View>
        <Text style={homeStyle}>
          Home
        </Text>
      </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback
        onPress={props.searchPress}
      >
      <View>
        <Text style={searchStyle}>
          Search
        </Text>
      </View>
      </TouchableWithoutFeedback>

      </View>
    </View>

  )
}

const styles = {
  viewStyle: {
    backgroundColor: '#FF5733',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 30,
    marginTop: 10,
    fontFamily: 'Marker Felt',
    color: 'white'
  },
  navStyle: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between'
  },
  homeStyle: {
    marginRight: 40,
    fontFamily: 'Marker Felt',
    color: 'white'
  },
  searchStyle: {
    marginLeft: 40,
    fontFamily: 'Marker Felt',
    color: 'white'
  }
}

//Make the component available to other parts of the app
export { UserFeedHeader };

//Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

//Making a component
const SearchHeader = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>

  )
}

const styles = {
  viewStyle: {
    backgroundColor: '#FF5733',
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 50,
    fontFamily: 'Marker Felt',
    color: 'white'
  }
}

//Make the component available to other parts of the app
export { SearchHeader };

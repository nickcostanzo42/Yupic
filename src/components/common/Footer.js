//Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

//Making a component
const Footer = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.footerText}</Text>
    </View>

  )
}

const styles = {
  viewStyle: {
    backgroundColor: '#FF5733',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 30,
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
export { Footer };

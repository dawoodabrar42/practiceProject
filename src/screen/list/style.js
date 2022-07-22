import React from 'react';
import {Dimensions, StyleSheet, StatusBar} from 'react-native';
import Theme from '../../../Theme/Theme';
import {moderateScale} from '../../../Theme/Dimensions';
const {height, width} = Dimensions.get('window');
const style = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },

  ButtonStyle: {
    height: (height / 100) * 10,
    //   backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flatListStyle: {
    flex: 1,
    backgroundColor: 'white',
  },
  textStyle: {
    fontSize: Theme.fontSizes.big,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: moderateScale(12),
  },
});
export default style;

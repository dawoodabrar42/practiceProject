import React from 'react';
import {Dimensions, StyleSheet, StatusBar} from 'react-native';
import Theme from '../../../Theme/Theme';
import {moderateScale} from '../../../Theme/Dimensions';
const {height, width} = Dimensions.get('window');
const style = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: 'white',
  },
  imgView: {
    height: (height / 100) * 15,
    // backgroundColor: 'blue',
    alignItems: 'center',
  },
  imgStyle: {
    height: 50,
    width: 50,
  },
  textStyle: {
    fontSize: Theme.fontSizes.xxbig,
    fontWeight: 'bold',
    color: 'black',
  },
  mainEmailView: {
    height: (height / 100) * 35,
    width: width,
    // backgroundColor: '#faf',
    alignItems: 'center',
    justifyContent: 'center',
  },
  passwordView: {
    height: (height / 100) * 16,
    width: width,
    // backgroundColor: 'green',
    alignItems: 'center',
  },
  passwordTextStyle: {
    fontSize: Theme.fontSizes.medium,
    color: 'black',
    marginRight: moderateScale(310),
    marginBottom: moderateScale(6),
  },
  confirmPasswordMainView: {
    height: (height / 100) * 16,
    width: width,
    // backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
  confirmPasswordTextStyle: {
    fontSize: Theme.fontSizes.medium,
    color: 'black',
    marginRight: moderateScale(250),
    marginBottom: moderateScale(8),
  },
  AppBtnStyle: {
    height: (height / 100) * 9,
    width: width,
    // backgroundColor: 'red',
    justifyContent: 'flex-end',
  },
});

export default style;

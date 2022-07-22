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
    height: (height / 100) * 10,
    // backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
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
    height: (height / 100) * 100,
    width: width,
    // backgroundColor: '#faf',
    alignItems: 'center',
    marginTop: moderateScale(7),
    // justifyContent: 'center',
  },
  emailView: {
    height: (height / 100) * 15,
    width: width,
    // backgroundColor: 'green',
    alignItems: 'center',
    // justifyContent: 'flex-end',
  },
  emailTextStyle: {
    fontSize: Theme.fontSizes.medium,
    color: 'black',
    marginRight: moderateScale(280),
    marginBottom: moderateScale(6),
  },
  nameView: {
    height: (height / 100) * 15,
    width: width,
    // backgroundColor: 'green',
    alignItems: 'center',
    // justifyContent: 'flex-end',
  },
  nameTextStyle: {
    fontSize: Theme.fontSizes.medium,
    color: 'black',
    marginRight: moderateScale(340),
    marginBottom: moderateScale(6),
  },
  passwordMainView: {
    height: (height / 100) * 15,
    width: width,
    // backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainTextInput: {
    height: (height / 100) * 11,
    // backgroundColor: 'green',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  passwordTextStyle: {
    fontSize: Theme.fontSizes.medium,
    color: 'black',
    marginRight: moderateScale(310),
    marginBottom: moderateScale(8),
  },
  pickerStyle: {
    height: (height / 100) * 11,
    width: (width / 100) * 24,
    // backgroundColor: '#faf',
    alignItems: 'center',
    justifyContent: 'center',
  },
  phoneTextStyle: {
    fontSize: Theme.fontSizes.medium,
    color: 'black',
    marginLeft: moderateScale(20),
  },
  phoneTextInput: {
    height: 50,
    width: (width / 100) * 62,
    backgroundColor: 'white',
    elevation: 10,
    borderWidth: 1.5,
    borderRadius: 6,
    overflow: 'hidden',
  },
  phoneStyle: {
    height: (height / 100) * 3,
    // backgroundColor: 'red',
  },
  mainPhoneStyle: {
    height: (height / 100) * 15,
    width: width,
    // backgroundColor: 'blue',
    // alignItems: 'center',
    // justifyContent: 'space-between',
  },
  forgotStyle: {
    height: (height / 100) * 3,
    width: width,
    // backgroundColor: 'red',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  forgotTextStyle: {
    fontSize: Theme.fontSizes.medium,
    fontWeight: 'bold',
    marginRight: moderateScale(20),
    color: '#114D96',
  },
  AppBtnStyle: {
    height: (height / 100) * 10,
    width: width,
    // backgroundColor: 'orange',
    justifyContent: 'flex-end',
  },
  footerStyle: {
    height: (height / 100) * 5,
    // backgroundColor: 'red',
    // alignItems: 'flex-end',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  footerTextStyle: {
    color: '#114D96',
    fontSize: Theme.fontSizes.medium,
    fontWeight: 'bold',
    marginTop: moderateScale(8),
  },
  footerText: {
    color: '#7681A5',
    marginTop: moderateScale(8),
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
});
export default style;

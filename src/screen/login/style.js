import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import Theme from '../../../Theme/Theme';
import {moderateScale} from '../../../Theme/Dimensions';
const {height, width} = Dimensions.get('window');
const style = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: 'white',
  },
  imgView: {
    height: (height / 100) * 20,
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
    height: (height / 100) * 37,
    width: width,
    // backgroundColor: '#faf',
    alignItems: 'center',
    justifyContent: 'center',
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
  passwordMainView: {
    height: (height / 100) * 15,
    width: width,
    // backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
  passwordTextStyle: {
    fontSize: Theme.fontSizes.medium,
    color: 'black',
    marginRight: moderateScale(310),
    marginBottom: moderateScale(8),
  },
  forgotStyle: {
    height: (height / 100) * 5,
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
    height: (height / 100) * 9,
    width: width,
    // backgroundColor: 'red',
    justifyContent: 'flex-end',
  },
  leftLineStyle: {
    height: (height / 100) * 6,
    width: (width / 100) * 30,
    // backgroundColor: 'blue',
    borderBottomWidth: moderateScale(1),
    marginLeft: moderateScale(25),
    borderBottomColor: '#7681A5',
  },
  middleVStyle: {
    height: (height / 100) * 7,
    width: width,
    // backgroundColor: 'red',
    flexDirection: 'row',
  },
  middleTextViewStyle: {
    height: (height / 100) * 8,
    width: (width / 100) * 25,
    // backgroundColor: 'green',
    marginLeft: moderateScale(10),
  },
  middleTextStyle: {
    fontSize: Theme.fontSizes.medium,
    color: '#7681A5',
    marginTop: moderateScale(27),
    marginLeft: moderateScale(1),
  },
  RightLineStyle: {
    height: (height / 100) * 6,
    width: (width / 100) * 30.4,
    // backgroundColor: 'blue',
    borderBottomWidth: moderateScale(1),
    // marginLeft: moderateScale(5),
    // marginRight: moderateScale(17),
    borderBottomColor: '#7681A5',
  },
  ButtonStyle: {
    height: (height / 100) * 10,
    width: width,
    // backgroundColor: 'red',
    flexDirection: 'row',
  },
  ButtonOneStyle: {
    height: (height / 100) * 13,
    width: (width / 100) * 50,
    // backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ButtonTwoStyle: {
    height: (height / 100) * 13,
    width: (width / 100) * 50,
    // backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerStyle: {
    height: (height / 100) * 12,
    // backgroundColor: 'red',
    alignItems: 'flex-end',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  footerTextStyle: {
    color: '#114D96',
    fontSize: Theme.fontSizes.medium,
    fontWeight: 'bold',
  },
  footerText: {
    color: '#7681A5',
  },
});
export default style;

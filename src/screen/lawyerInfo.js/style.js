import React from 'react';
import {Dimensions, StyleSheet, StatusBar} from 'react-native';
import Theme from '../../../Theme/Theme';
import {moderateScale} from '../../../Theme/Dimensions';
const {height, width} = Dimensions.get('window');
const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentContainer: {
    height: (height / 100) * 33,
    // backgroundColor: 'blue',
  },
  ImageMainStyle: {
    height: (height / 100) * 13,
    // backgroundColor: 'red',
    flexDirection: 'row',
  },
  ImageStyle: {
    height: (height / 100) * 15,
    //   backgroundColor: '#fda',
    width: (width / 100) * 23,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ImageView: {
    height: 50,
    width: 50,
    marginLeft: moderateScale(35),
  },
  TextMainStyle: {
    height: (height / 100) * 15,
    width: (width / 100) * 50,
    // backgroundColor: '#dfd',
    justifyContent: 'center',
  },
  TextStyle: {
    fontSize: Theme.fontSizes.xmedium,
    color: 'black',
    // fontWeight: 'bold',
  },
  TextColor: {
    color: 'gray',
  },
  PhoneMainStyle: {
    height: (height / 100) * 10,
    // backgroundColor: 'green',
  },
  PhoneTextMainStyle: {
    height: (height / 100) * 10,
    //   backgroundColor: '#adf',
  },
  PhoneTextStyle: {
    fontSize: Theme.fontSizes.xmedium,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: moderateScale(45),
  },
  NumberTextStyle: {
    fontSize: Theme.fontSizes.medium,
    color: 'black',
    marginLeft: moderateScale(45),
    marginTop: moderateScale(2),
  },
  EmailMainViewStyle: {
    height: (height / 100) * 10,
    // backgroundColor: 'green',
  },
  EmailTextViewStyle: {
    height: (height / 100) * 10,
    //   backgroundColor: '#adf',
  },
  EmailTextStyle: {
    fontSize: Theme.fontSizes.xmedium,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: moderateScale(45),
  },
  EmailAddressTextStyle: {
    fontSize: Theme.fontSizes.medium,
    color: 'black',
    marginLeft: moderateScale(45),
    marginTop: moderateScale(2),
  },
  FooterMainStyle: {
    height: (height / 100) * 30,
    // backgroundColor: 'red',
  },
  FooterTextStyle: {
    fontSize: Theme.fontSizes.big,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: moderateScale(18),
  },
  FooterBtnMainStyle: {
    height: (height / 100) * 25,
    // backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default style;

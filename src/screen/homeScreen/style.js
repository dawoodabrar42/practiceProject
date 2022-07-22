import React from 'react';
import {Dimensions, StyleSheet, StatusBar} from 'react-native';
import Theme from '../../../Theme/Theme';
import {moderateScale} from '../../../Theme/Dimensions';
const {height, width} = Dimensions.get('window');
const style = StyleSheet.create({
  headerView: {
    height: (height / 100) * 35,
    //  backgroundColor: 'green',
  },
  headerBottom: {
    height: (height / 100) * 10,
    width: (width / 100) * 15,
    // backgroundColor: '#faf',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageMainView: {
    height: (height / 100) * 10,
    // backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    //   justifyContent: 'space-between',
  },
  imageView: {
    height: 70,
    width: 70,
    borderRadius: moderateScale(50),
    marginLeft: moderateScale(10),
  },
  BottomMainView: {
    height: (height / 100) * 70,
    width: width,
    backgroundColor: 'white',
    borderTopLeftRadius: 34,
    borderTopRightRadius: 34,
    overflow: 'visible',
    // flexDirection: 'row',
  },
  buttonOneStyle: {
    height: 170,
    width: 180,
    marginHorizontal: 17,
    backgroundColor: 'white',
    // alignItems: 'center',
    // justifyContent: 'flex-end',
    top: -75,
    borderRadius: 35,
    elevation: 15,
    overflow: 'hidden',
  },
  buttonTwoStyle: {
    height: 170,
    width: 180,
    backgroundColor: 'white',
    // alignItems: 'center',
    // justifyContent: 'flex-end',
    top: -246,
    left: 215,
    borderRadius: 35,
    elevation: 15,
    overflow: 'hidden',
  },
  buttonThreeStyle: {
    height: 170,
    width: 180,
    backgroundColor: 'white',
    // alignItems: 'center',
    // justifyContent: 'flex-end',
    top: -230,
    left: 18,
    borderRadius: 35,
    elevation: 15,
    overflow: 'hidden',
  },
  buttonFourStyle: {
    height: 170,
    width: 180,
    backgroundColor: 'white',
    // alignItems: 'center',
    // justifyContent: 'flex-end',
    top: -400,
    left: 215,
    borderRadius: 35,
    elevation: 15,
    overflow: 'hidden',
  },
  textStyle: {
    fontSize: Theme.fontSizes.big,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: moderateScale(15),
  },
});

export default style;

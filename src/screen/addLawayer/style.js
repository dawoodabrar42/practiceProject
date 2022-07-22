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
  ImagePickerStyle: {
    height: (height / 100) * 30,
    //   backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ImageStyle: {
    height: 200,
    width: 200,
    borderRadius: 200,
  },
  TouchableOpacityStyle: {
    height: 40,
    width: 40,
    borderRadius: 34,
    backgroundColor: '#114D96',
    position: 'absolute',
    top: 160,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextInputMainStyle: {
    height: (height / 100) * 14,
    //   backgroundColor: 'red',
  },
  TextStyle: {
    fontSize: Theme.fontSizes.xmedium,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: moderateScale(20),
  },
  InputMianStyle: {
    height: (height / 100) * 8,
    //backgroundColor: 'blue',
    alignItems: 'center',
    marginTop: moderateScale(10),
  },
  FrimCodeStyle: {
    height: (height / 100) * 15,
    //   backgroundColor: 'blue',
  },
  FrimCodeTextStyle: {
    fontSize: Theme.fontSizes.xmedium,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: moderateScale(18),
  },
  TextInputMain: {
    height: (height / 100) * 8,
    //backgroundColor: 'blue',
    alignItems: 'center',
    flexDirection: 'row',
  },
  frimInputStyle: {
    height: 50,
    width: (width / 100) * 50,
    backgroundColor: 'white',
    elevation: 10,
    borderWidth: 1.5,
    borderRadius: 5,

    overflow: 'hidden',
    marginLeft: moderateScale(22),
    marginTop: moderateScale(8),
    flexDirection: 'row',
  },
  AppBtnStyle: {
    height: (height / 100) * 30,
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default style;

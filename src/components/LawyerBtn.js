import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {moderateScale} from '../../Theme/Dimensions';
import Theme from '../../Theme/Theme';
export const LawyerBtn = ({
  txt,
  onPress,
  disabled,
  color,
  ic,
  title,
  backgroundColor,
}) => {
  return (
    <View style={[style.mainView]}>
      <TouchableOpacity
        onPress={onPress}
        style={[style.touchableView, {backgroundColor: backgroundColor}]}>
        <Text style={style.text}>{txt}</Text>
        <Text style={style.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  mainView: {
    backgroundColor: '#faf',
    width: '40%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  touchableView: {
    // backgroundColor: '#114D96',
    height: '60%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderColor: 'black',
    // flexDirection: 'row',
    marginTop: moderateScale(7),
    // marginRight: moderateScale(15),
  },
  text: {
    color: '#fff',
    fontSize: Theme.fontSizes.xxmedium,
    fontWeight: 'bold',
    marginBottom: moderateScale(10),
    // marginLeft: moderateScale(6),
  },
  title: {
    color: '#fff',
    fontSize: Theme.fontSizes.medium,
    // marginLeft: moderateScale(6),
  },
});
export default style;

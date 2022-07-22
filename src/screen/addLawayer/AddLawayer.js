import React, {useState} from 'react';
import {
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  Alert,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {NavHeader} from '../../components/NavHeader';
import ImagePicker from 'react-native-image-crop-picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {AppInput} from '../../components/AppInput';
import Theme from '../../../Theme/Theme';
import {moderateScale} from '../../../Theme/Dimensions';
import {Button} from '../../components/Button';
import {Btn} from '../../components/Btn';
import {AppBtn} from '../../components/AppBtn';
import style from './style';
const {height, width} = Dimensions.get('window');
export const AddLawayer = () => {
  const [text, setText] = useState(require('../../assets/man.png'));
  const [image, setImage] = useState('');
  const [isActive, setActive] = useState(false);
  const onSelectImage = () => {
    ImagePicker.openPicker({
      multiple: true,
    });
  };
  const onSelectCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      //   cropping: true,
      freeStyleCropEnabled: true,
    }).then(image => {
      setImage(image.path);
    });
  };
  return (
    <ScrollView>
      <View style={style.mainContainer}>
        <NavHeader leftIc={'arrow-back'} title={'Add lawyer'} />
        {/* ImagePicker */}
        <View style={style.ImagePickerStyle}>
          <Image
            source={image === '' ? text : {uri: image}}
            resizeMode={'contain'}
            style={style.ImageStyle}
          />
          <TouchableOpacity
            onPress={() => {
              Alert.alert('Alert....', 'Select One Option', [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                },
                {
                  text: 'Camera',
                  onPress: () => onSelectCamera(),
                },
                {text: 'Gallery', onPress: () => onSelectImage()},
              ]);
            }}
            style={style.TouchableOpacityStyle}>
            <MaterialCommunityIcons
              name={'pencil-outline'}
              size={20}
              color={'white'}
            />
          </TouchableOpacity>
        </View>
        {/* TextInput */}
        <View style={style.TextInputMainStyle}>
          <Text style={style.TextStyle}>Email Address</Text>
          <View style={style.InputMianStyle}>
            <AppInput placeholder={'Email Address'} />
          </View>
        </View>

        {/* frimCode */}
        <View style={style.FrimCodeStyle}>
          <Text style={style.FrimCodeTextStyle}>Firm Code</Text>
          <View style={style.TextInputMain}>
            <View
              style={[
                style.frimInputStyle,
                {borderColor: isActive ? '#114D96' : 'white'},
              ]}>
              <TextInput
                placeholder="Enter Firm Code"
                placeholderTextColor="gray"
                onFocus={() => setActive(true)}
                onBlur={() => setActive(false)}
                keyboardType="number-pad"
                style={{
                  marginLeft: moderateScale(15),
                }}
              />
            </View>
            <Btn txt={'Generate Code'} color={'#114D96'} />
          </View>
        </View>

        <View style={style.AppBtnStyle}>
          <AppBtn txt={'Add'} marginTop={moderateScale(90)} />
        </View>
      </View>
    </ScrollView>
  );
};

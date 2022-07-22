import React from 'react';
import {
  View,
  Text,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import {NavHeader} from '../../components/NavHeader';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {moderateScale} from '../../../Theme/Dimensions';
import Theme from '../../../Theme/Theme';
import {HomeBtn} from '../../components/HomeBtn';
import style from './style';
const {height, width} = Dimensions.get('window');
export const HomeScreen = ({navigation}) => {
  return (
    <ImageBackground source={require('../../assets/bk.jpg')}>
      {/* headerView */}
      <View style={style.headerView}>
        {/* headerButton */}
        <View style={style.headerBottom}>
          <TouchableOpacity
            onPress={() => {
              navigation.openDrawer();
            }}>
            <Ionicons name={'ios-menu'} size={35} color={'white'} />
          </TouchableOpacity>
        </View>

        {/* imageView */}
        <View style={style.imageMainView}>
          <Image
            source={require('../../assets/img.jpg')}
            style={style.imageView}
          />
          <Text style={style.textStyle}>Nadila Aulia</Text>
        </View>
      </View>

      {/* buttomView */}
      <View style={style.BottomMainView}>
        {/* button1 */}
        <TouchableOpacity
          style={style.buttonOneStyle}
          onPress={() => {
            navigation.navigate('List');
          }}>
          <HomeBtn
            height={170}
            width={'65%'}
            marginLeft={moderateScale(14)}
            marginTop={moderateScale(10)}
            backgroundColor={'#652D904D'}
            txt={'Search Directory'}
            ic={'ios-person-outline'}
            color={'#652D90'}
          />
        </TouchableOpacity>
        {/* button2 */}
        <TouchableOpacity style={style.buttonTwoStyle}>
          <HomeBtn
            height={90}
            width={'65%'}
            // marginLeft={moderateScale(120)}
            backgroundColor={'#63A7444D'}
            txt={'Global Employer Handbook'}
            ic={'card-outline'}
            marginLeft={moderateScale(29)}
            color={'#63A744'}
          />
        </TouchableOpacity>

        {/* button3 */}
        <TouchableOpacity style={style.buttonThreeStyle}>
          <HomeBtn
            height={170}
            width={'65%'}
            marginLeft={moderateScale(5)}
            marginTop={moderateScale(20)}
            backgroundColor={'#D1B02D4D'}
            txt={'Media Library'}
            ic={'folder-open-outline'}
            color={'#D1B02D'}
          />
        </TouchableOpacity>

        {/* button4 */}
        <TouchableOpacity style={style.buttonFourStyle}>
          <HomeBtn
            height={170}
            width={'65%'}
            marginTop={moderateScale(20)}
            marginLeft={moderateScale(12)}
            backgroundColor={'#114D964D'}
            txt={'Settings'}
            ic={'ios-settings-outline'}
            color={'#114D96'}
          />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

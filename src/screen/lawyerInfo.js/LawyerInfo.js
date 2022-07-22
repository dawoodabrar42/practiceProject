import React from 'react';
import {View, Text, Image} from 'react-native';
import {LawyerBtn} from '../../components/LawyerBtn';
import {NavHeader} from '../../components/NavHeader';
import style from './style';
export const LawyerInfo = () => {
  return (
    <View style={style.mainContainer}>
      <NavHeader leftIc={'arrow-back'} title={'Lawyer Info'} />
      <View style={style.contentContainer}>
        <View style={style.ImageMainStyle}>
          {/* Image */}
          <View style={style.ImageStyle}>
            <Image
              source={require('../../assets/man.png')}
              style={style.ImageView}
            />
          </View>
          {/* Text */}
          <View style={style.TextMainStyle}>
            <Text style={style.TextStyle}>William</Text>
            <Text style={style.TextColor}>Employment Lawyer</Text>
          </View>
        </View>
        {/* PhoneStyle */}
        <View style={style.PhoneMainStyle}>
          <View style={style.PhoneTextMainStyle}>
            <Text style={style.PhoneTextStyle}>Phone no:</Text>
            <Text style={style.NumberTextStyle}>+124567880880</Text>
          </View>

          {/* EmailStyle */}
          <View style={style.EmailMainViewStyle}>
            <View style={style.EmailTextViewStyle}>
              <Text style={style.EmailTextStyle}>Email:</Text>
              <Text style={style.EmailAddressTextStyle}>
                bardelysimon98@gmail.com
              </Text>
            </View>
          </View>
        </View>
      </View>
      {/* YTD Referrals */}
      <View style={style.FooterMainStyle}>
        <Text style={style.FooterTextStyle}>YTD Referrals</Text>
        {/* FooterBtnMainStyle */}
        <View style={style.FooterBtnMainStyle}>
          <LawyerBtn
            backgroundColor={'#114D96'}
            txt={'20'}
            title={'Incoming Referrals'}
          />
          <LawyerBtn
            backgroundColor={'#63A744'}
            txt={'03'}
            title={'Outgoing Referrals'}
          />
        </View>
      </View>
    </View>
  );
};

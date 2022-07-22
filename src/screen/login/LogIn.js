import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Formik} from 'formik';

import {AppInput} from '../../components/AppInput';

import {AppBtn} from '../../components/AppBtn';
import {
  loginInitialValues,
  loginValidationSchema,
} from '../../components/validation';
import {Button} from '../../components/Button';
import style from './style';

export const LogIn = ({navigation}) => {
  const [show, setShow] = useState(true);

  const showHidePassword = () => {
    setShow(!show);
  };

  const onPressLogin = e => {
    navigation.replace('HomeScreen');
  };
  return (
    <View style={style.header}>
      <ScrollView>
        <View style={style.imgView}>
          <Image
            source={require('../../assets/AppLogo.png')}
            style={style.imgStyle}
          />
          <Text style={style.textStyle}>Welcome Back!</Text>
          <Text
            style={{
              color: '#7681A5',
            }}>
            Log in to your existing account
          </Text>
        </View>
        <Formik
          initialValues={loginInitialValues}
          validationSchema={loginValidationSchema}
          onSubmit={values => {
            onPressLogin(values);
          }}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            isValid,
            touched,
            onBlur,
            onFocus,
          }) => (
            <>
              {/* Email */}
              <View style={style.mainEmailView}>
                <View style={style.emailView}>
                  <Text style={style.emailTextStyle}>Email Address</Text>
                  <AppInput
                    placeholder={'You Email Address'}
                    placeholderTextColor={'gray'}
                    onChangeText={handleChange('email')}
                    value={values.email}
                    keyboardType="email-address"
                    errorMessage={errors.email}
                    touched={touched.email}
                    rightIc={values.email.length > 0 ? null : 'mail'}
                    color={'black'}
                  />
                </View>
                {/* Password */}
                <View style={style.passwordMainView}>
                  <Text style={style.passwordTextStyle}>Password</Text>
                  <AppInput
                    placeholder={'Your Password'}
                    placeholderTextColor={'gray'}
                    onChangeText={handleChange('password')}
                    value={values.password}
                    errorMessage={errors.password}
                    touched={touched.password}
                    secureTextEntry={show}
                    leftIc={show ? 'eye-off-sharp' : 'ios-eye-sharp'}
                    rightIc={
                      values.password.length > 0 ? null : 'ios-lock-closed'
                    }
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onPress={showHidePassword}
                    color={'black'}
                  />
                </View>
                <View style={style.forgotStyle}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('ResetPassword');
                    }}>
                    <Text style={style.forgotTextStyle}>Forgot Password?</Text>
                  </TouchableOpacity>
                </View>
              </View>
              {/* AppBtn */}
              <View style={style.AppBtnStyle}>
                <AppBtn
                  leftPress={() => {
                    navigation.navigate('OtpScreen');
                  }}
                  txt={'Login'}
                  onPress={handleSubmit}
                />
              </View>

              {/* login with */}
              <View style={style.middleVStyle}>
                <View style={style.leftLineStyle} />
                <View style={style.middleTextViewStyle}>
                  <Text style={style.middleTextStyle}>Or Login with</Text>
                </View>
                <View style={style.RightLineStyle} />
              </View>
              <View style={style.ButtonStyle}>
                {/* Button1 */}
                <View style={style.ButtonOneStyle}>
                  <Button color={'black'} ic={'logo-apple'} txt={'Apple'} />
                </View>

                {/* Button2 */}
                <View style={style.ButtonTwoStyle}>
                  <Button color={'red'} ic={'logo-google'} txt={'Google'} />
                </View>
              </View>
              <View style={style.footerStyle}>
                <Text style={style.footerText}>Don't have an account?</Text>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('CreateAccount');
                  }}>
                  <Text style={style.footerTextStyle}>Signup</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </Formik>
      </ScrollView>
    </View>
  );
};



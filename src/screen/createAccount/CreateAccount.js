import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import {Formik} from 'formik';
import {NavHeader} from '../../components/NavHeader';
import Theme from '../../../Theme/Theme';
import {AppInput} from '../../components/AppInput';
import {moderateScale} from '../../../Theme/Dimensions';
import {AppBtn} from '../../components/AppBtn';
import {
  confrimInitialValues,
  confrimValidationSchema,
} from '../../components/validation';
import style from './style';
import {Picker} from '../../components/Picker';
const {height, width} = Dimensions.get('window');

export const CreateAccount = ({navigation}) => {
  const [isActive, setActive] = useState(false);
  const [show, setShow] = useState(true);
  const showHidePassword = () => {
    setShow(!show);
  };
  const [checked, setChecked] = useState(true);

  const showPassword = () => {
    setChecked(!checked);
  };
  const onPressCreate = e => {
    navigation.navigate('HomeScreen');
  };
  return (
    <View style={style.header}>
      <ScrollView>
        <NavHeader
          leftPressed={() => {
            navigation.navigate('LogIn');
          }}
          leftIc={'arrow-back'}
          source={require('../../assets/AppLogo.png')}
        />
        <View style={style.imgView}>
          <Text style={style.textStyle}>Create Account</Text>
          <Text
            style={{
              color: '#7681A5',
            }}>
            Create an account to access ELA
          </Text>
        </View>

        <Formik
          initialValues={confrimInitialValues}
          validationSchema={confrimValidationSchema}
          onSubmit={values => {
            onPressCreate(values);
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
              {/* Name */}

              <View style={style.mainEmailView}>
                <View style={style.nameView}>
                  <Text style={style.nameTextStyle}>Name</Text>
                  <AppInput
                    placeholder={'You Name'}
                    onChangeText={handleChange('name')}
                    value={values.name}
                    errorMessage={errors.name}
                    touched={touched.name}
                    placeholderTextColor={'gray'}
                    keyboardType="email-address"
                    rightIc={values.name.length > 0 ? null : 'ios-person'}
                    color={'black'}
                  />
                </View>
                {/* Email */}
                <View style={style.emailView}>
                  <Text style={style.emailTextStyle}>Email Address</Text>
                  <AppInput
                    placeholder={'Your Email Address'}
                    placeholderTextColor={'gray'}
                    onChangeText={handleChange('email')}
                    value={values.email}
                    errorMessage={errors.email}
                    touched={touched.email}
                    rightIc={values.email.length > 0 ? null : 'mail'}
                    color={'black'}
                  />
                </View>

                {/* phone */}
                <View style={style.mainPhoneStyle}>
                  <View style={style.phoneStyle}>
                    <Text style={style.phoneTextStyle}>Phone</Text>
                  </View>
                  <View style={style.mainTextInput}>
                    <View style={style.pickerStyle}>
                      <Picker
                        leftIc={'arrow-drop-down'}
                        rightIc={'ios-person'}
                      />
                    </View>
                    <View
                      style={[
                        style.phoneTextInput,
                        {borderColor: isActive ? 'blue' : 'white'},
                      ]}>
                      <TextInput
                        placeholder="Enter Phone No"
                        placeholderTextColor="gray"
                        onFocus={() => setActive(true)}
                        onBlur={() => setActive(false)}
                        keyboardType="number-pad"
                      />
                    </View>
                  </View>
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
                    onPress={showHidePassword}
                    color={'black'}
                  />
                </View>
                {/* confrimPassword */}
                <View style={style.confirmPasswordMainView}>
                  <Text style={style.confirmPasswordTextStyle}>
                    Confirm Password
                  </Text>
                  <AppInput
                    placeholder={'Confirm Password'}
                    placeholderTextColor={'gray'}
                    onChangeText={handleChange('confirmPassword')}
                    value={values.confirmPassword}
                    errorMessage={errors.confirmPassword}
                    touched={touched.confirmPassword}
                    secureTextEntry={checked}
                    leftIc={checked ? 'eye-off-sharp' : 'ios-eye-sharp'}
                    rightIc={
                      values.confirmPassword.length > 0
                        ? null
                        : 'ios-lock-closed'
                    }
                    onPress={showPassword}
                    color={'black'}
                  />
                </View>
                {/* AppBtn */}
                <View style={style.AppBtnStyle}>
                  <AppBtn
                    txt={'Create'}
                    onPress={handleSubmit}
                    // disabled={!isValid}
                  />
                </View>
                <View style={style.footerStyle}>
                  <Text style={style.footerText}>Already have an account?</Text>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('LogIn');
                    }}>
                    <Text style={style.footerTextStyle}>Login</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </>
          )}
        </Formik>
      </ScrollView>
    </View>
  );
};

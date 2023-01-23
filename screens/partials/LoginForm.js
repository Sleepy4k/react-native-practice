// Import Core Libraries
import axios from 'axios';
import { useState } from 'react';
import { MaterialIcons, Ionicons } from 'react-native-vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, Keyboard, TouchableOpacity } from 'react-native';

// Import Config
import Config from '../../app.config';

// Import Styles
import { styles } from '../styles/LoginStyle';

// Import Const
import { Colors } from '../constant/Colors';
import { AxiosHeader } from '../constant/AxiosHeader';

// Import Helpers
import { createNotif } from '../helpers/Notifcation';

// Import Components
import Loader from '../components/Loader';
import InputField from '../components/InputField';
import CustomButton from '../components/CustomButton';

export default function LoginForm({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    password: '',
  });

  const handleError = (error, input) => {
    setErrors((prevValues) => ({ ...prevValues, [input]: error }));
  };

  const handleOnchange = (text, input) => {
    setValues((prevValues) => ({ ...prevValues, [input]: text }));
  };

  const validate = async () => {
    Keyboard.dismiss();

    let isValid = true;

    if (!values.username) {
      handleError('Please input username', 'username');
      isValid = false;
    } else if (values.username.length > 255) {
      handleError('Username cannot exceed 255 characters', 'username');
      isValid = false;
    }

    if (!values.password) {
      handleError('Please input password', 'password');
      isValid = false;
    } else if (values.password.length < 8) {
      handleError('Password must have at least 8 characters', 'password');
      isValid = false;
    } else if (values.password.length > 255) {
      handleError('Password cannot exceed 255 characters', 'password');
      isValid = false;
    }

    if (isValid) {
      submit();
    }
  };

  const submit = () => {
    setLoading(true);

    axios
      .post(`${Config.extra.apiUrl}/login`, values, AxiosHeader)
      .then(function (response) {
        setLoading(false);
        createNotif(response.data.message, 'Success');
        navigation.navigate('Home');
        AsyncStorage.setItem(
          'authUser',
          JSON.stringify({
            data: response.data.data,
            token: response.data.token,
            token_type: response.data.token_type,
            token_expired: response.data.expires_in,
          })
        );
      })
      .catch(function (error) {
        const response = error.response;

        setLoading(false);
        createNotif(response.data.errors, response.data.message);

        return response;
      });
  };

  return (
    <View>
      <Loader visible={loading} text={'Please Wait...'} />
      <InputField
        icon={
          <MaterialIcons
            name={"person"}
            size={20}
            color={Colors.grey}
            style={{ marginRight: 5 }}
          />
        }
        label={'Username'}
        editable={!loading}
        error={errors.username}
        defaultValue={values.username}
        onFocus={() => handleError(null, 'username')}
        inputFunction={(username) => handleOnchange(username, 'username')}
      />

      <InputField
        icon={
          <Ionicons
            name={"ios-lock-closed-outline"}
            size={20}
            color={Colors.grey}
            style={{ marginRight: 5 }}
          />
        }
        label={'Password'}
        editable={!loading}
        inputType={'password'}
        error={errors.password}
        defaultValue={values.password}
        onFocus={() => handleError(null, 'password')}
        inputFunction={(password) => handleOnchange(password, 'password')}
      />

      <CustomButton label={'Login'} onPress={validate} disabled={loading} />

      <View style={styles.register}>
        <Text>{'Dont have account?'}</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Register')}
          disabled={loading}>
          <Text style={styles.navigateLink}>{' Register'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Import Core Libraries
import axios from 'axios';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { MaterialIcons, Ionicons } from 'react-native-vector-icons';
import { View, Text, Keyboard, TouchableOpacity } from 'react-native';

// Import Config
import Config from '../../../../app.json';

// Import Styles
import styles from './styles';

// Import Consts
import { Colors, AxiosHeader } from '../../../constant';

// Import Helpers
import { Notifcation } from '../../../helpers';

// Import Components
import { Loader, InputField, CustomButton } from '../../../components';

const RegisterForm = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({
    name: '',
    username: '',
    password: '',
    password_confirmation: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    username: '',
    password: '',
    password_confirmation: '',
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

    if (!values.name) {
      handleError('Please input name', 'name');
      isValid = false;
    } else if (values.name.length > 255) {
      handleError('Name cannot exceed 255 characters', 'name');
      isValid = false;
    }

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

    if (!values.password_confirmation) {
      handleError(
        'Please input password confirmation',
        'password_confirmation'
      );
      isValid = false;
    } else if (values.password_confirmation.length < 8) {
      handleError(
        'Password confirmation must have at least 8 characters',
        'password_confirmation'
      );
      isValid = false;
    } else if (values.password_confirmation.length > 255) {
      handleError(
        'Password confirmation cannot exceed 255 characters',
        'password_confirmation'
      );
      isValid = false;
    }

    if (values.password != values.password_confirmation) {
      handleError('Password does not match with confirmation', 'password');
      isValid = false;
    }

    if (isValid) {
      submit();
    }
  };

  const submit = () => {
    setLoading(true);

    axios
      .post(`${Config.expo.extra.apiUrl}/register`, values, { headers: AxiosHeader })
      .then(function (response) {
        Notifcation(response.data.message, 'Success');
        navigation.navigate('Login');
      })
      .catch(function (error) {
        const response = error.response;

        if (response.data == null) {
          Notifcation('Server cant be reached', 'Server Error');
        } else {
          Notifcation(response.data.data, response.data.message);
        }

        return response;
      })
      .finally(() => setLoading(false));
  };

  return (
    <View>
      <Loader visible={loading} text={'Please Wait...'} />
      <InputField
        icon={
          <MaterialIcons
            name={'person'}
            size={20}
            color={Colors.grey}
            style={styles.icon}
          />
        }
        label={'Full Name'}
        error={errors.name}
        editable={!loading}
        defaultValue={values.name}
        inputFunction={(name) => handleOnchange(name, 'name')}
      />

      <InputField
        icon={
          <MaterialIcons
            name={'person'}
            size={20}
            color={Colors.grey}
            style={styles.icon}
          />
        }
        label={'Username'}
        editable={!loading}
        error={errors.username}
        defaultValue={values.username}
        inputFunction={(username) => handleOnchange(username, 'username')}
      />

      <InputField
        icon={
          <Ionicons
            name={'ios-lock-closed-outline'}
            size={20}
            color={Colors.grey}
            style={styles.icon}
          />
        }
        label={'Password'}
        editable={!loading}
        inputType={'password'}
        error={errors.password}
        defaultValue={values.password}
        inputFunction={(password) => handleOnchange(password, 'password')}
      />

      <InputField
        icon={
          <Ionicons
            name={'ios-lock-closed-outline'}
            size={20}
            color={Colors.grey}
            style={styles.icon}
          />
        }
        label={'Password Confirmation'}
        editable={!loading}
        inputType={'password'}
        error={errors.password_confirmation}
        defaultValue={values.password_confirmation}
        inputFunction={(password_confirmation) =>
          handleOnchange(password_confirmation, 'password_confirmation')
        }
      />

      <CustomButton label={'Register'} onPress={validate} disabled={loading} />

      <View style={styles.login}>
        <Text>{'Already have account?'}</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          disabled={loading}>
          <Text style={styles.navigateLink}>{' Login'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

RegisterForm.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default RegisterForm;

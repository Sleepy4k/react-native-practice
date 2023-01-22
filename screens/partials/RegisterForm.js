// Import Core Libraries
import axios from 'axios';
import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons, Ionicons } from 'react-native-vector-icons';

// Import Config
import Config from '../../app.config';

// Import Styles
import { styles } from '../styles/RegisterStyle';

// Import Helpers
import { createNotif } from '../helpers/Notifcation';

// Import Components
import InputField from '../components/InputField';
import CustomButton from '../components/CustomButton';

export default function RegisterForm({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({
    email: '',
    password: '',
    password_confirmation: '',
  });

  const onChangeText = (input, data) => {
    setValues({
      ...values,
      [input]: data,
    });
  };

  const onSubmit = () => {
    setLoading(true);
    const { email, password, password_confirmation } = values;

    if (!email) {
      setLoading(false);
      createNotif('Please fill email', 'Error');
      return;
    }

    if (!password) {
      setLoading(false);
      createNotif('Please fill password', 'Error');
      return;
    }

    if (!password_confirmation) {
      setLoading(false);
      createNotif('Please fill password confirmation', 'Error');
      return;
    }

    if (password != password_confirmation) {
      setLoading(false);
      createNotif('Password does not match with confirmation', 'Error');
      return;
    }

    axios
      .post(`${Config.extra.apiUrl}/register`, {
        email: email,
        password: password,
      })
      .then(function (response) {
        setLoading(false);
        console.log(response);
        if (response.status == 200) {
          createNotif('Registration Success', 'Success');
        } else {
          createNotif(response.statusText, 'Error');
        }
      })
      .catch(function (error) {
        setLoading(false);
        console.error(error);
        createNotif('System Error', 'Error');
      });
  };

  return (
    <View>
      <InputField
        icon={
          <MaterialIcons
            name="person"
            size={20}
            color="#666"
            style={{ marginRight: 5 }}
          />
        }
        label={'Email'}
        editable={!loading}
        inputType={'email-address'}
        defaultValue={values.email}
        inputFunction={(email) => onChangeText('email', email)}
      />

      <InputField
        icon={
          <Ionicons
            name="ios-lock-closed-outline"
            size={20}
            color="#666"
            style={{ marginRight: 5 }}
          />
        }
        label={'Password'}
        editable={!loading}
        inputType={'password'}
        defaultValue={values.password}
        inputFunction={(password) => onChangeText('password', password)}
      />

      <InputField
        icon={
          <Ionicons
            name="ios-lock-closed-outline"
            size={20}
            color="#666"
            style={{ marginRight: 5 }}
          />
        }
        label={'Password Confirmation'}
        editable={!loading}
        inputType={'password'}
        defaultValue={values.password_confirmation}
        inputFunction={(password_confirmation) =>
          onChangeText('password_confirmation', password_confirmation)
        }
      />

      <CustomButton label={'Register'} onPress={onSubmit} disabled={loading} />

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
}

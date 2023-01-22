// Import Core Libraries
import axios from 'axios';
import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons, Ionicons } from 'react-native-vector-icons';

// Import Config
import Config from '../../app.config';

// Import Styles
import { styles } from '../styles/LoginStyle';

// Import Helpers
import { createNotif } from '../helpers/Notifcation';

// Import Components
import InputField from '../components/InputField';
import CustomButton from '../components/CustomButton';

export default function LoginForm({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const onChangeText = (input, data) => {
    setValues({
      ...values,
      [input]: data,
    });
  };

  const onSubmit = () => {
    setLoading(true);
    const { email, password } = values;

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

    axios
      .post(`${Config.extra.apiUrl}/login`, {
        email: email,
        password: password,
      })
      .then(function (response) {
        setLoading(false);
        console.log(response);
        if (response.status == 200) {
          createNotif('Login Success', 'Success');
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
        fieldButtonLabel={'Forgot?'}
        fieldButtonFunction={() => navigation.navigate('ForgotPassword')}
      />

      <CustomButton label={'Login'} onPress={onSubmit} disabled={loading} />

      <View style={styles.register}>
        <Text>Dont have account?</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Register')}
          disabled={loading}>
          <Text style={styles.navigateLink}> Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Import Core Libraries
import axios from 'axios';
import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { MaterialIcons, Ionicons } from 'react-native-vector-icons';

// Import Helpers
import { createNotif } from '../helpers/Notifcation';
import { verticalScale, moderateScale } from '../helpers/Responsive';

// Import Config
import Config from '../../app.config';

export default function LoginForm({ navigation }) {
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
      <View style={styles.inputGroup}>
        <MaterialIcons
          name="person"
          size={20}
          color="#666"
          style={{ marginRight: 5 }}
        />
        <TextInput
          maxLength={255}
          editable={!loading}
          style={styles.input}
          placeholder={'Email'}
          keyboardType={'default'}
          defaultValue={values.email}
          onChangeText={(email) => onChangeText('email', email)}
        />
      </View>

      <View style={styles.inputGroup}>
        <Ionicons
          name="ios-lock-closed-outline"
          size={20}
          color="#666"
          style={{ marginRight: 5 }}
        />
        <TextInput
          maxLength={255}
          editable={!loading}
          style={styles.input}
          placeholder={'Password'}
          keyboardType={'password'}
          defaultValue={values.password}
          secureTextEntry={true}
          onChangeText={(password) => onChangeText('password', password)}
        />
      </View>

      <View style={styles.inputGroup}>
        <Ionicons
          name="ios-lock-closed-outline"
          size={20}
          color="#666"
          style={{ marginRight: 5 }}
        />
        <TextInput
          maxLength={255}
          editable={!loading}
          style={styles.input}
          placeholder={'Password Confirmation'}
          keyboardType={'password_confirmation'}
          defaultValue={values.password_confirmation}
          secureTextEntry={true}
          onChangeText={(password_confirmation) =>
            onChangeText('password_confirmation', password_confirmation)
          }
        />
      </View>

      <TouchableOpacity
        onPress={onSubmit}
        style={styles.submitBtn}
        disabled={loading}>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <Text style={styles.submitText}>Register</Text>
        )}
      </TouchableOpacity>

      <View style={styles.login}>
        <Text>Already have account?</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          disabled={loading}>
          <Text style={styles.navigateLink}> Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputGroup: {
    flexDirection: 'row',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingBottom: verticalScale(8),
    marginBottom: verticalScale(25),
  },
  input: {
    flex: 1,
    paddingVertical: verticalScale(0),
  },
  navigateLink: {
    color: '#AD40AF',
    fontWeight: '700',
  },
  submitBtn: {
    backgroundColor: '#AD40AF',
    padding: 20,
    borderRadius: moderateScale(10),
    marginBottom: verticalScale(30),
  },
  submitText: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: moderateScale(16),
    color: '#fff',
  },
  login: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

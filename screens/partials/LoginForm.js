// Import Core Libraries
import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { MaterialIcons, Ionicons } from 'react-native-vector-icons';

// Import Helpers
import { createNotif } from '../helpers/Notifcation';
import { verticalScale, moderateScale } from '../helpers/Responsive';

// Import Config
import Config from '../../app.config';

export default function LoginForm({ navigation }) {
  const [values, setValues] = useState({
    username: '',
    password: '',
  });

  const onChangeText = (input, data) => {
    setValues({
      ...values,
      [input]: data,
    });
  };

  const onSubmit = () => {
    const { username, password } = values;

    if (!username) {
      createNotif('Please fill username', 'Error');
      return;
    }

    if (!password) {
      createNotif('Please fill password', 'Error');
      return;
    }

    let formBody = [];
    let dataToSend = values;

    for (let key in dataToSend) {
      let encodedKey = encodeURIComponent(key);
      let encodedValue = encodeURIComponent(dataToSend[key]);

      formBody.push(encodedKey + '=' + encodedValue);
    }

    formBody = formBody.join('&');

    fetch(`${Config.extra.apiUrl}/login`, {
      method: 'POST',
      body: formBody,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        if (responseJson.status == 200) {
          createNotif(responseJson.message, 'Success');
        } else {
          createNotif(responseJson.message, 'Error');
        }
      })
      .catch((error) => {
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
          style={styles.input}
          placeholder={'Username'}
          keyboardType={'default'}
          defaultValue={values.username}
          onChangeText={(username) => onChangeText('username', username)}
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
          style={styles.input}
          placeholder={'Password'}
          keyboardType={'password'}
          defaultValue={values.password}
          secureTextEntry={true}
          onChangeText={(password) => onChangeText('password', password)}
        />
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.navigateLink}>Forgot?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={onSubmit} style={styles.submitBtn}>
        <Text style={styles.submitText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.register}>
        <Text>Dont have account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.navigateLink}> Register</Text>
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
  register: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

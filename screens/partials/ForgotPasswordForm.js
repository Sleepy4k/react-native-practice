// Import Core Libraries
import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from 'react-native-vector-icons';

// Import Helpers
import { createNotif } from '../helpers/Notifcation';
import { verticalScale, moderateScale } from '../helpers/Responsive';

export default function ForgotPasswordForm({ navigation }) {
  const [values, setValues] = useState({
    old_password: '',
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
    const { old_password, password, password_confirmation } = values;

    if (!old_password) {
      createNotif('Please fill old password', 'Error');
      return;
    }

    if (!password) {
      createNotif('Please fill new password', 'Error');
      return;
    }

    if (!password_confirmation) {
      createNotif('Please fill new password confirmation', 'Error');
      return;
    }

    if (password != password_confirmation) {
      createNotif('Password does not match with confirmation', 'Error');
      return;
    }

    createNotif('Password was successfully reset', 'Success');
  };

  return (
    <View>
      <View style={styles.inputGroup}>
        <Ionicons
          name="ios-lock-closed-outline"
          size={20}
          color="#666"
          style={{ marginRight: 5 }}
        />
        <TextInput
          style={styles.input}
          placeholder={'Old Password'}
          keyboardType={'password'}
          defaultValue={values.old_password}
          secureTextEntry={true}
          onChangeText={(old_password) =>
            onChangeText('old_password', old_password)
          }
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
          placeholder={'New Password'}
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
          style={styles.input}
          placeholder={'New Password Confirmation'}
          keyboardType={'password_confirmation'}
          defaultValue={values.password_confirmation}
          secureTextEntry={true}
          onChangeText={(password_confirmation) =>
            onChangeText('password_confirmation', password_confirmation)
          }
        />
      </View>

      <TouchableOpacity onPress={onSubmit} style={styles.submitBtn}>
        <Text style={styles.submitText}>Reset Password</Text>
      </TouchableOpacity>

      <View style={styles.login}>
        <Text>Already remember your password?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
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

// Import Core Libraries
import { useState } from 'react';
import { Ionicons } from 'react-native-vector-icons';
import { View, Text, TouchableOpacity } from 'react-native';

// Import Styles
import { styles } from '../styles/ForgotPasswordStyle';

// Import Helpers
import { createNotif } from '../helpers/Notifcation';

// Import Components
import InputField from '../components/InputField';
import CustomButton from '../components/CustomButton';

export default function ForgotPasswordForm({ navigation }) {
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    const { old_password, password, password_confirmation } = values;

    if (!old_password) {
      setLoading(false);
      createNotif('Please fill old password', 'Error');
      return;
    }

    if (!password) {
      setLoading(false);
      createNotif('Please fill new password', 'Error');
      return;
    }

    if (!password_confirmation) {
      setLoading(false);
      createNotif('Please fill new password confirmation', 'Error');
      return;
    }

    if (password != password_confirmation) {
      setLoading(false);
      createNotif('Password does not match with confirmation', 'Error');
      return;
    }

    createNotif('Password was successfully reset', 'Success');
  };

  return (
    <View>
      <InputField
        icon={
          <Ionicons
            name="ios-lock-closed-outline"
            size={20}
            color="#666"
            style={{ marginRight: 5 }}
          />
        }
        label={'Old Password'}
        editable={!loading}
        inputType={'password'}
        defaultValue={values.old_password}
        inputFunction={(old_password) =>
          onChangeText('old_password', old_password)
        }
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
        label={'New Password'}
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
        label={'New Password Confirmation'}
        editable={!loading}
        inputType={'password'}
        defaultValue={values.password_confirmation}
        inputFunction={(password_confirmation) =>
          onChangeText('password_confirmation', password_confirmation)
        }
      />

      <CustomButton
        label={'Reset Password'}
        onPress={onSubmit}
        disabled={loading}
      />

      <View style={styles.login}>
        <Text>Already remember your password?</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          disabled={loading}>
          <Text style={styles.navigateLink}> Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

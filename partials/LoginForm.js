// Import Core Libraries
import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  Alert
} from 'react-native';

// Import Config
import Config from '../app.config';

export default function LoginForm() {
  const [values, setValues] = React.useState({
    username: '',
    password: '',
  });

  const onChangeText = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = (event) => {
    if (!values.username) {
      Alert.alert('Please fill Username');
      return;
    }
    if (!values.password) {
      Alert.alert('Please fill Password');
      return;
    }

    fetch(Config.extra.apiUrl, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.status == "success") {
          setTimeout(() => {
            Alert.alert('Success', 'Login Berhasil');
          }, 100);
        } else {
          setTimeout(() => {
            Alert.alert('Warning', 'Username / Password Salah!');
          }, 100);
        }
      })
      .catch((error) => {
        console.error(error);
        setTimeout(() => {
          Alert.alert('Error', 'Terjadi kesalahan system!!');
        }, 100);
      });
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={onChangeText}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={onChangeText}
      />
      <Button
        onPress={onSubmit}
        title="Submit"
        color="#841584"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

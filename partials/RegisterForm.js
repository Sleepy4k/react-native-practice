import React from 'react';
import { View, StyleSheet, TextInput, Button, Alert } from 'react-native';

export default function RegisterForm({ data }) {
  const [values, setValues] = React.useState({
      username: "",
      password: ""
  })

  const onChangeText = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    })
  }

  return (
    <View>
      <TextInput
        name="username"
        style={styles.input}
        placeholder="Username"
        onChangeText={onChangeText}
      />
      <TextInput
        name="password"
        style={styles.input}
        placeholder="Password"
        onChangeText={onChangeText}
      />
      <Button
        onPress={() => Alert.alert("Kamu berhasil login")}
        title="Submit"
        color="#841584"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
})
// Import Core Libraries
import Constants from 'expo-constants';
import { View, StyleSheet, Pressable, Text } from 'react-native';

// Import Components
import Icon from '../components/Icon';

// Import Partials
import LoginForm from '../partials/LoginForm';

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Icon />
      <LoginForm />
      <Pressable
        onPress={() => navigation.navigate('Register')}
        style={{ backgroundColor: 'plum', padding: 10, marginBottom: 10, marginTop: 10 }}
      >
        <Text>Register</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});

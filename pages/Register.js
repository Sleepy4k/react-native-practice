// Import Core Libraries
import Constants from 'expo-constants';
import { View, StyleSheet, Pressable, Text } from 'react-native';

// Import Components
import Icon from '../components/Icon';

// Import Partials
import RegisterForm from '../partials/RegisterForm';

export default function Register({ navigation }) {
  return (
    <View style={styles.container}>
      <Icon />
      <RegisterForm />
      <Pressable
        onPress={() => navigation.navigate('Login')}
        style={{ backgroundColor: 'plum', padding: 10, marginBottom: 10, marginTop: 10 }}
      >
        <Text>Login</Text>
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

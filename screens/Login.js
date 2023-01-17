// Import Core Libraries
import { Text, StyleSheet } from 'react-native';

// Import Partials
import LoginForm from './partials/LoginForm';

// Import Layout
import MainLayout from './layouts/MainLayout';

// Import Helpers
import { verticalScale, moderateScale } from './helpers/Responsive';

export default function Login({ navigation }) {
  return (
    <MainLayout>
      <Text style={styles.title}>Login</Text>
      <LoginForm navigation={navigation} />
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Roboto-Medium',
    fontSize: moderateScale(28),
    fontWeight: '500',
    color: '#333',
    marginBottom: verticalScale(30),
  },
});

// Import Core Libraries
import { Text } from 'react-native';

// Import Styles
import { styles } from './styles/LoginStyle';

// Import Layout
import MainLayout from './layouts/MainLayout';

// Import Partials
import ForgotPasswordForm from './partials/ForgotPasswordForm';

export default function Login({ navigation }) {
  return (
    <MainLayout>
      <Text style={styles.title}>Forgot Password</Text>
      <ForgotPasswordForm navigation={navigation} />
    </MainLayout>
  );
}

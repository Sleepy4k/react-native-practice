// Import Core Libraries
import { Text } from 'react-native';

// Import Styles
import { styles } from './styles/LoginStyle';

// Import Layout
import MainLayout from './layouts/MainLayout';

// Import Partials
import RegisterForm from './partials/RegisterForm';

export default function Register({ navigation }) {
  return (
    <MainLayout>
      <Text style={styles.title}>Register</Text>
      <RegisterForm navigation={navigation} />
    </MainLayout>
  );
}

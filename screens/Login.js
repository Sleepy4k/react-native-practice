// Import Core Libraries
import { Text } from 'react-native';

// Import Styles
import { styles } from './styles/LoginStyle';

// Import Layout
import MainLayout from './layouts/MainLayout';

// Import Partials
import LoginForm from './partials/LoginForm';

export default function Login({ navigation }) {
  return (
    <MainLayout>
      <Text style={styles.title}>{'Login'}</Text>
      <LoginForm navigation={navigation} />
    </MainLayout>
  );
}

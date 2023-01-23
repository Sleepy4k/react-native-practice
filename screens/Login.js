// Import Core Libraries
import { Text } from 'react-native';

// Import Styles
import { styles } from './styles/LoginStyle';

// Import Layout
import GuestLayout from './layouts/GuestLayout';

// Import Partials
import LoginForm from './partials/LoginForm';

export default function Login({ navigation }) {
  return (
    <GuestLayout>
      <Text style={styles.title}>{'Login'}</Text>
      <LoginForm navigation={navigation} />
    </GuestLayout>
  );
}

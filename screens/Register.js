// Import Core Libraries
import { Text } from 'react-native';

// Import Styles
import { styles } from './styles/LoginStyle';

// Import Layout
import GuestLayout from './layouts/GuestLayout';

// Import Partials
import RegisterForm from './partials/RegisterForm';

export default function Register({ navigation }) {
  return (
    <GuestLayout>
      <Text style={styles.title}>{'Register'}</Text>
      <RegisterForm navigation={navigation} />
    </GuestLayout>
  );
}

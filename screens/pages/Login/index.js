// Import Core Libraries
import { Text } from 'react-native';

// Import Styles
import styles from './styles';

// Import Layout
import GuestLayout from '../../layouts/GuestLayout';

// Import Partials
import { Form } from '../../partials/Login';

export default function Login({ navigation }) {
  return (
    <GuestLayout>
      <Text style={styles.title}>{'Login'}</Text>
      <Form navigation={navigation} />
    </GuestLayout>
  );
}

// Import Core Libraries
import { Text } from 'react-native';

// Import Styles
import styles from './styles';

// Import Layout
import GuestLayout from '../../layouts/GuestLayout';

// Import Partials
import { Form } from '../../partials/Register';

export default function Register({ navigation }) {
  return (
    <GuestLayout>
      <Text style={styles.title}>{'Register'}</Text>
      <Form navigation={navigation} />
    </GuestLayout>
  );
}

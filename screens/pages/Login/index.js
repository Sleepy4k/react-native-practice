// Import Core Libraries
import PropTypes from 'prop-types';
import { Text } from 'react-native';

// Import Styles
import styles from './styles';

// Import Layouts
import { GuestLayout } from '../../layouts';

// Import Partials
import { Form } from '../../partials/Login';

const Login = ({ navigation }) => {
  return (
    <GuestLayout>
      <Text style={styles.title}>{'Login'}</Text>
      <Form navigation={navigation} />
    </GuestLayout>
  );
};

Login.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Login;

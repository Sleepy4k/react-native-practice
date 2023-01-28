// Import Core Libraries
import PropTypes from 'prop-types';
import { Alert, Platform, ToastAndroid } from 'react-native';

const createNotif = (message, title) => {
  if (Platform.OS == 'android') {
    ToastAndroid.showWithGravityAndOffset(
      message,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    );
  } else if (Platform.OS == 'web') {
    alert(message);
  } else {
    Alert.alert(title, message);
  }
};

createNotif.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

createNotif.defaultProps = {
  title: '',
  message: '',
};

export default createNotif;

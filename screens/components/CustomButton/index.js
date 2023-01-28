// Import Core Libraries
import PropTypes from 'prop-types';
import { Text, TouchableOpacity } from 'react-native';

// Import Styles
import styles from './styles';

const CustomButton = ({ label, disabled, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
      style={styles.submitButton}>
      <Text style={styles.submitText}>{label}</Text>
    </TouchableOpacity>
  );
};

CustomButton.propTypes = {
  onPress: PropTypes.func,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
};

CustomButton.defaultProps = {
  label: '',
  disabled: false,
};

export default CustomButton;

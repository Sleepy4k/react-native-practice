// Import Core Libraries
import { Text, TouchableOpacity, ActivityIndicator } from 'react-native';

// Import Styles
import { styles } from '../styles/CustomButtonStyle';

export default function CustomButton({
  label = '',
  disabled = false,
  onPress = () => {},
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
      style={styles.submitButton}>
      <Text style={styles.submitText}>{label}</Text>
    </TouchableOpacity>
  );
}

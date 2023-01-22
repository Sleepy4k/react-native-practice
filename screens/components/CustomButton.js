// Import Core Libraries
import { Text, TouchableOpacity, ActivityIndicator } from 'react-native';

// Import Styles
import { styles } from '../styles/CustomButtonStyle';

export default function CustomButton({ label, onPress, disabled }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.submitButton}
      disabled={disabled}>
      {disabled ? (
        <ActivityIndicator />
      ) : (
        <Text style={styles.submitText}>{label}</Text>
      )}
    </TouchableOpacity>
  );
}

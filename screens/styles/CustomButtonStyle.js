// Import Core Libraries
import { StyleSheet } from 'react-native';

// Import Helpers
import { verticalScale, moderateScale } from '../helpers/Responsive';

export const styles = StyleSheet.create({
  submitButton: {
    padding: 20,
    backgroundColor: '#AD40AF',
    borderRadius: moderateScale(10),
    marginBottom: verticalScale(30),
  },
  submitText: {
    color: '#fff',
    fontWeight: '700',
    textAlign: 'center',
    fontSize: moderateScale(16),
  },
});

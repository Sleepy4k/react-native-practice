// Import Core Libraries
import { StyleSheet } from 'react-native';

// Import Helpers
import { verticalScale } from '../helpers/Responsive';

export const styles = StyleSheet.create({
  inputGroup: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: verticalScale(8),
    marginBottom: verticalScale(25),
  },
  input: {
    flex: 1,
    paddingVertical: verticalScale(0),
  },
  navigateLink: {
    color: '#AD40AF',
    fontWeight: '700',
  },
});

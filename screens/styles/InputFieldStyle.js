// Import Core Libraries
import { StyleSheet } from 'react-native';

// Import Const
import { Colors } from '../constant/Colors';

// Import Helpers
import { verticalScale } from '../helpers/Responsive';

export const styles = StyleSheet.create({
  input: {
    flex: 1,
    paddingVertical: verticalScale(0),
  },
  inputGroup: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: Colors.white,
    paddingBottom: verticalScale(8),
    marginBottom: verticalScale(25),
  },
  inputError: {
    marginTop: 7,
    color: Colors.red,
    fontSize: 12,
  },
  showPassword: {
    color: Colors.darkBlue,
    fontSize: 22,
  },
  navigateLink: {
    fontWeight: '700',
    color: Colors.purple,
  },
});

// Import Core Libraries
import { StyleSheet } from 'react-native';

// Import Const
import Colors from '../../constant/Colors';

// Import Helpers
import { verticalScale } from '../../helpers/Responsive';

const styles = StyleSheet.create({
  input: {
    flex: 1,
    paddingVertical: verticalScale(0),
  },
  inputGroup: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    marginBottom: verticalScale(25),
    paddingBottom: verticalScale(8),
    borderBottomColor: Colors.white,
  },
  inputError: {
    fontSize: 12,
    marginTop: 7,
    color: Colors.red,
  },
  showPassword: {
    fontSize: 22,
    color: Colors.darkBlue,
  },
  navigateLink: {
    fontWeight: '700',
    color: Colors.purple,
  },
});

export default styles;

// Import Core Libraries
import { StyleSheet } from 'react-native';

// Import Const
import Colors from '../../constant/Colors';

// Import Helpers
import { verticalScale, moderateScale } from '../../helpers/Responsive';

const styles = StyleSheet.create({
  submitButton: {
    padding: 20,
    backgroundColor: Colors.purple,
    borderRadius: moderateScale(10),
    marginBottom: verticalScale(30),
  },
  submitText: {
    fontWeight: '700',
    color: Colors.white,
    textAlign: 'center',
    fontSize: moderateScale(16),
  },
});

export default styles;

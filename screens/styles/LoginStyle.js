// Import Core Libraries
import { StyleSheet } from 'react-native';

// Import Const
import { Colors } from '../constant/Colors';

// Import Helpers
import { verticalScale, moderateScale } from '../helpers/Responsive';

export const styles = StyleSheet.create({
  title: {
    fontWeight: '500',
    color: Colors.grey,
    fontFamily: 'Roboto-Medium',
    fontSize: moderateScale(28),
    marginBottom: verticalScale(30),
  },
  navigateLink: {
    fontWeight: '700',
    color: Colors.purple,
  },
  register: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

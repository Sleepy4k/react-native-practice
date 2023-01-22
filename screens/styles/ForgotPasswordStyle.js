// Import Core Libraries
import { StyleSheet } from 'react-native';

// Import Helpers
import { verticalScale, moderateScale } from '../helpers/Responsive';

export const styles = StyleSheet.create({
  title: {
    color: '#333',
    fontWeight: '500',
    fontFamily: 'Roboto-Medium',
    fontSize: moderateScale(28),
    marginBottom: verticalScale(30),
  },
  navigateLink: {
    color: '#AD40AF',
    fontWeight: '700',
  },
  login: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

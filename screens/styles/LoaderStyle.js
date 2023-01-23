// Import Core Libraries
import { StyleSheet } from 'react-native';

// Import Const
import { Colors } from '../constant/Colors';

// Import Helpers
import {
  verticalScale,
  moderateScale,
  horizontalScale,
} from '../helpers/Responsive';

export const styles = StyleSheet.create({
  container: {
    zIndex: 10,
    position: 'absolute',
    justifyContent: 'center',
  },
  loader: {
    alignItems: 'center',
    flexDirection: 'row',
    height: verticalScale(70),
    backgroundColor: Colors.white,
    borderRadius: moderateScale(5),
    marginHorizontal: horizontalScale(50),
    paddingHorizontal: horizontalScale(20),
  },
  text: {
    fontSize: 16,
    marginLeft: 10,
  },
});

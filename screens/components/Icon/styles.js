// Import Core Libraries
import { StyleSheet } from 'react-native';

// Import Helpers
import { verticalScale, horizontalScale } from '../../helpers/Responsive';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: verticalScale(50),
    marginBottom: verticalScale(20),
  },
  logo: {
    height: verticalScale(200),
    width: horizontalScale(200),
  },
});

export default styles;

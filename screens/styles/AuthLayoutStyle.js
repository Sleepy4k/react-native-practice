// Import Core Libraries
import { StyleSheet } from 'react-native';

// Import Helpers
import { horizontalScale } from '../helpers/Responsive';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: horizontalScale(40),
  },
  body: {
    paddingHorizontal: horizontalScale(25),
  },
});

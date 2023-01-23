// Import Core Libraries
import { StyleSheet } from 'react-native';

// Import Helpers
import { horizontalScale } from '../helpers/Responsive';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: horizontalScale(25),
  },
  body: {
    paddingHorizontal: horizontalScale(25),
  },
});

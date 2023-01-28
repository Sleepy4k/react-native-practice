// Import Core Libraries
import { StyleSheet } from 'react-native';

// Import Helpers
import { Responsive } from '../../helpers';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: Responsive.horizontal(25),
  },
  body: {
    paddingHorizontal: Responsive.horizontal(25),
  },
});

export default styles;

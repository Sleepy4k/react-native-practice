// Import Core Libraries
import { StyleSheet } from 'react-native';

// Import Helpers
import { Responsive } from '../../helpers';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: Responsive.horizontal(40),
  },
  body: {
    paddingHorizontal: Responsive.horizontal(25),
  },
});

export default styles;

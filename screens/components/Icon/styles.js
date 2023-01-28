// Import Core Libraries
import { StyleSheet } from 'react-native';

// Import Helpers
import { Responsive } from '../../helpers';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: Responsive.vertical(50),
    marginBottom: Responsive.vertical(20),
  },
  logo: {
    height: Responsive.vertical(200),
    width: Responsive.horizontal(200),
  },
});

export default styles;

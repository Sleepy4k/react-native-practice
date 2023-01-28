// Import Core Libraries
import { StyleSheet } from 'react-native';

// Import Consts
import { Colors } from '../../constant';

// Import Helpers
import { Responsive } from '../../helpers';

const styles = StyleSheet.create({
  title: {
    fontWeight: '500',
    color: Colors.grey,
    fontFamily: 'Roboto-Medium',
    fontSize: Responsive.moderate(28),
    marginBottom: Responsive.vertical(30),
  },
});

export default styles;

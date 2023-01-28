// Import Core Libraries
import { StyleSheet } from 'react-native';

// Import Consts
import { Colors } from '../../constant';

// Import Helpers
import { Responsive } from '../../helpers';

const styles = StyleSheet.create({
  submitButton: {
    padding: 20,
    backgroundColor: Colors.purple,
    borderRadius: Responsive.moderate(10),
    marginBottom: Responsive.vertical(30),
  },
  submitText: {
    fontWeight: '700',
    color: Colors.white,
    textAlign: 'center',
    fontSize: Responsive.moderate(16),
  },
});

export default styles;

// Import Core Libraries
import { StyleSheet } from 'react-native';

// Import Consts
import { Colors } from '../../constant';

// Import Helpers
import { Responsive } from '../../helpers';

const styles = StyleSheet.create({
  input: {
    flex: 1,
    paddingVertical: Responsive.vertical(0),
  },
  inputGroup: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    marginBottom: Responsive.vertical(25),
    paddingBottom: Responsive.vertical(8),
    borderBottomColor: Colors.white,
  },
  inputError: {
    fontSize: 12,
    marginTop: 7,
    color: Colors.red,
  },
  showPassword: {
    fontSize: 22,
    color: Colors.darkBlue,
  },
  navigateLink: {
    fontWeight: '700',
    color: Colors.purple,
  },
});

export default styles;

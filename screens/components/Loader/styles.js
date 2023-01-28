// Import Core Libraries
import { StyleSheet } from 'react-native';

// Import Consts
import { Colors } from '../../constant';

// Import Helpers
import { Responsive } from '../../helpers';

const styles = StyleSheet.create({
  container: {
    zIndex: 10,
    position: 'absolute',
    justifyContent: 'center',
  },
  loader: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: Colors.white,
    height: Responsive.vertical(70),
    borderRadius: Responsive.moderate(5),
    marginHorizontal: Responsive.horizontal(50),
    paddingHorizontal: Responsive.horizontal(20),
  },
  text: {
    fontSize: 16,
    marginLeft: 10,
  },
});

export default styles;

// Import Core Libraries
import { View, StyleSheet, Image } from 'react-native';

// Import Helpers
import { horizontalScale, verticalScale } from '../helpers/Responsive';

export default function Icon() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/telkom.jpg')} />
    </View>
  );
}

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

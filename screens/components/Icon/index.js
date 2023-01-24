// Import Core Libraries
import { View, Image } from 'react-native';

// Import Styles
import styles from './styles';

export default function Icon() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../assets/telkom.png')} />
    </View>
  );
}

// Import Core Libraries
import { View, Text, ActivityIndicator } from 'react-native';

// Import Const
import { Colors } from '../constant/Colors';

// Import Styles
import { styles } from '../styles/LoaderStyle';

export default function Loader({ visible = false, text = 'Loading...' }) {
  return (
    visible && (
      <View style={styles.container}>
        <View style={styles.loader}>
          <ActivityIndicator size="large" color={Colors.blue} />
          <Text style={styles.text}>{text}</Text>
        </View>
      </View>
    )
  );
}

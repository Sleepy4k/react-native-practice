// Import Core Libraries
import { Alert, Platform, ToastAndroid } from 'react-native';

export const createNotif = (message, title) => {
  if (Platform.OS == 'android') {
    ToastAndroid.showWithGravityAndOffset(
      message,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    );
  } else if (Platform.OS == 'web') {
    alert(message);
  } else {
    Alert.alert(message, title);
  }
};

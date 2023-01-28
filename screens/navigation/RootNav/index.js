// Import Core Libraries
import { View } from 'react-native';
import { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Import Styles
import styles from './styles';

// Import Components
import { Loader } from '../../components';

// Import Navigations
import { BottomTab, GuestStack } from '../index';

export default function RootNav() {
  const Stack = createStackNavigator();
  const [initialRouteName, setInitialRouteName] = useState('');

  useEffect(() => {
    const authUser = async () => {
      try {
        const userData = await AsyncStorage.getItem('authUser');

        if (userData) {
          const user = JSON.parse(userData);

          if (user.token) {
            setInitialRouteName('Tab');
          } else {
            setInitialRouteName('Stack');
          }
        } else {
          setInitialRouteName('Stack');
        }
      } catch (error) {
        setInitialRouteName('Stack');
      }
    };

    setTimeout(() => {
      authUser();
    }, 2000);
  }, []);

  return !initialRouteName ? (
    <View style={styles.loader}>
      <Loader visible={true} text={'Memuat Aplikasi...'} />
    </View>
  ) : (
    <Stack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{ headerShown: false, animationEnabled: false }}>
      <Stack.Screen name={'Tab'} component={BottomTab} />
      <Stack.Screen name={'Stack'} component={GuestStack} />
    </Stack.Navigator>
  );
}

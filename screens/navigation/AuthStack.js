// Import Core Libraries
import { View } from 'react-native';
import { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Import Pages
import Home from '../Home';
import Login from '../Login';
import Register from '../Register';

// Import Components
import Loader from '../components/Loader';

export default function AuthStack() {
  const Stack = createStackNavigator();
  const [initialRouteName, setInitialRouteName] = useState('');

  const authUser = async () => {
    try {
      const userData = await AsyncStorage.getItem('authUser');

      if (userData) {
        const user = JSON.parse(userData);

        if (user.token) {
          setInitialRouteName('Home');
        } else {
          setInitialRouteName('Login');
        }
      } else {
        setInitialRouteName('Register');
      }
    } catch (error) {
      setInitialRouteName('Register');
    }
  };

  useEffect(() => {
    setTimeout(() => {
      authUser();
    }, 2000);
  }, []);

  return (
    <>
      {!initialRouteName ? (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Loader visible={true} text={'Memuat Aplikasi...'} />
        </View>
      ) : (
        <Stack.Navigator
          initialRouteName={initialRouteName}
          screenOptions={{ headerShown: false, animationEnabled: false }}>
          <Stack.Screen name={'Home'} component={Home} />
          <Stack.Screen name={'Login'} component={Login} />
          <Stack.Screen name={'Register'} component={Register} />
        </Stack.Navigator>
      )}
    </>
  );
}

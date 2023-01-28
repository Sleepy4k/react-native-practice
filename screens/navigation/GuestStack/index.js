// Import Core Libraries
import { createStackNavigator } from '@react-navigation/stack';

// Import Pages
import { Login, Register } from '../../pages';

export default function GuestStack() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName={'Register'}
      screenOptions={{ headerShown: false, animationEnabled: false }}>
      <Stack.Screen name={'Login'} component={Login} />
      <Stack.Screen name={'Register'} component={Register} />
    </Stack.Navigator>
  );
}

// Import Core Libraries
import { createStackNavigator } from '@react-navigation/stack';

// Import Pages
import Login from '../Login';
import Register from '../Register';
import ForgotPassword from '../ForgotPassword';

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false, animationEnabled: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  );
}

// Import Core Libraries
import { NavigationContainer } from '@react-navigation/native';

// Import Navigation
import AuthStack from './screens/navigation/AuthStack';

export default function App() {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
}

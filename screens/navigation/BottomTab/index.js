// Import Core Libraries
import { MaterialIcons } from 'react-native-vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import Styles
import styles from './styles';

// Import Pages
import { Home } from '../../pages';

export default function AuthStack() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName={'Dashboard'}
      screenOptions={{ headerShown: false, animationEnabled: true }}>
      <Tab.Screen
        name="Dashboard"
        component={Home}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons
              name="home"
              size={size}
              color={color}
              style={styles.icon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Home}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons
              name="person"
              size={size}
              color={color}
              style={styles.icon}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

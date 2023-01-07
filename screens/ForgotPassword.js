// Import Core Libraries
import { useState, useCallback } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  RefreshControl,
} from 'react-native';

// Import Components
import Icon from './components/Icon';

// Import Partials
import ForgotPasswordForm from './partials/ForgotPasswordForm';

// Import Helpers
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from './helpers/Responsive';

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export default function Login({ navigation }) {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={styles.body}>
          <Icon />
          <Text style={styles.title}>Forgot Password</Text>
          <ForgotPasswordForm navigation={navigation} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: horizontalScale(25),
  },
  body: {
    paddingHorizontal: horizontalScale(25),
  },
  title: {
    fontFamily: 'Roboto-Medium',
    fontSize: moderateScale(28),
    fontWeight: '500',
    color: '#333',
    marginBottom: verticalScale(30),
  },
});

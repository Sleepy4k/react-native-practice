// Import Core Libraries
import { useState, useCallback } from 'react';
import { View, ScrollView, SafeAreaView, RefreshControl } from 'react-native';

// Import Styles
import styles from './styles';

// Import Helpers
import { Wait } from '../../helpers';

export default function AuthLayout({ children }) {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    Wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={styles.body}>{children}</View>
      </ScrollView>
    </SafeAreaView>
  );
}

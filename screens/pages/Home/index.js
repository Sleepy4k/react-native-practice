// Import Core Libraries
import axios from 'axios';
import { Text } from 'react-native';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Import Config
import Config from '../../../app.config';

// Import Styles
import styles from './styles';

// Import Const
import { axiosConfig } from '../../constant/AxiosHeader';

// Import Helpers
import createNotif from '../../helpers/Notifcation';

// Import Layout
import AuthLayout from '../../layouts/AuthLayout';

// Import Components
import CustomButton from '../../components/CustomButton';

export default function Home({ navigation }) {
  const [userDetail, setUserDetail] = useState();

  const axiosHeader = {
    headers: {
      Authorization: `Bearer ${userDetail?.token}`,
      ...axiosConfig,
    }
  };

  const getUserData = async () => {
    const userData = await AsyncStorage.getItem('authUser');
    const user = JSON.parse(userData);

    if (user.token) {
      setUserDetail(user);
    } else {
      logout();
    }
  };

  const logout = () => {
    axios
      .post(`${Config.extra.apiUrl}/logout`, {}, axiosHeader)
      .then(function (response) {
        createNotif(response.data.message, 'System');
        AsyncStorage.clear();
        navigation.navigate('Login');
      })
      .catch(function (error) {
        const response = error.response;

        createNotif(response.data.data, response.data.message);

        return response;
      });
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <AuthLayout>
      <Text style={styles.text}>{'Welcome '}{userDetail?.data.name}</Text>
      <CustomButton label={'Logout'} onPress={logout} />
    </AuthLayout>
  );
}

// Import Core Libraries
import { Text } from 'react-native';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Import Config
import Config from './../app.config';

// Import Styles
import { styles } from './styles/HomeStyle';

// Import Const
import { axiosConfig } from './constant/AxiosHeader';

// Import Layout
import AuthLayout from './layouts/AuthLayout';

// Import Components
import CustomButton from './components/CustomButton';

export default function Home({ navigation }) {
  const [userDetail, setUserDetail] = useState();

  const axiosHeader = {
    Authorization: 'Bearer ' + userDetail?.token,
    ...axiosConfig,
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

  const logout = async () => {
    await AsyncStorage.removeItem('authUser');

    navigation.navigate('Login');
  };

  // const logout = () => {
  //   axios
  //     .post(`${Config.extra.apiUrl}/logout`, {}, axiosHeader)
  //     .then(function (response) {
  //       console.log(response);
  //       navigation.navigate('Login');
  //       AsyncStorage.removeItem('authUser');
  //     })
  //     .catch(function (error) {
  //       const response = error.response;

  //       console.log(response);

  //       return response;
  //     });
  // };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <AuthLayout>
      <Text style={styles.text}>Welcome {userDetail?.data.name}</Text>
      <CustomButton label="Logout" onPress={logout} />
    </AuthLayout>
  );
}

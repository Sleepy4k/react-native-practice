// Import Core Libraries
import axios from 'axios';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Import Config
import Config from '../../../app.json';

// Import Styles
import styles from './styles';

// Import Consts
import { axiosHeader } from '../../constant';

// Import Helpers
import { Notifcation } from '../../helpers';

// Import Layouts
import { AuthLayout } from '../../layouts';

// Import Components
import { CustomButton } from '../../components';

const Home = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [userDetail, setUserDetail] = useState();

  const axiosConfig = {
    headers: {
      Authorization: `Bearer ${userDetail?.token}`,
      ...axiosHeader,
    },
  };

  const logout = () => {
    setLoading(true);

    axios
      .post(`${Config.expo.extra.apiUrl}/logout`, {}, axiosConfig)
      .then(function (response) {
        Notifcation(response.data.message, 'System');
        AsyncStorage.clear();
        navigation.navigate('Login');
      })
      .catch(function (error) {
        const response = error.response;

        if (response.data == null) {
          Notifcation(response.data.data, response.data.message);
        } else {
          Notifcation('Server cant be accessed', 'Server Error');
        }

        return response;
      })
      .finally(() => setLoading(false));
  };

  useEffect((navigation = navigation) => {
    const getUserData = async () => {
      const userData = await AsyncStorage.getItem('authUser');
      const user = JSON.parse(userData);

      if (user.token) {
        setUserDetail(user);
      } else {
        AsyncStorage.clear();
        navigation.navigate('Login');
      }
    };

    getUserData();
  }, []);

  return (
    <AuthLayout>
      <Text style={styles.text}>
        {'Welcome '}
        {userDetail?.data.name}
      </Text>
      <CustomButton label={'Logout'} onPress={logout} disabled={loading} />
    </AuthLayout>
  );
};

Home.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Home;

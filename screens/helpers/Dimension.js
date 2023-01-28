// Import Core Libraries
import { Dimensions } from 'react-native';

const Dimension = {
  width: windowWidth,
  height: windowHeight,
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

Dimension.width = windowWidth;
Dimension.height = windowHeight;

export default Dimension;

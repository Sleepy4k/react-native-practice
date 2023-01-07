// Import Helpers
import { windowWidth, windowHeight } from './Dimension';

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

// Width calculation
export const horizontalScale = (size) =>
  (windowWidth / guidelineBaseWidth) * size;

// Height calculation
export const verticalScale = (size) =>
  (windowHeight / guidelineBaseHeight) * size;

// Font Size and Border Radius calculation
export const moderateScale = (size, factor = 0.5) =>
  size + (horizontalScale(size) - size) * factor;

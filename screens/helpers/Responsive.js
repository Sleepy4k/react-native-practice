// Import Helpers
import Dimension from './Dimension';

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const Responsive = {
  horizontal: horizontalScale,
  vertical: verticalScale,
  moderate: moderateScale,
};

const horizontalScale = (size) => (Dimension.width / guidelineBaseWidth) * size;
const verticalScale = (size) => (Dimension.height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (horizontalScale(size) - size) * factor;

Responsive.horizontal = horizontalScale;
Responsive.vertical = verticalScale;
Responsive.moderate = moderateScale;

export default Responsive;

import * as React from "react";
import { moderateScale } from "react-native-size-matters";
import Svg, { Path } from "react-native-svg";
const KnobDownArrowSvg = (props) => (
  <Svg
    width={moderateScale(20)}
    height={moderateScale(20)}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.7751 7.47456C14.0192 7.71864 14.0192 8.11437 13.7751 8.35845L10.4418 11.6918C10.1977 11.9359 9.80197 11.9359 9.5579 11.6918L6.22456 8.35845C5.98048 8.11437 5.98048 7.71864 6.22456 7.47456C6.46864 7.23048 6.86437 7.23048 7.10845 7.47456L9.99984 10.366L12.8912 7.47456C13.1353 7.23048 13.531 7.23048 13.7751 7.47456Z"
      fill="#1E1E1E"
    />
  </Svg>
);
export default KnobDownArrowSvg;

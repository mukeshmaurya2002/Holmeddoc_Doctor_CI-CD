import * as React from "react";
import { moderateScale } from "react-native-size-matters";
import Svg, { Path, SvgProps } from "react-native-svg";
interface StarSvgProps extends SvgProps {
  fillColor: string
}
const StarSvg = ({ fillColor = '"#FDCC0D"', ...props }: StarSvgProps) => (
  <Svg
    width={moderateScale(12)}
    height={moderateScale(10)}
    viewBox="0 0 12 10"
    fill="none"
    {...props}
  >
    <Path
      d="M6.43237 0.498111C6.23968 0.166036 5.76013 0.166034 5.56744 0.498111L4.21041 2.83677C4.11523 3.00081 3.9507 3.11275 3.76317 3.14108L1.22001 3.52519C0.792873 3.5897 0.643044 4.12901 0.975696 4.40461L2.87024 5.97422C3.04561 6.11951 3.12807 6.3487 3.08547 6.57241L2.58989 9.17498C2.51155 9.5864 2.94344 9.90606 3.31401 9.71093L5.70872 8.45002C5.89098 8.35405 6.10883 8.35405 6.2911 8.45002L8.6858 9.71093C9.05638 9.90606 9.48827 9.5864 9.40993 9.17498L8.91434 6.57241C8.87174 6.3487 8.9542 6.11951 9.12957 5.97422L11.0241 4.40461C11.3568 4.12901 11.2069 3.5897 10.7798 3.52519L8.23664 3.14108C8.04911 3.11275 7.88459 3.00081 7.7894 2.83677L6.43237 0.498111Z"
      fill={fillColor}
    />
  </Svg>
);
export default StarSvg;

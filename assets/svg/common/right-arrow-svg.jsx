import * as React from "react";
import { moderateScale } from "react-native-size-matters";
import Svg, { Path } from "react-native-svg";
const RightArrowSvg = (props) => (
    <Svg
        width={moderateScale(18)}
        height={moderateScale(18)}
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.72725 5.60225C6.94692 5.38258 7.30308 5.38258 7.52275 5.60225L10.5227 8.60225C10.7424 8.82192 10.7424 9.17808 10.5227 9.39775L7.52275 12.3977C7.30308 12.6174 6.94692 12.6174 6.72725 12.3977C6.50758 12.1781 6.50758 11.8219 6.72725 11.6023L9.3295 9L6.72725 6.39775C6.50758 6.17808 6.50758 5.82192 6.72725 5.60225Z"
            fill="#1E1E1E"
        />
    </Svg>
);
export default RightArrowSvg;

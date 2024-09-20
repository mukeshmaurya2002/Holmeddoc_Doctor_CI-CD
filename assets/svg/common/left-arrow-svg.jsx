import * as React from "react";
import { moderateScale } from "react-native-size-matters";
import Svg, { Path } from "react-native-svg";
const LeftArrowSvg = (props) => (
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
            d="M11.2727 5.60225C11.0531 5.38258 10.6969 5.38258 10.4773 5.60225L7.47725 8.60225C7.25758 8.82192 7.25758 9.17808 7.47725 9.39775L10.4773 12.3977C10.6969 12.6174 11.0531 12.6174 11.2727 12.3977C11.4924 12.1781 11.4924 11.8219 11.2727 11.6023L8.6705 9L11.2727 6.39775C11.4924 6.17808 11.4924 5.82192 11.2727 5.60225Z"
            fill="#1E1E1E"
        />
    </Svg>
);
export default LeftArrowSvg;

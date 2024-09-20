import * as React from "react";
import { moderateScale } from "react-native-size-matters";
import Svg, { Path } from "react-native-svg";
const LineArrowSvg = (props) => (
    <Svg
        width={moderateScale(325)}
        height={moderateScale(7)}
        viewBox="0 0 325 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M325 3.50003L320 0.613277L320 6.38678L325 3.50003ZM-4.37114e-08 4L320.5 4.00003L320.5 3.00003L4.37114e-08 3L-4.37114e-08 4Z"
            fill="#D9D9D9"
        />
    </Svg>
);
export default LineArrowSvg;

import * as React from "react";
import { moderateScale } from "react-native-size-matters";
import Svg, { Rect } from "react-native-svg";
const UnfilledCompletionSvg = (props) => (
    <Svg
        width={moderateScale(78)}
        height={moderateScale(6)}
        viewBox="0 0 84 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Rect width={84} height={6} fill="#D3F8DF" />
    </Svg>
);
export default UnfilledCompletionSvg;

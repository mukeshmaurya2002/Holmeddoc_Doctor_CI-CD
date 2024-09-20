import * as React from "react";
import { moderateScale } from "react-native-size-matters";
import Svg, { Line } from "react-native-svg";
const PipeSvg = (props) => (
    <Svg
        width={moderateScale(36)}
        height={moderateScale(2)}
        viewBox="0 0 28 1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Line x1={4.30686e-8} y1={0.5} x2={28} y2={0.500002} stroke="#CF8B15" />
    </Svg>
);
export default PipeSvg;

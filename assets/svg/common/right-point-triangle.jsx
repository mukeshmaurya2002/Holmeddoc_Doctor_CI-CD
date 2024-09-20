import * as React from "react";
import { moderateScale } from "react-native-size-matters";
import Svg, { Polygon } from "react-native-svg";
const RightPointTriangle = (props) => (
    <Svg
        width={moderateScale(10)}
        height={moderateScale(10)}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Polygon points="0,0 24,12 0,24" fill="#008282" />
    </Svg>
);
export default RightPointTriangle;

import * as React from "react";
import { moderateScale } from "react-native-size-matters";
import Svg, { Rect } from "react-native-svg";
import { SCREEN_WIDTH } from "../../../src/constants/responsive";
import { helpers } from "../../../src/utility/helpers";
const BackGroundLine = (props) => (
    <Svg
        width={SCREEN_WIDTH}
        height={moderateScale(helpers.isTablet ?  12: 8)}
        viewBox="0 0 410 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Rect width={410} height={8} fill="#D2F1F1" />
    </Svg>
);
export default BackGroundLine;

import * as React from "react";
import { moderateScale } from "react-native-size-matters";
import Svg, { Rect, SvgProps } from "react-native-svg";
const FilledBar = (props: SvgProps) => (
    <Svg
        width={moderateScale(89)}
        height={moderateScale(4)}
        viewBox="0 0 89 4"
        fill="none"
        {...props}
    >
        <Rect width={89} height={4} rx={2} fill="#16B364" />
    </Svg>
);
export default FilledBar;

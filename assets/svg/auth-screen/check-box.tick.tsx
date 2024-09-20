import * as React from "react";
import { moderateScale } from "react-native-size-matters";
import Svg, { Path, SvgProps } from "react-native-svg";
const CheckBoxTick = (props: SvgProps) => (
    <Svg
        width={moderateScale(7)}
        height={moderateScale(6)}
        viewBox="0 0 7 6"
        fill="none"
        {...props}
    >
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.5 5.25L0 2.75L0.795 2L2.5 3.675L6.205 0L7 0.79L2.5 5.25Z"
            fill="#F6F5F7"
        />
    </Svg>
);
export default CheckBoxTick;

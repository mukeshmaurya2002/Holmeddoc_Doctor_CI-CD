import * as React from "react";
import { moderateScale } from "react-native-size-matters";
import Svg, { Path, SvgProps } from "react-native-svg";
const OffToggle = (props: SvgProps) => (
    <Svg
        width={moderateScale(30)}
        height={moderateScale(30)}
        viewBox="0 0 24 24"
        fill="none"
        {...props}
    >
        <Path
            d="M7.5 18H16.5C20.09 18 23 15.09 23 11.5C23 7.91 20.09 5 16.5 5H7.5C3.91 5 1 7.91 1 11.5C1 15.09 3.91 18 7.5 18Z"
            fill="#B0BEC5"
        />
        <Path
            d="M7.5 17C10.5376 17 13 14.5376 13 11.5C13 8.46243 10.5376 6 7.5 6C4.46243 6 2 8.46243 2 11.5C2 14.5376 4.46243 17 7.5 17Z"
            fill="#ECEFF1"
        />
    </Svg>
);
export default OffToggle;

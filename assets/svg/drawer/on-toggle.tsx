import * as React from "react";
import { moderateScale } from "react-native-size-matters";
import Svg, { Path, SvgProps } from "react-native-svg";
const OnToggle = (props: SvgProps) => (
    <Svg
        width={moderateScale(30)}
        height={moderateScale(30)}
        viewBox="0 0 24 24"
        fill="none"
        {...props}
    >
        <Path
            d="M16.5 5H7.5C3.91 5 1 7.91 1 11.5C1 15.09 3.91 18 7.5 18H16.5C20.09 18 23 15.09 23 11.5C23 7.91 20.09 5 16.5 5Z"
            fill={props.color ? props.color : "#CF8B15"}
        />
        <Path
            d="M16.5 17C19.5376 17 22 14.5376 22 11.5C22 8.46243 19.5376 6 16.5 6C13.4624 6 11 8.46243 11 11.5C11 14.5376 13.4624 17 16.5 17Z"
            fill="#F5FBFC"
        />
    </Svg>
);
export default OnToggle;

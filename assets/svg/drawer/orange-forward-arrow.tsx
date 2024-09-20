import * as React from "react";
import { moderateScale } from "react-native-size-matters";
import Svg, { Path, SvgProps } from "react-native-svg";
const OrangeForwarArrow = (props: SvgProps) => (
    <Svg
        width={moderateScale(28)}
        height={moderateScale(28)}
        viewBox="0 0 28 28"
        fill="none"
        {...props}
    >
        <Path
            d="M15.7145 9.95221C15.3728 9.61051 15.3728 9.05649 15.7145 8.71478C16.0562 8.37307 16.6103 8.37307 16.952 8.71478L21.6186 13.3814C21.9603 13.7232 21.9603 14.2772 21.6186 14.6189L16.952 19.2855C16.6103 19.6273 16.0562 19.6273 15.7145 19.2855C15.3728 18.9438 15.3728 18.3898 15.7145 18.0481L18.8875 14.8752H7.58325C7.1 14.8752 6.70825 14.4834 6.70825 14.0002C6.70825 13.5169 7.1 13.1252 7.58325 13.1252H18.8875L15.7145 9.95221Z"
            fill="#CF8B15"
        />
    </Svg>
);
export default OrangeForwarArrow;

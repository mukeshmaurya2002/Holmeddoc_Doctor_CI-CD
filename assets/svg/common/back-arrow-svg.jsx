import * as React from "react";
import { moderateScale } from "react-native-size-matters";
import Svg, { Path } from "react-native-svg";
const BackArrowSvg = (props) => (
    <Svg
        width={moderateScale(14)}
        height={moderateScale(10)}
        viewBox="0 0 14 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M6.03033 1.53033C6.32322 1.23744 6.32322 0.762563 6.03033 0.46967C5.73744 0.176777 5.26256 0.176777 4.96967 0.46967L0.96967 4.46967C0.823223 4.61612 0.75 4.80806 0.75 5C0.75 5.10169 0.770239 5.19866 0.806909 5.28709C0.843509 5.37555 0.897763 5.45842 0.96967 5.53033L4.96967 9.53033C5.26256 9.82322 5.73744 9.82322 6.03033 9.53033C6.32322 9.23744 6.32322 8.76256 6.03033 8.46967L3.31066 5.75H13C13.4142 5.75 13.75 5.41421 13.75 5C13.75 4.58579 13.4142 4.25 13 4.25H3.31066L6.03033 1.53033Z"
            fill="#F5FBFC"
        />
    </Svg>
);
export default BackArrowSvg;

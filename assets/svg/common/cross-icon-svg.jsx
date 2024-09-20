import * as React from "react";
import { moderateScale } from "react-native-size-matters";
import Svg, { Path } from "react-native-svg";
const CrossIconSvg = (props) => (
    <Svg
        width={moderateScale(36)}
        height={moderateScale(36)}
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M12.6966 23.3034L23.3032 12.6968"
            stroke="white"
            strokeWidth={1.5}
            strokeLinecap="round"
        />
        <Path
            d="M12.6966 12.6966L23.3032 23.3032"
            stroke="white"
            strokeWidth={1.5}
            strokeLinecap="round"
        />
    </Svg>
);
export default CrossIconSvg;

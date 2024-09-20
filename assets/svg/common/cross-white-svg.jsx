import * as React from "react";
import { moderateScale } from "react-native-size-matters";
import Svg, { Rect, Path } from "react-native-svg";
const CrossWhiteSVg = (props) => (
    <Svg
        width={moderateScale(28)}
        height={moderateScale(28)}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Rect width={24} height={24} rx={12} fill="white" />
        <Rect x={4.5} y={4.5} width={15} height={15} rx={7.5} stroke="#AF1A13" />
        <Path
            d="M14.7107 9.99613C14.9059 9.80087 14.9059 9.48429 14.7107 9.28902C14.5154 9.09376 14.1988 9.09376 14.0036 9.28902L12.0001 11.2925L9.99663 9.28903C9.80136 9.09376 9.48478 9.09376 9.28952 9.28902C9.09426 9.48429 9.09426 9.80087 9.28952 9.99613L11.293 11.9996L9.28951 14.0031C9.09425 14.1983 9.09425 14.5149 9.28951 14.7102C9.48478 14.9054 9.80136 14.9054 9.99662 14.7102L12.0001 12.7067L14.0036 14.7102C14.1988 14.9054 14.5154 14.9054 14.7107 14.7102C14.9059 14.5149 14.9059 14.1983 14.7107 14.0031L12.7072 11.9996L14.7107 9.99613Z"
            fill="#AF1A13"
        />
    </Svg>
);
export default CrossWhiteSVg;

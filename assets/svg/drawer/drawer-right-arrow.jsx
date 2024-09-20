import * as React from "react";
import { moderateScale } from "react-native-size-matters";
import Svg, { Rect, Path } from "react-native-svg";
const DrawerRightArrowSvg = (props) => (
    <Svg
        width={moderateScale(42)}
        height={moderateScale(42)}
        viewBox="0 0 42 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Rect x={1.5} y={1.5} width={39} height={39} rx={19.5} fill="#F5FBFC" />
        <Rect
            x={1.5}
            y={1.5}
            width={39}
            height={39}
            rx={19.5}
            stroke="#008282"
            strokeWidth={3}
        />
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.9697 16.4697C19.2626 16.1768 19.7374 16.1768 20.0303 16.4697L24.0303 20.4697C24.3232 20.7626 24.3232 21.2374 24.0303 21.5303L20.0303 25.5303C19.7374 25.8232 19.2626 25.8232 18.9697 25.5303C18.6768 25.2374 18.6768 24.7626 18.9697 24.4697L22.4393 21L18.9697 17.5303C18.6768 17.2374 18.6768 16.7626 18.9697 16.4697Z"
            fill="#008282"
        />
    </Svg>
);
export default DrawerRightArrowSvg;

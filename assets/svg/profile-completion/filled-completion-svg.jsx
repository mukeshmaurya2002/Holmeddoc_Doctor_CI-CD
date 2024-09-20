import * as React from "react";
import { moderateScale } from "react-native-size-matters";
import Svg, { Path } from "react-native-svg";
const FilledCompletionSvg = (props) => (
    <Svg
        width={moderateScale(78)}
        height={moderateScale(6)}
        viewBox="0 0 84 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M0 3C0 1.34315 1.34315 0 3 0H84V6H3C1.34314 6 0 4.65685 0 3Z"
            fill="#16B364"
        />
    </Svg>
);
export default FilledCompletionSvg;

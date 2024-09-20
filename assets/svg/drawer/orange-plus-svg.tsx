import * as React from "react";
import { moderateScale } from "react-native-size-matters";
import Svg, { Path, SvgProps } from "react-native-svg";
interface OrangePlusSvgProps extends SvgProps { fillColor?: string }
const OrangePlusSvg = ({ fillColor = "#CF8B15", ...props }: OrangePlusSvgProps) => (
    <Svg
        width={moderateScale(24)}
        height={moderateScale(24)}
        viewBox="0 0 24 24"
        fill="none"
        {...props}
    >
        <Path
            d="M12 17V7"
            stroke={fillColor}
            strokeWidth={1.5}
            strokeLinecap="round"
        />
        <Path
            d="M7 12L17 12"
            stroke={fillColor}
            strokeWidth={1.5}
            strokeLinecap="round"
        />
    </Svg>
);
export default OrangePlusSvg;

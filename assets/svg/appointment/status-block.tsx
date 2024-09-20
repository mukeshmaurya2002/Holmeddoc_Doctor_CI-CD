import * as React from "react";
import { moderateScale } from "react-native-size-matters";
import Svg, { Rect, SvgProps } from "react-native-svg";
interface StatusBlockProps extends SvgProps { bgColor: string }
const StatusBlock = ({ bgColor = "#EDFCF2", ...props }: StatusBlockProps) => (
    <Svg
        width={moderateScale(14)}
        height={moderateScale(14)}
        viewBox="0 0 14 14"
        fill="none"
        {...props}
    >
        <Rect width={14} height={14} rx={4} fill={bgColor} />
    </Svg>
);
export default StatusBlock;

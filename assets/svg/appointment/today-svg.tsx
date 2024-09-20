import * as React from "react";
import { moderateScale } from "react-native-size-matters";
import Svg, { G, Path, Defs, ClipPath, Rect, SvgProps } from "react-native-svg";
const TodaySvg = (props: SvgProps) => (
    <Svg
        width={moderateScale(14)}
        height={moderateScale(14)}
        viewBox="0 0 14 14"
        fill="none"
        {...props}
    >
        <G clipPath="url(#clip0_2858_971)">
            <Path
                d="M0.875 0.4375C1.11662 0.4375 1.3125 0.633375 1.3125 0.875V13.125C1.3125 13.3666 1.11662 13.5625 0.875 13.5625C0.633375 13.5625 0.4375 13.3666 0.4375 13.125V0.875C0.4375 0.633375 0.633375 0.4375 0.875 0.4375Z"
                fill="black"
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.28125 2.625C3.28125 1.41688 4.26064 0.4375 5.46875 0.4375H8.53125C9.73938 0.4375 10.7188 1.41688 10.7188 2.625V11.375C10.7188 12.5831 9.73938 13.5625 8.53125 13.5625H5.46875C4.26064 13.5625 3.28125 12.5831 3.28125 11.375V2.625ZM5.46875 1.3125C4.74388 1.3125 4.15625 1.90013 4.15625 2.625V11.375C4.15625 12.0999 4.74388 12.6875 5.46875 12.6875H8.53125C9.25612 12.6875 9.84375 12.0999 9.84375 11.375V2.625C9.84375 1.90013 9.25612 1.3125 8.53125 1.3125H5.46875Z"
                fill="black"
            />
            <Path
                d="M13.5625 0.875C13.5625 0.633375 13.3666 0.4375 13.125 0.4375C12.8834 0.4375 12.6875 0.633375 12.6875 0.875V13.125C12.6875 13.3666 12.8834 13.5625 13.125 13.5625C13.3666 13.5625 13.5625 13.3666 13.5625 13.125V0.875Z"
                fill="black"
            />
        </G>
        <Defs>
            <ClipPath id="clip0_2858_971">
                <Rect width={14} height={14} fill="white" />
            </ClipPath>
        </Defs>
    </Svg>
);
export default TodaySvg;

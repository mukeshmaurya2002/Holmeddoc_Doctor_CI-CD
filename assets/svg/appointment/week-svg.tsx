import * as React from "react";
import { moderateScale } from "react-native-size-matters";
import Svg, { G, Path, Defs, ClipPath, Rect, SvgProps } from "react-native-svg";
const WeekSvg = (props: SvgProps) => (
    <Svg
        width={moderateScale(14)}
        height={moderateScale(14)}
        viewBox="0 0 14 14"
        fill="none"
        {...props}
    >
        <G clipPath="url(#clip0_2584_4728)">
            <Path
                d="M0.4375 13.125C0.4375 12.8834 0.633375 12.6875 0.875 12.6875H13.125C13.3666 12.6875 13.5625 12.8834 13.5625 13.125C13.5625 13.3666 13.3666 13.5625 13.125 13.5625H0.875C0.633375 13.5625 0.4375 13.3666 0.4375 13.125Z"
                fill="#1E1E1E"
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.625 10.7188C1.41688 10.7188 0.4375 9.73936 0.4375 8.53125L0.4375 5.46875C0.4375 4.26062 1.41688 3.28125 2.625 3.28125L11.375 3.28125C12.5831 3.28125 13.5625 4.26062 13.5625 5.46875V8.53125C13.5625 9.73936 12.5831 10.7188 11.375 10.7188H2.625ZM1.3125 8.53125C1.3125 9.25612 1.90013 9.84375 2.625 9.84375H11.375C12.0999 9.84375 12.6875 9.25612 12.6875 8.53125V5.46875C12.6875 4.74388 12.0999 4.15625 11.375 4.15625L2.625 4.15625C1.90013 4.15625 1.3125 4.74388 1.3125 5.46875L1.3125 8.53125Z"
                fill="#1E1E1E"
            />
            <Path
                d="M0.875 0.4375C0.633375 0.4375 0.4375 0.633369 0.4375 0.875C0.4375 1.11663 0.633375 1.3125 0.875 1.3125L13.125 1.3125C13.3666 1.3125 13.5625 1.11663 13.5625 0.875C13.5625 0.633369 13.3666 0.4375 13.125 0.4375L0.875 0.4375Z"
                fill="#1E1E1E"
            />
        </G>
        <Defs>
            <ClipPath id="clip0_2584_4728">
                <Rect
                    width={14}
                    height={14}
                    fill="white"
                    transform="matrix(0 -1 1 0 0 14)"
                />
            </ClipPath>
        </Defs>
    </Svg>
);
export default WeekSvg;

import * as React from "react";
import Svg, { Rect, Defs, LinearGradient, Stop, SvgProps } from "react-native-svg";
import { SCREEN_WIDTH } from "../../../src/constants/responsive";
import { moderateScale } from "react-native-size-matters";
const LinearGradientSvg = (props: SvgProps) => (
    <Svg
        width={SCREEN_WIDTH}
        height={moderateScale(33)}
        viewBox="0 0 328 32"
        fill="none"
        {...props}
    >
        <Rect width={328} height={32} fill="url(#paint0_linear_208_3246)" />
        <Rect width={328} height={32} fill="url(#paint1_linear_208_3246)" />
        <Rect width={328} height={32} fill="url(#paint2_linear_208_3246)" />
        <Defs>
            <LinearGradient
                id="paint0_linear_208_3246"
                x1={0}
                y1={0}
                x2={328}
                y2={32}
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="#CF8B15" />
                <Stop offset={1} stopColor="#FFD700" />
            </LinearGradient>
            <LinearGradient
                id="paint1_linear_208_3246"
                x1={0}
                y1={16}
                x2={328}
                y2={16}
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="#CF8B15" />
                <Stop offset={1} stopColor="#F49A00" />
            </LinearGradient>
            <LinearGradient
                id="paint2_linear_208_3246"
                x1={0}
                y1={16}
                x2={328}
                y2={16}
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="#820062" />
                <Stop offset={1} stopColor="#D939B2" />
            </LinearGradient>
        </Defs>
    </Svg>
);
export default LinearGradientSvg;
import * as React from "react";
import { moderateScale } from "react-native-size-matters";
import Svg, { Path, Defs, RadialGradient, Stop } from "react-native-svg";
const FailureModalSvg = (props) => (
    <Svg
        width={moderateScale(128)}
        height={moderateScale(128)}
        viewBox="0 0 128 128"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M103.585 103.584C125.446 81.7221 125.446 46.2769 103.585 24.415C81.7226 2.55305 46.2774 2.55304 24.4155 24.415C2.55353 46.2769 2.55353 81.7221 24.4155 103.584C46.2774 125.446 81.7226 125.446 103.585 103.584Z"
            fill="#FF4141"
            fillOpacity={0.15}
        />
        <Path
            d="M96 96C113.673 78.3269 113.673 49.6731 96 32C78.3269 14.3269 49.6731 14.3269 32 32C14.3269 49.6731 14.3269 78.3269 32 96C49.6731 113.673 78.3269 113.673 96 96Z"
            fill="#FF4141"
        />
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M63.9193 97.8378C45.2315 97.8378 30.0001 82.665 30.0001 63.9187C30.0001 45.2309 45.2315 29.9995 63.9193 29.9995C82.6656 29.9995 97.8384 45.2309 97.8384 63.9187C97.8384 82.665 82.6656 97.8378 63.9193 97.8378Z"
            fill="url(#paint0_linear_784_777)"
        />
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M61.2232 73.3894L73.3869 61.2258L82.9817 51.6307C84.7997 49.8127 84.7997 46.8387 82.9817 45.0207C81.1637 43.2027 78.1896 43.2027 76.3717 45.0207L66.7766 54.6155L54.613 66.7791L45.0182 76.3742C43.2002 78.1922 43.2002 81.1662 45.0182 82.9842C46.8361 84.8022 49.8102 84.8022 51.6282 82.9842L61.2232 73.3894Z"
            fill="white"
        />
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M73.3869 66.7791L61.2232 54.6155L51.6282 45.0207C49.8102 43.2027 46.8361 43.2027 45.0182 45.0207C43.2002 46.8387 43.2002 49.8127 45.0182 51.6307L54.613 61.2258L66.7766 73.3894L76.3717 82.9842C78.1896 84.8022 81.1637 84.8022 82.9817 82.9842C84.7997 81.1662 84.7997 78.1922 82.9817 76.3742L73.3869 66.7791Z"
            fill="white"
        />
        <Defs>
            <LinearGradient
                id="paint0_linear_784_777"
                x1={63.9193}
                y1={29.9995}
                x2={63.9193}
                y2={97.8378}
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="#F42D2D" />
                <Stop offset={1} stopColor="#DF1818" />
            </LinearGradient>
        </Defs>
    </Svg>
);
export default FailureModalSvg;

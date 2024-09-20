import * as React from "react";
import { moderateScale } from "react-native-size-matters";
import Svg, { Rect, G, Path, Defs, ClipPath } from "react-native-svg";
const ProfileRejectedSvg = (props) => (
    <Svg
        width={moderateScale(36)}
        height={moderateScale(36)}
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Rect width={36} height={36} rx={18} fill="white" />
        <G clipPath="url(#clip0_2642_4352)">
            <Path
                d="M18 29.25C24.2132 29.25 29.25 24.2132 29.25 18C29.25 11.7868 24.2132 6.75 18 6.75C11.7868 6.75 6.75 11.7868 6.75 18C6.75 24.2132 11.7868 29.25 18 29.25Z"
                fill="#FC685B"
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18 9.9585C18.7734 9.9585 19.4062 10.5913 19.4062 11.3647V19.3399C19.4062 20.1134 18.7734 20.7462 18 20.7462C17.2266 20.7462 16.5938 20.1134 16.5938 19.3399V11.3647C16.5938 10.5913 17.2266 9.9585 18 9.9585Z"
                fill="#EFF4F7"
            />
            <Path
                d="M18 26.0414C18.7767 26.0414 19.4062 25.4118 19.4062 24.6351C19.4062 23.8585 18.7767 23.2289 18 23.2289C17.2233 23.2289 16.5938 23.8585 16.5938 24.6351C16.5938 25.4118 17.2233 26.0414 18 26.0414Z"
                fill="#EFF4F7"
            />
        </G>
        <Defs>
            <ClipPath id="clip0_2642_4352">
                <Rect width={24} height={24} fill="white" transform="translate(6 6)" />
            </ClipPath>
        </Defs>
    </Svg>
);
export default ProfileRejectedSvg;

import * as React from "react";
import { moderateScale } from "react-native-size-matters";
import Svg, { G, Rect, Path, Defs, SvgProps } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const WhiteBackArrow = (props: SvgProps) => (
    <Svg
        width={moderateScale(44)}
        height={moderateScale(44)}
        viewBox="0 0 44 44"
        fill="none"
        {...props}
    >
        <G filter="url(#filter0_b_258_2082)">
            <Rect width={44} height={44} rx={22} fill="#F5FBFC" fillOpacity={0.15} />
            <Path
                d="M20.8686 17.9522C21.2103 17.6105 21.2103 17.0565 20.8686 16.7148C20.5269 16.3731 19.9729 16.3731 19.6312 16.7148L14.9645 21.3814C14.7937 21.5523 14.7083 21.7762 14.7083 22.0002C14.7083 22.1188 14.7319 22.2319 14.7746 22.3351C14.8173 22.4383 14.8806 22.535 14.9645 22.6189L19.6312 27.2855C19.9729 27.6273 20.5269 27.6273 20.8686 27.2855C21.2103 26.9438 21.2103 26.3898 20.8686 26.0481L17.6957 22.8752H28.9999C29.4832 22.8752 29.8749 22.4834 29.8749 22.0002C29.8749 21.5169 29.4832 21.1252 28.9999 21.1252H17.6957L20.8686 17.9522Z"
                fill="#F5FBFC"
            />
        </G>
        <Defs></Defs>
    </Svg>
);
export default WhiteBackArrow;

import * as React from "react";
import { moderateScale } from "react-native-size-matters";
import Svg, { Rect, Defs, Pattern, Use, Image, SvgProps } from "react-native-svg";

const ConnectSvg = (props: SvgProps) => (
    <Svg
        width={moderateScale(34)}
        height={moderateScale(34)}
        viewBox="0 0 34 34"
        fill="none"
        {...props}
    >
        <Rect width={34} height={34} fill="url(#pattern0_208_4471)" />
        <Defs>
            <Pattern
                id="pattern0_208_4471"
                patternContentUnits="objectBoundingBox"
                width={1}
                height={1}
            >
                <Use xlinkHref="#image0_208_4471" transform="scale(0.00909091)" />
            </Pattern>
            <Image
                id="image0_208_4471"
                width={110}
                height={110}
                xlinkHref="data:image/png;base64,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"
            />
        </Defs>
    </Svg>
);
export default ConnectSvg;

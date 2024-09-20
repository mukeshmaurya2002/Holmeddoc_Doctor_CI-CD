import * as React from "react";
import { moderateScale } from "react-native-size-matters";
import Svg, { Rect, Defs, Pattern, Use, Image, SvgProps } from "react-native-svg";
const ConnectEyeSvg = (props: SvgProps) => (
    <Svg
        width={moderateScale(46)}
        height={moderateScale(34)}
        viewBox="0 0 46 34"
        fill="none"
        {...props}
    >
        <Rect width={45.6768} height={34} fill="url(#pattern0_208_4477)" />
        <Defs>
            <Pattern
                id="pattern0_208_4477"
                patternContentUnits="objectBoundingBox"
                width={1}
                height={1}
            >
                <Use
                    xlinkHref="#image0_208_4477"
                    transform="scale(0.0075188 0.010101)"
                />
            </Pattern>
            <Image
                id="image0_208_4477"
                width={133}
                height={99}
                xlinkHref="data:image/png;base64,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"
            />
        </Defs>
    </Svg>
);
export default ConnectEyeSvg;

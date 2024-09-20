import * as React from "react";
import { moderateScale } from "react-native-size-matters";
import Svg, { Line, Defs, LinearGradient, Stop, SvgProps } from "react-native-svg";

interface MiniBottomBorderProps extends SvgProps {
  startColor?: string;
  endColor?: string;
}

const MiniBottomBorder = ({ startColor = "#02A39D", endColor = "#008282", ...props }: MiniBottomBorderProps) => (
  <Svg
    width={moderateScale(28)}
    height={moderateScale(1)}
    viewBox="0 0 28 1"
    fill="none"
    {...props}
  >
    <Line
      x1={4.30686e-8}
      y1={0.5}
      x2={28}
      y2={0.500002}
      stroke={`url(#paint0_linear_208_4459)`}
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_208_4459"
        x1={14}
        y1={1}
        x2={14}
        y2={2}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor={startColor} />
        <Stop offset={1} stopColor={endColor} />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default MiniBottomBorder;

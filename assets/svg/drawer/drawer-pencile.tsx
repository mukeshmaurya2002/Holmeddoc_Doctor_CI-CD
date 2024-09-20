import * as React from "react";
import { moderateScale } from "react-native-size-matters";
import Svg, { Rect, Path, SvgProps } from "react-native-svg";

const DrawerPencil = (props: SvgProps) => (
  <Svg
    width={moderateScale(38)}
    height={moderateScale(38)}
    viewBox="0 0 38 38"
    fill="none"
    {...props}
  >
    <Rect x={1.5} y={1.5} width={35} height={35} rx={17.5} fill="#F5FBFC" />
    <Rect
      x={1.5}
      y={1.5}
      width={35}
      height={35}
      rx={17.5}
      stroke="#008282"
      strokeWidth={3}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.0914 13.313C20.9976 13.2192 20.8704 13.1665 20.7378 13.1665C20.6052 13.1665 20.478 13.2192 20.3843 13.313L14.256 19.4412C14.1932 19.504 14.1482 19.5824 14.1258 19.6684L13.4591 22.2207C13.4143 22.3924 13.4638 22.5751 13.5893 22.7006C13.7149 22.8261 13.8975 22.8757 14.0693 22.8308L16.6215 22.1642C16.7075 22.1417 16.7859 22.0968 16.8487 22.0339L22.977 15.9057C23.1722 15.7104 23.1722 15.3938 22.977 15.1986L21.0914 13.313ZM15.059 20.0524L20.7378 14.3736L21.9163 15.5521L16.2375 21.2309L14.6424 21.6476L15.059 20.0524Z"
      fill="#008282"
    />
    <Path
      d="M13.6667 23.8332C13.3906 23.8332 13.1667 24.057 13.1667 24.3332C13.1667 24.6093 13.3906 24.8332 13.6667 24.8332H23.6667C23.9429 24.8332 24.1667 24.6093 24.1667 24.3332C24.1667 24.057 23.9429 23.8332 23.6667 23.8332H13.6667Z"
      fill="#008282"
    />
  </Svg>
);
export default DrawerPencil;

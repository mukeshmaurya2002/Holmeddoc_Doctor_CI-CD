import * as React from "react";
import { moderateScale } from "react-native-size-matters";
import Svg, { Rect, Path } from "react-native-svg";
const DrawerOpenSvg = (props) => (
    <Svg
        width={moderateScale(24)}
        height={moderateScale(24)}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Rect width={24} height={24} rx={12} fill="white" />
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.1666 11.9998C17.1666 11.7237 16.9427 11.4998 16.6666 11.4998H7.33325C7.05711 11.4998 6.83325 11.7237 6.83325 11.9998C6.83325 12.276 7.05711 12.4998 7.33325 12.4998H16.6666C16.9427 12.4998 17.1666 12.276 17.1666 11.9998Z"
            fill="#008282"
        />
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.1666 8.6665C17.1666 8.39036 16.9427 8.1665 16.6666 8.1665H15.9999H11.3333C11.0571 8.1665 10.8333 8.39036 10.8333 8.6665C10.8333 8.94265 11.0571 9.1665 11.3333 9.1665H16.6666C16.9427 9.1665 17.1666 8.94265 17.1666 8.6665Z"
            fill="#008282"
        />
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.1666 15.3332C13.1666 15.057 12.9427 14.8332 12.6666 14.8332H7.33325C7.05711 14.8332 6.83325 15.057 6.83325 15.3332C6.83325 15.6093 7.05711 15.8332 7.33325 15.8332H12.6666C12.9427 15.8332 13.1666 15.6093 13.1666 15.3332Z"
            fill="#008282"
        />
    </Svg>
);
export default DrawerOpenSvg;

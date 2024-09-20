import * as React from "react";
import { moderateScale } from "react-native-size-matters";
import Svg, { Rect, Path } from "react-native-svg";
const EditPencilIconSvg = (props) => (
    <Svg
        width={moderateScale(38)}
        height={moderateScale(38)}
        viewBox="0 0 38 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Rect x={1.5} y={1.5} width={35} height={35} rx={17.5} fill="#F5FBFC" />
        <Rect
            x={1.5}
            y={1.5}
            width={35}
            height={35}
            rx={17.5}
            stroke="white"
            strokeWidth={3}
        />
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21.0912 13.3132C20.9975 13.2194 20.8703 13.1667 20.7377 13.1667C20.6051 13.1667 20.4779 13.2194 20.3841 13.3132L14.2559 19.4415C14.1931 19.5043 14.1481 19.5827 14.1257 19.6686L13.459 22.2209C13.4141 22.3927 13.4637 22.5753 13.5892 22.7008C13.7147 22.8264 13.8974 22.8759 14.0691 22.8311L16.6214 22.1644C16.7074 22.1419 16.7858 22.097 16.8486 22.0342L22.9769 15.9059C23.1721 15.7107 23.1721 15.3941 22.9769 15.1988L21.0912 13.3132ZM15.0589 20.0526L20.7377 14.3739L21.9162 15.5524L16.2374 21.2311L14.6422 21.6478L15.0589 20.0526Z"
            fill="#008282"
        />
        <Path
            d="M13.6666 23.8334C13.3905 23.8334 13.1666 24.0573 13.1666 24.3334C13.1666 24.6096 13.3905 24.8334 13.6666 24.8334H23.6666C23.9428 24.8334 24.1666 24.6096 24.1666 24.3334C24.1666 24.0573 23.9428 23.8334 23.6666 23.8334H13.6666Z"
            fill="#008282"
        />
    </Svg>
);
export default EditPencilIconSvg;

import * as React from "react";
import { moderateScale } from "react-native-size-matters";
import Svg, { Path } from "react-native-svg";
const TimeSlotSvg = (props) => (
    <Svg
        width={moderateScale(20)}
        height={moderateScale(20)}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M10.625 5.83325C10.625 5.48807 10.3452 5.20825 10 5.20825C9.65486 5.20825 9.37504 5.48807 9.37504 5.83325V9.99992C9.37504 10.2154 9.48605 10.4157 9.66879 10.5299L12.1688 12.0924C12.4615 12.2754 12.8471 12.1864 13.03 11.8937C13.213 11.601 13.124 11.2154 12.8313 11.0324L10.625 9.65351V5.83325Z"
            fill="#CF8B15"
        />
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 2.70825C5.97296 2.70825 2.70837 5.97284 2.70837 9.99992C2.70837 14.027 5.97296 17.2916 10 17.2916C14.0271 17.2916 17.2917 14.027 17.2917 9.99992C17.2917 5.97284 14.0271 2.70825 10 2.70825ZM3.95837 9.99992C3.95837 6.6632 6.66332 3.95825 10 3.95825C13.3368 3.95825 16.0417 6.6632 16.0417 9.99992C16.0417 13.3366 13.3368 16.0416 10 16.0416C6.66332 16.0416 3.95837 13.3366 3.95837 9.99992Z"
            fill="#CF8B15"
        />
    </Svg>
);
export default TimeSlotSvg;

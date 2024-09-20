import * as React from "react";
import { moderateScale } from "react-native-size-matters";
import Svg, { Rect, Path, SvgProps } from "react-native-svg";
const FilterSvg = (props: SvgProps) => (
    <Svg
        width={moderateScale(44)}
        height={moderateScale(44)}
        viewBox="0 0 44 44"
        fill="none"
        {...props}
    >
        <Rect width={44} height={44} rx={12} fill="white" />
        <Rect width={44} height={44} rx={12} fill="#CF8B15" fillOpacity={0.1} />
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M27.9859 15.4238C24.0077 14.9792 19.9924 14.9792 16.0142 15.4238C15.745 15.4539 15.6154 15.7695 15.7857 15.9801L19.3028 20.3277C20.5627 21.8851 21.25 23.8276 21.25 25.8308V28.7201L22.75 29.8201V25.8308C22.75 23.8276 23.4374 21.8851 24.6973 20.3277L28.2143 15.9801C28.3846 15.7695 28.255 15.4539 27.9859 15.4238ZM15.8476 13.9331C19.9365 13.4761 24.0636 13.4761 28.1525 13.9331C29.5994 14.0948 30.2962 15.7916 29.3805 16.9235L25.8635 21.2711C24.8195 22.5615 24.25 24.171 24.25 25.8308V31.3001C24.25 31.5827 24.0911 31.8414 23.839 31.9691C23.5869 32.0969 23.2844 32.0721 23.0565 31.9049L20.0565 29.7049C19.8638 29.5636 19.75 29.339 19.75 29.1001V25.8308C19.75 24.171 19.1805 22.5615 18.1366 21.2711L14.6196 16.9235C13.7039 15.7916 14.4007 14.0948 15.8476 13.9331Z"
            fill="#CF8B15"
        />
    </Svg>
);
export default FilterSvg;

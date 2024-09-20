import * as React from "react";
import { moderateScale } from "react-native-size-matters";
import Svg, { Rect, Path } from "react-native-svg";
const GreenTickIndicationSvg = (props) => (
    <Svg
        width={moderateScale(14)}
        height={moderateScale(14)}
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Rect width={14} height={14} rx={7} fill="white" />
        <Path
            d="M6.99984 1.16675C3.7915 1.16675 1.1665 3.79175 1.1665 7.00008C1.1665 10.2084 3.7915 12.8334 6.99984 12.8334C10.2082 12.8334 12.8332 10.2084 12.8332 7.00008C12.8332 3.79175 10.2082 1.16675 6.99984 1.16675ZM9.50817 5.60008L6.82484 9.10008C6.70817 9.21675 6.53317 9.33342 6.35817 9.33342C6.18317 9.33342 6.00817 9.27508 5.8915 9.10008L4.4915 7.29175C4.3165 7.05841 4.3165 6.65008 4.60817 6.47508C4.89984 6.30008 5.24984 6.30008 5.42484 6.59175L6.35817 7.81675L8.57484 4.90008C8.74984 4.66675 9.15817 4.60841 9.3915 4.78341C9.68317 4.95841 9.68317 5.30842 9.50817 5.60008Z"
            fill="#02BC7D"
        />
    </Svg>
);
export default GreenTickIndicationSvg;

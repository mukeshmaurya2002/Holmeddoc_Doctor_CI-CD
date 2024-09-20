import { TextStyle } from "react-native/types";

import { moderateScale } from "react-native-size-matters";
import { Colors, Typography } from "../constants";

interface FontStyleProp<T = TextStyle> {
  notoSansRegular10: T;
  notoSansRegular12: T;
  notoSansRegular14: T;
  notoSansRegular16: T;
  notoSansRegular18: T;
  notoSansRegular20: T;
  notoSansMedium10: T;
  notoSansMedium12: T;
  notoSansMedium14: T;
  notoSansMedium16: T;
  notoSansMedium18: T;
  notoSansMedium20: T;
  notoSansSemiBold10: T;
  notoSansSemiBold12: T;
  notoSansSemiBold14: T;
  notoSansSemiBold16: T;
  notoSansSemiBold18: T;
  notoSansSemiBold20: T;
  notoSansBold10: T;
  notoSansBold12: T;
  notoSansBold14: T;
  notoSansBold16: T;
  notoSansBold18: T;
  notoSansBold20: T;

  _notoSansBold: (
    fontFamily: typeof Typography.notoSansBold,
    fontSize: number,
    color: string,
  ) => T;
  _notoSansSemiBold: (
    fontFamily: typeof Typography.notoSansSemiBold,
    fontSize: number,
    color: string,
  ) => T;

  _notoSansRegular: (
    fontFamily: typeof Typography.notoSansRegular,
    fontSize: number,
    color: string,
  ) => T;

  _notoSansMedium: (
    fontFamily: typeof Typography.notoSansMedium,
    fontSize: number,
    color: string,
  ) => T;

}

const fontStyles: FontStyleProp = {
  _notoSansBold: (fontFamily, fontSize, color) => {
    return {
      fontFamily,
      fontSize,
      color,
    };
  },
  _notoSansMedium: (fontFamily, fontSize, color) => {
    return {
      fontFamily,
      fontSize,
      color,
    };
  },
  _notoSansRegular: (fontFamily, fontSize, color) => {
    return {
      fontFamily,
      fontSize,
      color,
    };
  },
  _notoSansSemiBold: (fontFamily, fontSize, color) => {
    return {
      fontFamily,
      fontSize,
      color,
    };
  },

  notoSansBold10: {
    fontFamily: Typography.notoSansBold,
    fontSize: moderateScale(10),
    color: Colors.offBlack,
  },
  notoSansBold12: {
    fontFamily: Typography.notoSansBold,
    fontSize: moderateScale(12),
    color: Colors.offBlack,
  },
  notoSansBold14: {
    fontFamily: Typography.notoSansBold,
    fontSize: moderateScale(14),
    color: Colors.offBlack,
  },
  notoSansBold16: {
    fontFamily: Typography.notoSansBold,
    fontSize: moderateScale(16),
    color: Colors.offBlack,
  },
  notoSansBold18: {
    fontFamily: Typography.notoSansBold,
    fontSize: moderateScale(18),
    color: Colors.offBlack,
  },
  notoSansBold20: {
    fontFamily: Typography.notoSansBold,
    fontSize: moderateScale(20),
    color: Colors.offBlack,
  },


  notoSansMedium10: {
    fontFamily: Typography.notoSansMedium,
    fontSize: moderateScale(10),
    color: Colors.offBlack,
  },

  notoSansMedium12: {
    fontFamily: Typography.notoSansMedium,
    fontSize: moderateScale(12),
    color: Colors.offBlack,
  },

  notoSansMedium14: {
    fontFamily: Typography.notoSansMedium,
    fontSize: moderateScale(14),
    color: Colors.offBlack,
  },

  notoSansMedium16: {
    fontFamily: Typography.notoSansMedium,
    fontSize: moderateScale(16),
    color: Colors.offBlack,
  },

  notoSansMedium18: {
    fontFamily: Typography.notoSansMedium,
    fontSize: moderateScale(18),
    color: Colors.offBlack,
  },

  notoSansMedium20: {
    fontFamily: Typography.notoSansMedium,
    fontSize: moderateScale(20),
    color: Colors.offBlack,
  },

  notoSansRegular10: {
    fontFamily: Typography.notoSansRegular,
    fontSize: moderateScale(10),
    color: Colors.offBlack,
  },

  notoSansRegular12: {
    fontFamily: Typography.notoSansRegular,
    fontSize: moderateScale(12),
    color: Colors.offBlack,
  },

  notoSansRegular14: {
    fontFamily: Typography.notoSansRegular,
    fontSize: moderateScale(14),
    color: Colors.offBlack,
  },

  notoSansRegular16: {
    fontFamily: Typography.notoSansRegular,
    fontSize: moderateScale(16),
    color: Colors.offBlack,
  },

  notoSansRegular18: {
    fontFamily: Typography.notoSansRegular,
    fontSize: moderateScale(18),
    color: Colors.offBlack,
  },

  notoSansRegular20: {
    fontFamily: Typography.notoSansRegular,
    fontSize: moderateScale(20),
    color: Colors.offBlack,
  },

  notoSansSemiBold10: {
    fontFamily: Typography.notoSansSemiBold,
    fontSize: moderateScale(10),
    color: Colors.offBlack,
  },

  notoSansSemiBold12: {
    fontFamily: Typography.notoSansSemiBold,
    fontSize: moderateScale(12),
    color: Colors.offBlack,
  },

  notoSansSemiBold14: {
    fontFamily: Typography.notoSansSemiBold,
    fontSize: moderateScale(14),
    color: Colors.offBlack,
  },

  notoSansSemiBold16: {
    fontFamily: Typography.notoSansSemiBold,
    fontSize: moderateScale(16),
    color: Colors.offBlack,
  },

  notoSansSemiBold18: {
    fontFamily: Typography.notoSansSemiBold,
    fontSize: moderateScale(18),
    color: Colors.offBlack,
  },

  notoSansSemiBold20: {
    fontFamily: Typography.notoSansSemiBold,
    fontSize: moderateScale(20),
    color: Colors.offBlack,
  },

};

export default fontStyles;

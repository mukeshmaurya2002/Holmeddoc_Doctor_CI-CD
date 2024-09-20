import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { commonStyles, fontStyles } from "../../../../styles";
import { helpers } from "../../../../utility/helpers";
import { SCREEN_WIDTH } from "../../../../constants/responsive";
import { Colors } from "../../../../constants";


const styles = StyleSheet.create({
    fieldTxt: {
        ...fontStyles.notoSansSemiBold14,
        paddingVertical: moderateScale(6),
        paddingLeft: moderateScale(4),
    },
    fieldTxt2: {
        ...fontStyles.notoSansSemiBold12,
        paddingVertical: moderateScale(6),
        paddingLeft: moderateScale(4),
    },
    dropdownTest: {
        height: helpers.isIos ? moderateScale(46) : moderateScale(50),
        width: SCREEN_WIDTH * 0.9,
        backgroundColor: Colors.offBlack5,
        paddingHorizontal: moderateScale(8),
        borderRadius: moderateScale(4),
        borderWidth: moderateScale(0.8),
        borderColor: Colors.offBlack5
    },
    placeHolder: { ...fontStyles.notoSansRegular14, marginLeft: moderateScale(6) },
    btnContainer: {
        ...commonStyles.RowJSBAC,
        borderTopColor: Colors.offBlack16,
        borderTopWidth: moderateScale(1),
        paddingVertical: moderateScale(10),
        columnGap: moderateScale(5),
        paddingHorizontal: moderateScale(10),
    },
});

export { styles }

import React from "react";
import { Colors } from "../constants";
import { commonStyles, fontStyles } from "../styles";
import { moderateScale } from "react-native-size-matters";
import { navigationHook } from "../hooks/navigation.hook";
import { Pressable, Text, TouchableOpacity, View, ViewStyle, } from "react-native";
import { BackArrowSvg } from "../../assets/svg";

interface TopBarProps {
    label: string | undefined;
    headText?: string;
    navigation?: any;
    rootStyle?: ViewStyle;
    icon?: React.ElementType;
    onPress?: () => void,
    hideBackArrow?: boolean;
}
const Header = (props: TopBarProps) => {
    const { hideBackArrow = false, label, headText, icon, rootStyle, onPress } = props;
    const { navigateBack } = navigationHook();
    return (
        <View style={[{ paddingHorizontal: moderateScale(16), paddingTop: moderateScale(25), backgroundColor: Colors.primaryColor, columnGap: moderateScale(16) }, rootStyle,]}>
            <Pressable style={[commonStyles.RowJFSAC, { columnGap: moderateScale(10) }]} onPress={() => onPress ? onPress?.() : navigateBack()}>
                {
                    !hideBackArrow && <TouchableOpacity activeOpacity={0.9} >
                        {!!icon &&
                            icon ?
                            React.createElement(icon)
                            :
                            <BackArrowSvg />
                        }
                    </TouchableOpacity>
                }
                <Text style={[fontStyles.notoSansSemiBold16, { color: Colors.offWhite }]}>
                    {label}
                </Text>
            </Pressable>
            <View style={{ paddingLeft: moderateScale(23) }}>
                <Text style={[fontStyles.notoSansMedium12, { color: Colors.offWhite, opacity: 0.75 }]}>
                    {headText}
                </Text>
            </View>
        </View >
    );
};

export default Header;


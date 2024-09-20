import { Pressable, View, ViewStyle } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'
import { Colors } from '../../constants'
import { CheckBoxTick } from '../../../assets/svg'


interface CheckboxProp {
    onPress?: () => void
    selected?: boolean;
    checkBoxStyle?: ViewStyle;
    disable?: boolean;
    selectedColor?: string;
}
const CustomCheckBox = (props: CheckboxProp) => {
    const { onPress, selected, checkBoxStyle, disable, selectedColor=Colors.secondaryColor } = props
    return (
        <Pressable
            onPress={onPress}
            disabled={disable}
            style={[{ paddingHorizontal: moderateScale(5) }]} >
            <View
                style={[
                    {
                        width: moderateScale(14),
                        height: moderateScale(14),
                        position: "relative",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: selected
                            ? selectedColor
                            : "transparent",
                        borderWidth: moderateScale(1),
                        borderRadius: moderateScale(3),
                        borderColor: Colors.offBlack + "50",
                    },
                    checkBoxStyle,
                ]}
            >
                {selected && <CheckBoxTick width={moderateScale(10)} height={moderateScale(10)} />}
            </View>
        </Pressable>
    )
}

export default CustomCheckBox;
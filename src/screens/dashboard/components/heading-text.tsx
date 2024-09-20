import { Pressable, StyleSheet, Text, View, ViewStyle } from 'react-native'
import React from 'react'
import { commonStyles, fontStyles } from '../../../styles'
import { moderateScale } from 'react-native-size-matters'
import { Colors } from '../../../constants';
import { navigationHook } from '../../../hooks/navigation.hook';

interface HeadingProps { leftTxt: string; rightTxt?: string; midLineStyle?: ViewStyle; viewAllPress?: () => void }

const HeadingText = (props: HeadingProps) => {
    const { leftTxt, rightTxt, midLineStyle, viewAllPress } = props
    const { navigateTo } = navigationHook()
    return (
        <View style={[commonStyles.RowJSBAC, { paddingHorizontal: moderateScale(20), paddingTop: moderateScale(14) }]}>
            <Text style={[fontStyles.notoSansSemiBold16]}>{leftTxt}</Text>
            <View style={[styles.MidLine, midLineStyle]} />
            <Pressable onPress={viewAllPress}>
                <Text style={[fontStyles.notoSansSemiBold12, { color: Colors.secondaryColor }]}>{rightTxt ?? 'View All'}</Text>
            </Pressable>
        </View>
    )
}

export default HeadingText

const styles = StyleSheet.create({
    MidLine: { borderTopWidth: moderateScale(1), borderTopColor: Colors.borderColor, width: '25%', opacity: 1 },
})
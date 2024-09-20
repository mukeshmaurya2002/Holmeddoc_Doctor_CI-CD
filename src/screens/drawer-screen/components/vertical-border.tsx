import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'
import { Colors } from '../../../constants'
import { SCREEN_HEIGHT } from '../../../constants/responsive';


interface VerticalBorderProps {
    Height?: number;
}

const VerticalBorder = (props: VerticalBorderProps) => {
    const { Height = SCREEN_HEIGHT * 0.12 } = props;
    return (
        <View style={{ borderLeftWidth: moderateScale(0.5), borderRightColor: Colors.offBlack5, height: Height,opacity:0.5 }} />
    )
}

export default React.memo(VerticalBorder)

const styles = StyleSheet.create({})
import { StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'
import { commonStyles, fontStyles } from '../../styles'
import { Colors } from '../../constants'
import { moderateScale } from 'react-native-size-matters'

type SplitTextProp = {
    text: string,
    customTextStyle?: any,
    textColor?: string
}
const SplitText = (props: SplitTextProp) => {
    const { text, customTextStyle, textColor } = props
    return (
        <View style={commonStyles.RowJCAC}>
            <View style={styles.borderStyle} />
            <Text style={[fontStyles.notoSansRegular14, customTextStyle, { color: textColor ? textColor : Colors.offBlack75 }]}>{text}</Text>
            <View style={styles.borderStyle} />
        </View>
    )
}

export default memo(SplitText)

const styles = StyleSheet.create({
    borderStyle: {
        borderTopColor: Colors.offBlack5,
        borderTopWidth: moderateScale(1),
        width: '45%',
    }
})
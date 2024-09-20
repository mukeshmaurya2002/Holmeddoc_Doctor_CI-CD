import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { commonStyles, fontStyles } from '../../styles'
import { moderateScale } from 'react-native-size-matters'
import { Colors } from '../../constants'
import TakeSpace from '../take-space/take-space'
import EmptyScreenSvg from '../../../assets/svg/common/empty-screen-svg'

const EmptyScreen = () => {
    return (
        <View style={styles.container}>
            <EmptyScreenSvg />
            <Text
                style={[
                    fontStyles.notoSansSemiBold18,

                ]}
            >
                Oops, No data found
            </Text>

            <TakeSpace space={moderateScale(5)} />
        </View>
    )
}

export default EmptyScreen

const styles = StyleSheet.create({
    container: {
        ...commonStyles._flexOneBg(Colors.offWhite),
        ...commonStyles.centerJCAC,
        gap: moderateScale(20),
        paddingHorizontal: moderateScale(16),
    },
})
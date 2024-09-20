import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { commonStyles, fontStyles } from '../../styles'
import { Colors } from '../../constants'
import { moderateScale } from 'react-native-size-matters'
import TakeSpace from '../take-space/take-space'
import { NoDoctorAvailableSvg } from '../../../assets/svg'

const NoDoctorFoundScreen = () => {
    return (
        <View style={[commonStyles.centerJCAC, { backgroundColor: Colors.offWhite, flex: 1 }]}>
            <NoDoctorAvailableSvg />
            <TakeSpace space={moderateScale(20)} />
            <Text style={fontStyles.notoSansRegular14}>No Doctor Found</Text>
        </View>
    )
}

export default NoDoctorFoundScreen

const styles = StyleSheet.create({})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { commonStyles, fontStyles } from '../../styles'
import { NoAppointmentFoundSvg } from '../../../assets/svg'
import { Colors } from '../../constants'
import TakeSpace from '../take-space/take-space'
import { moderateScale } from 'react-native-size-matters'

const NoAppointementScreen = () => {
    return (
        <View style={[commonStyles.centerJCAC, { backgroundColor: Colors.offWhite, flex: 1 }]}>
            <NoAppointmentFoundSvg />
            <TakeSpace space={moderateScale(20)} />
            <Text style={fontStyles.notoSansRegular14}>No Appointment Found</Text>
        </View>
    )
}

export default NoAppointementScreen

const styles = StyleSheet.create({})
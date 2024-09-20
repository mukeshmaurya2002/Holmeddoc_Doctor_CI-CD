import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'
import { Colors } from '../../constants'

const BorderBottom = () => {
    return (
        <View style={styles.borderBottom} />
    )
}

export default BorderBottom;

const styles = StyleSheet.create({
    borderBottom: {
        borderBottomWidth: moderateScale(1),
        borderBottomColor: Colors.offBlack5,
        paddingVertical: moderateScale(4),
    },
})
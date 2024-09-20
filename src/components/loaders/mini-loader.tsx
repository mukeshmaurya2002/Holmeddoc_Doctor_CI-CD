import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../constants'
import { helpers } from '../../utility/helpers'

const MiniLoader = () => {
    return (
        <ActivityIndicator size={helpers.isTablet ? 'large':"small"} color={Colors.white} />
    )
}

export default MiniLoader

const styles = StyleSheet.create({})
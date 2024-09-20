import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters';
import { Colors } from '../../constants';
import { commonStyles } from '../../styles';

const RadioButton = ({isSelected}:{isSelected: boolean}) => {
    return (
        <View style={{
            height: moderateScale(22),
            width: moderateScale(22),
            borderRadius: moderateScale(11),
            borderWidth: moderateScale(1),
            borderColor: isSelected ? Colors.primaryColor : Colors.offBlack,
            ...commonStyles.centerJCAC,
        }}>
            {isSelected && (
                <View style={{
                    height: moderateScale(12),
                    width: moderateScale(12),
                    borderRadius: moderateScale(6),
                    backgroundColor: Colors.primaryColor,
                }} />
            )}
        </View>
    )
}

export default React.memo(RadioButton)

const styles = StyleSheet.create({})
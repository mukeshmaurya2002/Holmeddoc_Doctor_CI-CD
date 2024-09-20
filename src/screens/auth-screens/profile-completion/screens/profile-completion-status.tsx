import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters';
import { Colors } from '../../../../constants';
import { fontStyles } from '../../../../styles';

interface ProfileCompletionStatusProps {
    icon: React.ElementType;
    title: string;
    description: string;
    status: string;
}
const ProfileCompletionStatus = (props: ProfileCompletionStatusProps) => {
    const { icon, title, description, status } = props;
    console.log(title, description, status)
    return (
        <View style={[styles.mainContainer, {
            backgroundColor: status === 'completed' ? Colors.successFaded : status === 'pending' ? Colors.warningFaded : Colors.dangerFaded
        }]}>
            <View style={{}}>
                {React.createElement(icon)}
            </View>
            <View style={{ rowGap: moderateScale(4), flex: 1 }}>
                <Text style={[fontStyles.notoSansMedium14, { color: status === 'completed' ? Colors.successTextColor : status === 'pending' ? Colors.warningTextColor : Colors.dangerFaded }]}>{title}</Text>
                <Text style={[fontStyles.notoSansRegular12, { color: Colors.offBlack75 }]}>{description}</Text>
            </View>
        </View>
    )
}

export default ProfileCompletionStatus

const styles = StyleSheet.create({
    mainContainer: {
        // flex: 1,
        flexDirection: 'row',
        columnGap: moderateScale(16),
        // alignItems: 'center',
        padding: moderateScale(16),
        borderRadius: moderateScale(8),
    }
})
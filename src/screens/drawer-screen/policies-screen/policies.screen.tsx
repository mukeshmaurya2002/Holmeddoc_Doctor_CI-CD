import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BackArrowSvg, DrawerPoliciesSvg } from '../../../../assets/svg'
import { Header, TakeSpace } from '../../../components'
import { SafeAreaView } from 'react-native-safe-area-context'
import { helpers } from '../../../utility/helpers'
import { Colors } from '../../../constants'
import { moderateScale } from 'react-native-size-matters'
import FieldBox from '../../../components/field-box/field-box'
import { navigationHook } from '../../../hooks/navigation.hook'

const PoliciesScreen = () => {
    const { navigateTo } = navigationHook()
    return (
        <>
            <SafeAreaView style={[{ backgroundColor: Colors.primaryColor }, helpers.isIos && { paddingTop: moderateScale(-38) }]} />
            <Header
                label='Policies'
                headText=''
                icon={BackArrowSvg}
            />
            <View style={{ flex: 1, backgroundColor: Colors.offWhite }}>
                <FieldBox
                    icon={DrawerPoliciesSvg}
                    title='Terms & Conditions'
                    showBottomBorder={true}
                    onPress={() => navigateTo('DrawerScreen', { screen: "TermsAndCondition" })}
                />
                <FieldBox
                    icon={DrawerPoliciesSvg}
                    title='Privacy Policy'
                    showBottomBorder={false}
                    onPress={() => navigateTo('DrawerScreen', { screen: "PrivacyPolicies" })}
                />
            </View>
        </>

    )
}

export default PoliciesScreen

const styles = StyleSheet.create({})
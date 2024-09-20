import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CustomButton, DateInputField, Header, TakeSpace } from '../../../components'
import { BackArrowSvg, BackGroundLine, SearchSvg } from '../../../../assets/svg'
import { Colors } from '../../../constants'
import { helpers } from '../../../utility/helpers'
import { moderateScale } from 'react-native-size-matters'
import NoInternetScreen from '../../../components/no-internet-connection/no-internet-connection'
import InsuranceCard from './insurance-card'
import { commonStyles, fontStyles } from '../../../styles'
import { navigationHook } from '../../../hooks/navigation.hook'

const DrawerInsuranceScreen = () => {
    const { navigateTo } = navigationHook()
    const handleInsuranceAdd = () => {
        navigateTo("DrawerScreen", { screen: 'AddInsuranceScreen' })
    }


    return (
        <>
            <SafeAreaView style={[{ backgroundColor: Colors.primaryColor }, helpers.isIos && { paddingTop: moderateScale(-38) }]} />
            <Header
                label='Insurance'
                headText=''
                icon={BackArrowSvg}
            />
            <View style={{ backgroundColor: Colors.offWhite, paddingVertical: moderateScale(10) }}>
                <DateInputField
                    leftIcon={SearchSvg}
                    placeHolder='Search here'
                    rootStyle={{ width: '92%', alignSelf: 'center' }}
                    pressContStyle={[{ paddingHorizontal: moderateScale(10), borderColor: Colors.offBlack25, opacity: 1 }]}
                />
            </View>
            <View style={{ flex: 1, backgroundColor: Colors.offWhite }}>
                <BackGroundLine />
                <FlatList
                    data={[1, 2]}
                    contentContainerStyle={{}}
                    keyExtractor={(item, index) => index.toString()}
                    ItemSeparatorComponent={() => (<TakeSpace space={moderateScale(4)} />)}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, index }) => {
                        const isLastItem = index === 0
                        return (
                            <InsuranceCard item={item} index={index} isLastItem={isLastItem} />
                        )
                    }}
                />
                <View style={[commonStyles.sbtBtn, {
                    bottom: 0,
                }]}>
                    <CustomButton
                        label={"+  Add Insurance"}
                        btnWidth={'100%'}

                        customTxtStyle={[fontStyles.notoSansSemiBold14, { color: Colors.primaryColor }]}
                        customBtnStyle={[{ alignSelf: 'center' }]}
                        extraCusBtnStyle={[commonStyles.transparentBtn]}
                        extraCusTxtStyle={[{ color: Colors.primaryColor, }]}
                        onPress={handleInsuranceAdd}
                        paddingProp={moderateScale(12, 0.5)}
                    />
                </View>
            </View>

        </>
    )
}

export default DrawerInsuranceScreen

const styles = StyleSheet.create({
    dropdownTest: {
        height: helpers.isIos ? moderateScale(46) : moderateScale(49),
        //width: SCREEN_WIDTH * 0.40,
        backgroundColor: Colors.offBlack5,
        paddingHorizontal: moderateScale(8),
        borderRadius: moderateScale(6), borderWidth: moderateScale(0),
        borderColor: Colors.offBlack5
    },
    fieldTxt: {
        ...fontStyles.notoSansMedium12,
        paddingVertical: moderateScale(6),
        paddingLeft: moderateScale(4),
    },
})
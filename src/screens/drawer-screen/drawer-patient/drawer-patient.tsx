import React from 'react'
import { Colors } from '../../../constants'
import { commonStyles } from '../../../styles'
import { helpers } from '../../../utility/helpers'
import PatientCard from './components/patient-card'
import { moderateScale } from 'react-native-size-matters'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { AppoinmentListingData } from '../../../utility/constant'
import { BackGroundLine, OrangePlusSvg, SearchSvg } from '../../../../assets/svg'
import { CustomButton, DateInputField, Header, TakeSpace } from '../../../components'
import { usePatientHook } from './drawer-patient.hook'


const DrawerPatients = () => {
    const { navigateTo } = usePatientHook();

    return (
        <>
            <SafeAreaView style={[{ backgroundColor: Colors.primaryColor }, helpers.isIos && { paddingTop: moderateScale(-38) }]} />
            <View style={commonStyles._flexOneBg(Colors.bgGreen)}>
                <Header label='Patients' />
                <View style={{ backgroundColor: Colors.offWhite }}>
                    <TakeSpace space={6} />
                    <DateInputField
                        leftIcon={SearchSvg}
                        placeHolder='Search here'
                        rootStyle={{ width: '92%', alignSelf: 'center' }}
                        pressContStyle={[{ paddingHorizontal: moderateScale(10), borderColor: Colors.offBlack5 }]}
                    />
                    <TakeSpace space={6} />
                </View>
                <FlatList
                    data={AppoinmentListingData}
                    showsVerticalScrollIndicator={false}

                    renderItem={({ item, index }) => (<PatientCard index={index} />)}
                />
                <View style={styles.Btn}>
                    <CustomButton
                        showIcon
                        btnWidth={'95%'}
                        label='Add patient'
                        onPress={() => navigateTo('AddPatient')}
                        extraCusBtnStyle={[commonStyles.transparentBtn]}
                        extraCusTxtStyle={[{ color: Colors.primaryColor }]}
                        icon={<OrangePlusSvg fillColor={Colors.primaryColor} />}
                    />
                </View>
            </View>
        </>
    )
}

export default DrawerPatients

const styles = StyleSheet.create({
    Btn: { padding: moderateScale(10), ...commonStyles.centerJCAC, borderTopColor: Colors.borderColor, borderTopWidth: moderateScale(1), backgroundColor: Colors.offWhite }
})
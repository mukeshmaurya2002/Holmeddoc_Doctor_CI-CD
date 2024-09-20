import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { moderateScale } from 'react-native-size-matters'
import { BackArrowSvg } from '../../../../assets/svg'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CustomButton, Header, InputFieldBox, TakeSpace } from '../../../components'
import { Colors } from '../../../constants'
import { helpers } from '../../../utility/helpers'
import { commonStyles, fontStyles } from '../../../styles'
import { Dropdown } from 'react-native-element-dropdown'

const PractiseInfoScreen = () => {
    const [isEditing, setIsEditing] = useState(false)
    const handleEditMode = () => {
        console.log("Edit mode")
        const isEditMode = true
        setIsEditing(isEditMode)
        //api call if edit mode is on
        if (isEditMode) {
            console.log("Api call")
        }
    }
    const [practiseInfoData, setPractiseInfoData] = useState({
        practiseDescription: '',
        clinicAddress: '',
        servingArea: '',
    });
    return (
        <>
            <SafeAreaView style={[{ backgroundColor: Colors.primaryColor }, helpers.isIos && { paddingTop: moderateScale(-38) }]} />
            <Header
                label={isEditing ? 'Edit Practice info' : 'Practice info'}
                headText=''
                icon={BackArrowSvg}
            />
            <ScrollView showsVerticalScrollIndicator={false} style={{ padding: moderateScale(16), rowGap: moderateScale(8) }}>
                <View>
                    <InputFieldBox
                        label="Practice Description"
                        placeHolder="Enter your Practice description"
                        onChangeText={(text) => {
                            setPractiseInfoData({ ...practiseInfoData, practiseDescription: text })
                        }}
                        editable={isEditing}
                        numberOfLines={4}
                        inputValueStyle={fontStyles.notoSansRegular14}

                        isMultiLine={true}
                        // onBlur={handleBlur('practiseDescription')}
                        value={practiseInfoData.practiseDescription}
                    // errorMessage={touched.practiseDescription && errors.practiseDescription ? errors.practiseDescription : ''}
                    />
                </View>
                <View>
                    <InputFieldBox
                        label="Clinic Address"
                        placeHolder="Enter your clinic address"
                        onChangeText={(text) => {
                            setPractiseInfoData({ ...practiseInfoData, clinicAddress: text })
                        }}
                        editable={isEditing}
                        numberOfLines={4}
                        inputValueStyle={fontStyles.notoSansRegular14}
                        // onBlur={handleBlur('clinicAddress')}
                        value={practiseInfoData.clinicAddress}
                    // errorMessage={touched.clinicAddress && errors.clinicAddress ? errors.clinicAddress : ''}
                    />
                </View>
                <View>
                    <InputFieldBox
                        label="Serving Area"
                        editable={isEditing}
                        placeHolder="Enter the area you serve"
                        onChangeText={(text) => {
                            setPractiseInfoData({ ...practiseInfoData, servingArea: text })
                        }}
                        inputValueStyle={fontStyles.notoSansRegular14}

                        // onBlur={handleBlur('servingArea')}
                        value={practiseInfoData.servingArea}
                    // errorMessage={touched.servingArea && errors.servingArea ? errors.servingArea : ''}
                    />
                </View>

                <TakeSpace space={50} />
            </ScrollView>
            <View style={[commonStyles.sbtBtn, {
                bottom: 0,
            }]}>
                <CustomButton
                    label={isEditing ? "Update Changes" : "Edit info"}
                    btnWidth={'100%'}
                    extraCusTxtStyle={[fontStyles.notoSansMedium14, { color: Colors.offWhite }]}
                    disabled={false}
                    onPress={handleEditMode}
                    extraCusBtnStyle={[{ borderRadius: 4 }]}
                    paddingProp={moderateScale(12, 0.5)}
                />
            </View>
        </>
    )
}

export default PractiseInfoScreen

const styles = StyleSheet.create({
    fieldTxt: {
        ...fontStyles.notoSansSemiBold12,
        paddingVertical: moderateScale(6),
        paddingLeft: moderateScale(4),
    },
    dropdownTest: {
        height: helpers.isIos ? moderateScale(46) : moderateScale(50),
        width: "100%",
        backgroundColor: Colors.offBlack5,
        paddingHorizontal: moderateScale(8),
        borderRadius: moderateScale(4),
        borderWidth: moderateScale(0.8),
        borderColor: Colors.offBlack5
    },
    placeHolder: { ...fontStyles.notoSansRegular14, marginLeft: moderateScale(6) },
    btnContainer: {
        ...commonStyles.RowJSBAC,
        borderTopColor: Colors.offBlack5,
        borderTopWidth: moderateScale(1),
        paddingVertical: moderateScale(10),
        columnGap: moderateScale(5),
        paddingHorizontal: moderateScale(10),
    },
})
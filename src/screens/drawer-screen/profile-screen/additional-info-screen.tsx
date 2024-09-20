import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { commonStyles, fontStyles } from '../../../styles'
import { CustomButton, Header, InputFieldBox } from '../../../components'
import { moderateScale } from 'react-native-size-matters'
import { Colors } from '../../../constants'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BackArrowSvg, DropwDownSvgDown } from '../../../../assets/svg'
import { helpers } from '../../../utility/helpers'
import { Dropdown } from 'react-native-element-dropdown'

const AdditionalInfoScreen = () => {
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
    const languageSpokenData = [
        { label: "English", value: "english" },
        { label: "Hindi", value: "hindi" },
        { label: "Punjabi", value: "punjabi" },
    ]
    return (
        <>
            <SafeAreaView style={[{ backgroundColor: Colors.primaryColor }, helpers.isIos && { paddingTop: moderateScale(-38) }]} />
            <Header
                label={isEditing ? 'Edit additional info' : 'Additional info'}
                headText=''
                icon={BackArrowSvg}
            />
            <View style={{ padding: moderateScale(16), rowGap: moderateScale(8) }}>
                <View>

                    <Text style={styles.fieldTxt}>
                        Languages Spoken
                    </Text>
                    <Dropdown
                        style={[styles.dropdownTest]}
                        placeholderStyle={[styles.placeHolder, { color: Colors.offBlack50 }]}
                        selectedTextStyle={[styles.placeHolder]}
                        activeColor={Colors.offBlack25}
                        itemTextStyle={fontStyles.notoSansRegular12}
                        data={languageSpokenData}
                        dropdownPosition='auto'

                        search={false}
                        disable={isEditing ? false : true}
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={"select"}
                        value={""}
                        onChange={(item: any) => {
                            console.log('item', item)
                        }}
                        showsVerticalScrollIndicator={false}
                        flatListProps={{ nestedScrollEnabled: false }}
                        //hide dropdown arrow
                        renderRightIcon={() => !isEditing ? null : <DropwDownSvgDown />}
                    // iconStyle={{ tintColor: Colors.secondaryColor }}
                    />
                </View>


            </View>
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

export default AdditionalInfoScreen

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
})
import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { moderateScale } from 'react-native-size-matters';
import { commonStyles, fontStyles } from '../../../styles';
import { Colors } from '../../../constants';
import { helpers } from '../../../utility/helpers';
import { Dropdown } from 'react-native-element-dropdown';
import { CustomButton, Header } from '../../../components';
import { BackArrowSvg, KnobDownArrowSvg } from '../../../../assets/svg';
import { SafeAreaView } from 'react-native-safe-area-context';

const ProfessionalInfoScreen = () => {
    const institutionNameData = [
        { label: "Brd Medical College", value: "brd" },
        { label: "Vardhman Medical College", value: "vardhman" },
        { label: "AIIMS", value: "aiims" },
    ]
    const medicalEducationData = [
        { label: "MBBS", value: "mbbs" },
        { label: "MD", value: "md" },
        { label: "MS", value: "ms" },
    ]
    const medicalSpecialityData = [
        { label: "Cardiologist", value: "cardiologist" },
        { label: "Dentist", value: "dentist" },
        { label: "Orthopedic", value: "orthopedic" },
    ]
    const medicalCondTreatedData = [
        { label: "Heart", value: "heart" },
        { label: "Teeth", value: "teeth" },
        { label: "Bones", value: "bones" },
    ]
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
    return (
        <>
            <SafeAreaView style={[{ backgroundColor: Colors.primaryColor }, helpers.isIos && { paddingTop: moderateScale(-38) }]} />

            <Header
                label={isEditing ? 'Edit professional info' : 'Professional info'}
                headText=''
                icon={BackArrowSvg}
            />
            <View style={{ padding: moderateScale(16), rowGap: moderateScale(8) }}>
                <View>
                    <Text style={styles.fieldTxt}>
                        Institute
                    </Text>
                    <Dropdown
                        style={[styles.dropdownTest]}
                        placeholderStyle={[styles.placeHolder, { color: Colors.offBlack50 }]}
                        selectedTextStyle={[styles.placeHolder]}
                        activeColor={Colors.offBlack25}
                        itemTextStyle={fontStyles.notoSansRegular12}
                        data={institutionNameData}
                        dropdownPosition='auto'
                        disable={isEditing ? false : true}
                        search={false}
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={"select"}
                        value={""}
                        onChange={item => {
                            console.log('item', item)
                        }}
                        showsVerticalScrollIndicator={false}
                        flatListProps={{ nestedScrollEnabled: false }}
                        renderRightIcon={() => !isEditing ? null : <KnobDownArrowSvg />}

                    />
                    {/* {touched.institutionName && errors.institutionName && (<ErrorHelper errorMsg={errors.institutionName} />)} */}

                </View>
                <View>
                    <Text style={styles.fieldTxt}>
                        Medical Education
                    </Text>
                    <Dropdown
                        style={[styles.dropdownTest]}
                        placeholderStyle={[styles.placeHolder, { color: Colors.offBlack50 }]}
                        selectedTextStyle={[styles.placeHolder]}
                        activeColor={Colors.offBlack25}
                        itemTextStyle={fontStyles.notoSansRegular12}
                        data={medicalEducationData}
                        dropdownPosition='auto'
                        search={false}
                        disable={isEditing ? false : true}
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={"select"}
                        value={""}
                        onChange={item => {
                            console.log('item', item)
                        }
                        }
                        showsVerticalScrollIndicator={false}
                        flatListProps={{ nestedScrollEnabled: false }}
                        renderRightIcon={() => !isEditing ? null : <KnobDownArrowSvg />}

                    />
                    {/* {touched.medicalEducation && errors.medicalEducation && (<ErrorHelper errorMsg={errors.medicalEducation} />)} */}

                </View>


                <View>
                    <Text style={styles.fieldTxt}>
                        Medical Speciality
                    </Text>
                    <Dropdown
                        style={[styles.dropdownTest]}
                        placeholderStyle={[styles.placeHolder, { color: Colors.offBlack50 }]}
                        selectedTextStyle={[styles.placeHolder]}
                        activeColor={Colors.offBlack25}
                        itemTextStyle={fontStyles.notoSansRegular12}
                        data={medicalSpecialityData}
                        dropdownPosition='auto'
                        search={false}
                        disable={isEditing ? false : true}
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={"select"}
                        value={""}
                        onChange={item => {
                            console.log('item', item)
                        }}
                        showsVerticalScrollIndicator={false}
                        flatListProps={{ nestedScrollEnabled: false }}
                        renderRightIcon={() => !isEditing ? null : <KnobDownArrowSvg />}

                    />
                    {/* {touched.medicalSpeciality && errors.medicalSpeciality && (<ErrorHelper errorMsg={errors.medicalSpeciality} />)} */}
                </View>

                <View>
                    <Text style={styles.fieldTxt}>
                        Medical Conditions Treated
                    </Text>
                    <Dropdown
                        style={[styles.dropdownTest]}
                        placeholderStyle={[styles.placeHolder, { color: Colors.offBlack50 }]}
                        selectedTextStyle={[styles.placeHolder]}
                        activeColor={Colors.offBlack25}
                        itemTextStyle={fontStyles.notoSansRegular12}
                        data={medicalCondTreatedData}
                        dropdownPosition='auto'
                        search={false}
                        maxHeight={300}
                        disable={isEditing ? false : true}
                        labelField="label"
                        valueField="value"
                        placeholder={"select"}
                        value={"select"}
                        onChange={(item: any) => {
                            console.log('item', item)
                        }}
                        showsVerticalScrollIndicator={false}
                        flatListProps={{ nestedScrollEnabled: false }}
                        renderRightIcon={() => !isEditing ? null : <KnobDownArrowSvg />}

                    />
                    {/* {touched.medicalCondTreated && errors.medicalCondTreated && (<ErrorHelper errorMsg={errors.medicalCondTreated} />)} */}
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

export default ProfessionalInfoScreen

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
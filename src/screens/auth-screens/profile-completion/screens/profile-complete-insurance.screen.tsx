import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../../../constants'
import { CustomButton, Header, InputFieldBox, TakeSpace, ToggleButton } from '../../../../components'
import { BackArrowSvg } from '../../../../../assets/svg'
import { SafeAreaView } from 'react-native-safe-area-context'
import { helpers } from '../../../../utility/helpers'
import { moderateScale } from 'react-native-size-matters'
import { commonStyles, fontStyles } from '../../../../styles'
import { Formik } from 'formik'
import { validate } from '../../../../utility/validation'

const ProfileCompleteInsuranceScreen = () => {
    const [Type, setType] = React.useState('Yes');

    const handleToggle = (e: string) => { (e === Type) ? null : setType(e) };
    const initialValues = {
        acceptInsurance: Type,
        companyList: '',
    };
    const insuranceValidate = validate.profileInsuranceValidate();
    const handleInsuranceSubmit = (values: any) => {
        console.log(values)
    };

    const HeadingTitle = React.memo(({ label }: { label: string }) => {
        return (
            <>
                <TakeSpace space={6} />
                <Text style={fontStyles.notoSansSemiBold12}>{label}</Text>
                <TakeSpace space={6} />
            </>
        );
    });

    return (
        <>
            <SafeAreaView style={[{ backgroundColor: Colors.primaryColor }, helpers.isIos && { paddingTop: moderateScale(-38) }]} />
            <View style={styles.container} >
                <Header
                    label='Insurance'
                    headText=''
                    icon={BackArrowSvg}
                />

                <Formik initialValues={initialValues} validationSchema={insuranceValidate} onSubmit={handleInsuranceSubmit} >
                    {({ values, handleChange, handleBlur, errors, touched, setFieldTouched }) => (
                        <>
                            <View style={styles.secondaryContainer}>
                                <HeadingTitle label='Accept insurance' />
                                <ToggleButton
                                    options={['Yes', 'No']}
                                    onToggle={handleToggle}
                                    textStyle={fontStyles.notoSansMedium12}
                                    containerStyle={{ height: moderateScale(50) }}
                                />
                                <TakeSpace space={10} />
                                <InputFieldBox
                                    label="Company list"
                                    placeHolder="Enter the location of your clinic"
                                    keyBoardType="default"
                                    value={values.companyList}
                                    inputValueStyle={fontStyles.notoSansRegular14}
                                    onChangeText={(text) => {
                                        setFieldTouched('companyList', true);
                                        handleChange('companyList')(text);
                                    }}
                                    onBlur={handleBlur('companyList')}

                                    errorMessage={touched.companyList && errors.companyList ? errors.companyList : ''}
                                />
                            </View>
                            <View style={[commonStyles.sbtBtn, { bottom: 0, }]}>
                                <CustomButton
                                    label={"Submit"}
                                    btnWidth={'100%'}
                                    extraCusTxtStyle={[fontStyles.notoSansMedium14, { color: Colors.offWhite }]}
                                    // disabled={!isValid}
                                    // onPress={handleSubmit}
                                    extraCusBtnStyle={[{ borderRadius: moderateScale(4) }]}
                                    paddingProp={moderateScale(12, 0.5)}
                                />
                            </View>
                        </>
                    )}
                </Formik>
            </View>
        </>
    )
}

export default ProfileCompleteInsuranceScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.offWhite
    },
    secondaryContainer: {
        padding: moderateScale(16)
    }
})
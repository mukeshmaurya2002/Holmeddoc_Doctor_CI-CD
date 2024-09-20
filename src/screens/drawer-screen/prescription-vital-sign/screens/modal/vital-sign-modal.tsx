
import React from 'react'
import { Formik } from 'formik';
import { Colors } from '../../../../../constants';
import { StyleSheet, Text, View } from 'react-native'
import { moderateScale } from 'react-native-size-matters';
import { validate } from '../../../../../utility/validation';
import { commonStyles, fontStyles } from '../../../../../styles';
import { DrawerPrescription } from '../../../../../../assets/svg';
import { CustomButton, InputFieldBox, TakeSpace } from '../../../../../components';

interface VitalSignModalProps {
    closeModal: () => void
}

const VitalSignModal = (props: VitalSignModalProps) => {
    const { closeModal } = props;
    return (
        <View>
            <TakeSpace space={moderateScale(8)} />
            <View style={[commonStyles.RowJFSAC, { columnGap: moderateScale(10) }]}>
                <DrawerPrescription />
                <Text style={[fontStyles.notoSansSemiBold18]}>Vital signs</Text>
            </View>
            <Formik
                initialValues={
                    {
                        pulse: 10,
                        weight: 60,
                        height: 5.5,
                        temperature: 98,
                        RespRate: 10,
                        pain: 20,
                        SPO2: 10
                    }
                }
                validationSchema={validate.vitalSignValidation()}
                onSubmit={closeModal}
                children={({ values, handleChange, touched, errors, handleBlur, handleSubmit, isValid }) => {
                    console.log('values', values)
                    return (
                        <View style={{ rowGap: moderateScale(10) }}>
                            <TakeSpace space={6} />
                            <InputFieldBox
                                mandatory
                                keyBoardType='numeric'
                                value={values.pulse}
                                defaultValue='10'

                                onBlur={handleBlur('pulse')}
                                rootStyle={{ width: '100%' }}
                                placeHolder='Enter your pulse'
                                label='Pulse (Heart beats/ min)'
                                onChangeText={handleChange('pulse')}
                            // errorMessage={touched.pulse && errors.pulse ? errors.pulse : ''}
                            />
                            <View style={commonStyles.RowJSBAC}>
                                <View style={{ width: '48.2%' }}>
                                    <InputFieldBox
                                        mandatory
                                        label='Weight (kg)'
                                        placeHolder='Enter your weight'
                                        value={values.weight}
                                        defaultValue='60'
                                        onChangeText={handleChange('weight')}
                                        onBlur={handleBlur('weight')}
                                    //errorMessage={touched.weight && errors.weight ? errors.weight : ''}
                                    />
                                </View>
                                <View style={{ width: '48.2%' }}>
                                    <InputFieldBox
                                        mandatory
                                        label='Height (in)'
                                        placeHolder='Enter your height'
                                        value={values.height}
                                        defaultValue='5.5'
                                        onChangeText={handleChange('height')}
                                        onBlur={handleBlur('height')}
                                    //errorMessage={touched.height && errors.height ? errors.height : ''}
                                    />
                                </View>
                            </View>
                            <View style={commonStyles.RowJSBAC}>
                                <View style={{ width: '48.2%' }}>
                                    <InputFieldBox
                                        mandatory
                                        label='Temperature (C)'
                                        placeHolder='Temperature %'
                                        value={values.temperature}
                                        defaultValue='98'
                                        onChangeText={handleChange('temperature')}
                                        onBlur={handleBlur('temperature')}
                                    //errorMessage={touched.temperature && errors.temperature ? errors.temperature : ''}
                                    />
                                </View>
                                <View style={{ width: '48.2%' }}>
                                    <InputFieldBox
                                        mandatory
                                        label='Resp rate (Breath/ min)'
                                        placeHolder='Enter resp rate'
                                        value={values.RespRate}
                                        defaultValue='10'
                                        onChangeText={handleChange('RespRate')}
                                        onBlur={handleBlur('RespRate')}
                                    // errorMessage={touched.RespRate && errors.RespRate ? errors.RespRate : ''}
                                    />
                                </View>
                            </View>
                            <View style={commonStyles.RowJSBAC}>
                                <View style={{ width: '48.2%' }}>
                                    <InputFieldBox
                                        mandatory
                                        label='Pain'
                                        placeHolder='Enter your pain level'
                                        value={values.pain}
                                        defaultValue='20'
                                        onChangeText={handleChange('pain')}
                                        onBlur={handleBlur('pain')}
                                    //errorMessage={touched.pain && errors.pain ? errors.pain : ''}
                                    />
                                </View>
                                <View style={{ width: '48.2%' }}>
                                    <InputFieldBox
                                        mandatory
                                        label='SPO2'
                                        placeHolder='Enter your SPO2'
                                        value={values.SPO2}
                                        defaultValue='10'
                                        onChangeText={handleChange('SPO2')}
                                        onBlur={handleBlur('SPO2')}
                                    //errorMessage={touched.SPO2 && errors.SPO2 ? errors.SPO2 : ''}
                                    />
                                </View>
                            </View>
                            {/* <TakeSpace space={moderateScale(0)} /> */}
                            <View style={styles.sbtBtns}>
                                <CustomButton
                                    label="No, go back"
                                    extraCusBtnStyle={[{ width: "49%", backgroundColor: Colors.offBlack5 }]}
                                    extraCusTxtStyle={[{ color: Colors.offBlack }]}
                                    onPress={closeModal}
                                />
                                <CustomButton label="Add" extraCusBtnStyle={[{ width: "49%" }]} onPress={handleSubmit}
                                />
                            </View>
                            {/* <TakeSpace space={moderateScale(2)} /> */}
                        </View>
                    )
                }}
            />
        </View>
    )
}

export default VitalSignModal;

const styles = StyleSheet.create({
    sbtBtns: {
        ...commonStyles.RowJSBAC, paddingVertical: moderateScale(12), backgroundColor: Colors.offWhite,
        //  borderTopWidth: moderateScale(1), 
        //  borderTopColor: Colors.offBlack25,
        columnGap: 10
    },
})
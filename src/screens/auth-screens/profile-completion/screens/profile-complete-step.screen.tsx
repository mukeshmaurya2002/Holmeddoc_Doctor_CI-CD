import { Formik } from 'formik';
import { styles } from './styles';
import { Colors } from '../../../../constants'
import { helpers } from '../../../../utility/helpers';
import { FlatList } from 'react-native-gesture-handler';
import { Dropdown } from 'react-native-element-dropdown';
import { moderateScale } from 'react-native-size-matters';
import { validate } from '../../../../utility/validation';
import { SafeAreaView } from 'react-native-safe-area-context';
import { commonStyles, fontStyles } from '../../../../styles';
import { BackHandler, Pressable, Text, View } from 'react-native'
import { navigationHook } from '../../../../hooks/navigation.hook';
import React, { Dispatch, SetStateAction, useCallback } from "react";
import DocumentPicker, { types } from 'react-native-document-picker';
import CrossWhiteSVg from '../../../../../assets/svg/common/cross-white-svg';
import { CustomButton, ErrorHelper, Header, InputFieldBox, TakeSpace } from '../../../../components'
import UploadDocuments from '../../../../components/upload-document/upload-document.screen';
import { BackArrowSvg, FilledBar, UnFilledBar, UploadDocSvg } from '../../../../../assets/svg';


type FormData = {
    appointmentMode: string;
    practitionersBio: string;
    consultantRate: number;
    institutionName: string;
    medicalEducation: string;
    medicalSpeciality: string;
    medicalCondTreated: string;
    languageSpoken: string;
    clinicAddress: string;
    servingArea: string;
    additionalClinicAddress: string;
    additionalServingArea: string;
    PractitionerImage: string;
    practiseDescription: string;

}
type PersonalInfoProps = {
    appointmentModeData: { label: string, value: string }[];
    handleSubmit: (values: FormData) => void;
    formData: FormData;
    setFormData: Dispatch<SetStateAction<FormData>>;
};

const PersonalInfo: React.FC<PersonalInfoProps> = React.memo(({ appointmentModeData, handleSubmit, formData, setFormData }) => {
    return (
        <Formik
            initialValues={formData}
            validationSchema={validate.profileCompletionPersonalInfo()}
            onSubmit={handleSubmit}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched, setFieldValue, isValid }) => (
                <View style={{ rowGap: moderateScale(15) }}>
                    <View>
                        <Text style={styles.fieldTxt}>Personal information</Text>
                        <TakeSpace space={moderateScale(2)} />
                        <View style={[commonStyles.RowJSBAC, { gap: moderateScale(8) }]}>
                            <FilledBar width={moderateScale(72)} />
                            <UnFilledBar width={moderateScale(72)} />
                            <UnFilledBar width={moderateScale(72)} />
                            <UnFilledBar width={moderateScale(72)} />
                        </View>
                    </View>
                    <View>
                        <Text style={{
                            ...fontStyles.notoSansSemiBold12,
                            paddingVertical: moderateScale(6),
                            paddingLeft: moderateScale(4),
                        }}>
                            Appointment mode
                        </Text>
                        <Dropdown
                            style={[styles.dropdownTest]}
                            placeholderStyle={[styles.placeHolder, { color: Colors.offBlack50 }]}
                            selectedTextStyle={[styles.placeHolder]}
                            activeColor={Colors.offBlack25}
                            itemTextStyle={fontStyles.notoSansRegular12}
                            data={appointmentModeData}
                            dropdownPosition='auto'
                            search={false}
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={"Select appointment mode"}
                            value={values.appointmentMode}
                            onChange={item => {
                                setFieldValue('appointmentMode', item.value);
                                setFormData({ ...values, appointmentMode: item.value });
                            }}
                            showsVerticalScrollIndicator={false}
                            flatListProps={{ nestedScrollEnabled: false }}
                            iconStyle={{ tintColor: Colors.secondaryColor }}

                        />
                        {touched.appointmentMode && errors.appointmentMode && (<ErrorHelper errorMsg={errors.appointmentMode} />)}

                    </View>
                    <View>
                        <InputFieldBox
                            label="Practitioners Bio"
                            inputValueStyle={fontStyles.notoSansRegular14}
                            placeHolder="Enter what describes you"
                            onChangeText={(text) => {
                                handleChange('practitionersBio')(text);
                                setFormData({ ...values, practitionersBio: text });
                            }}

                            numberOfLines={4}
                            onBlur={handleBlur('practitionersBio')}
                            value={values.practitionersBio}
                            errorMessage={touched.practitionersBio && errors.practitionersBio ? errors.practitionersBio : ''}
                        />

                    </View>
                    <View>
                        <InputFieldBox
                            label="Consultation Rates"
                            placeHolder="Enter your consultation rates"
                            onChangeText={(text) => {
                                handleChange('consultantRate')(text);
                                setFormData({ ...values, consultantRate: text });
                            }}
                            showDollar={true}
                            inputValueStyle={fontStyles.notoSansRegular14}
                            keyBoardType='number-pad'
                            onBlur={handleBlur('consultantRate')}
                            value={values.consultantRate}
                            errorMessage={touched.consultantRate && errors.consultantRate ? errors.consultantRate : ''}
                        />
                    </View>
                </View>
            )}
        </Formik>
    );
});
type professionalInfoProps = {
    institutionNameData: { label: string, value: string }[];
    medicalEducationData: { label: string, value: string }[];
    medicalSpecialityData: { label: string, value: string }[];
    medicalCondTreatedData: { label: string, value: string }[];
    handleSubmit: (values: FormData) => void;
    formData: FormData;
    setFormData: Dispatch<SetStateAction<FormData>>;

}

const ProfessionalInfo: React.FC<professionalInfoProps> = React.memo(({ institutionNameData, medicalEducationData, medicalSpecialityData, medicalCondTreatedData, handleSubmit, formData, setFormData }) => {
    return (
        <Formik
            initialValues={formData}
            validationSchema={validate.profileCompletionProfessionalInfo()}
            onSubmit={handleSubmit}
        >
            {({ values, errors, touched, setFieldValue }) => (
                <View style={{ rowGap: moderateScale(15) }}>
                    <View>
                        <Text style={styles.fieldTxt}>Professional information</Text>
                        <TakeSpace space={moderateScale(2)} />

                        <View style={commonStyles.RowJSBAC}>
                            <FilledBar width={moderateScale(72)} />
                            <FilledBar width={moderateScale(72)} />
                            <UnFilledBar width={moderateScale(72)} />
                            <UnFilledBar width={moderateScale(72)} />
                        </View>
                    </View>
                    <View>
                        <Text style={styles.fieldTxt2}>
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
                            search={false}
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={"Select the institute you attended"}
                            value={values.institutionName}
                            onChange={item => {
                                setFieldValue('institutionName', item.value);
                                setFormData({ ...values, institutionName: item.value });
                            }}
                            showsVerticalScrollIndicator={false}
                            flatListProps={{ nestedScrollEnabled: false }}
                            iconStyle={{ tintColor: Colors.secondaryColor }}
                        />
                        {touched.institutionName && errors.institutionName && (<ErrorHelper errorMsg={errors.institutionName} />)}

                    </View>
                    <View>
                        <Text style={styles.fieldTxt2}>
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
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={"Select your highest medical education"}
                            value={values.medicalEducation}
                            onChange={item => {
                                setFieldValue('medicalEducation', item.value);
                                setFormData({
                                    ...values, medicalEducation: item.value
                                });
                            }
                            }
                            showsVerticalScrollIndicator={false}
                            flatListProps={{ nestedScrollEnabled: false }}
                            iconStyle={{ tintColor: Colors.secondaryColor }}
                        />
                        {touched.medicalEducation && errors.medicalEducation && (<ErrorHelper errorMsg={errors.medicalEducation} />)}

                    </View>


                    <View>
                        <Text style={styles.fieldTxt2}>
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
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={"Select your medical specialities"}
                            value={values.medicalSpeciality}
                            onChange={item => {
                                setFieldValue('medicalSpeciality', item.value);
                                setFormData({ ...values, medicalSpeciality: item.value });
                            }}
                            showsVerticalScrollIndicator={false}
                            flatListProps={{ nestedScrollEnabled: false }}
                            iconStyle={{ tintColor: Colors.secondaryColor }}
                        />
                        {touched.medicalSpeciality && errors.medicalSpeciality && (<ErrorHelper errorMsg={errors.medicalSpeciality} />)}
                    </View>

                    <View>
                        <Text style={styles.fieldTxt2}>
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
                            labelField="label"
                            valueField="value"
                            placeholder={"Select conditions you have treated"}
                            value={values.medicalCondTreated}
                            onChange={item => {
                                setFieldValue('medicalCondTreated', item.value);
                                setFormData({ ...values, medicalCondTreated: item.value });
                            }}
                            showsVerticalScrollIndicator={false}
                            flatListProps={{ nestedScrollEnabled: false }}
                            iconStyle={{ tintColor: Colors.secondaryColor }}
                        />
                        {touched.medicalCondTreated && errors.medicalCondTreated && (<ErrorHelper errorMsg={errors.medicalCondTreated} />)}
                    </View>
                </View>
            )}
        </Formik>
    );
}
);

type practiseDetailsProps = {
    handleSubmit: (values: FormData) => void;
    formData: FormData;
    setFormData: Dispatch<SetStateAction<FormData>>;
}
const PractiseDetails: React.FC<practiseDetailsProps> = React.memo(({ handleSubmit, formData, setFormData }) => {
    return (
        <Formik
            initialValues={formData}
            validationSchema={validate.profileCompletionPractiseDetails()}
            onSubmit={handleSubmit}
        >
            {({ handleChange, handleBlur, values, errors, touched, setFieldValue }) => (
                <View style={{ rowGap: moderateScale(15) }}>
                    <View>
                        <Text style={styles.fieldTxt}>Practice details</Text>
                        <TakeSpace space={moderateScale(2)} />

                        <View style={commonStyles.RowJSBAC}>
                            <FilledBar width={moderateScale(72)} />
                            <FilledBar width={moderateScale(72)} />
                            <FilledBar width={moderateScale(72)} />
                            <UnFilledBar width={moderateScale(72)} />
                        </View>
                    </View>
                    <View>
                        <InputFieldBox
                            label="Practice description"
                            placeHolder="Enter what describes your practice"
                            onChangeText={(text) => {
                                handleChange('practiseDescription')(text);
                                setFormData({ ...values, practiseDescription: text });
                            }}
                            inputValueStyle={fontStyles.notoSansRegular14}
                            numberOfLines={4}
                            onBlur={handleBlur('practiseDescription')}
                            value={values.practiseDescription}
                            errorMessage={touched.practiseDescription && errors.practiseDescription ? errors.practiseDescription : ''}
                        />

                    </View>
                    <View>
                        <InputFieldBox
                            label="Clinic Address"
                            placeHolder="Enter the location of your clinic"
                            onChangeText={(text) => {
                                handleChange('clinicAddress')(text);
                                setFormData({ ...values, clinicAddress: text });
                            }}
                            inputValueStyle={fontStyles.notoSansRegular14}
                            numberOfLines={4}
                            onBlur={handleBlur('clinicAddress')}
                            value={values.clinicAddress}
                            errorMessage={touched.clinicAddress && errors.clinicAddress ? errors.clinicAddress : ''}
                        />
                    </View>
                    <View>
                        <InputFieldBox
                            label="Serving Area"
                            placeHolder="Enter the location of your clinic"
                            onChangeText={(text) => {
                                handleChange('servingArea')(text);
                                setFormData({ ...values, servingArea: text });
                            }}
                            inputValueStyle={fontStyles.notoSansRegular14}
                            onBlur={handleBlur('servingArea')}
                            value={values.servingArea}
                            errorMessage={touched.servingArea && errors.servingArea ? errors.servingArea : ''}
                        />
                    </View>
                </View>
            )}
        </Formik>
    );
});

type additionalInfoProps = {
    handleSubmit: (values: FormData) => void;
    handleDocumentSelection: () => void;
    formData: FormData;
    filePdfResponse: any;
    languageSpokenData: { label: string, value: string }[];
    setFilePdfResponse: any,
    setFormData: Dispatch<SetStateAction<FormData>>;
}
const AdditionalInfo: React.FC<additionalInfoProps> = React.memo(({ languageSpokenData, handleSubmit, formData, setFormData, handleDocumentSelection, filePdfResponse, setFilePdfResponse }) => {
    return (
        <Formik
            initialValues={formData}
            validationSchema={validate.profileCompletionAdditionalInfo()}
            onSubmit={handleSubmit}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched, setFieldValue, isValid }) => (
                <View style={{ rowGap: moderateScale(15) }}>
                    <View>
                        <Text style={styles.fieldTxt}>Additional information</Text>
                        <TakeSpace space={moderateScale(2)} />

                        <View style={commonStyles.RowJSBAC}>
                            <FilledBar width={moderateScale(72)} />
                            <FilledBar width={moderateScale(72)} />
                            <FilledBar width={moderateScale(72)} />
                            <FilledBar width={moderateScale(72)} />
                        </View>
                    </View>
                    <View>
                        <Text style={styles.fieldTxt2}>
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
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={"Select the languages you can speak"}
                            value={values.languageSpoken}
                            onChange={item => {
                                setFieldValue('languageSpoken', item.value);
                                setFormData({ ...values, languageSpoken: item.value });
                            }}
                            showsVerticalScrollIndicator={false}
                            flatListProps={{ nestedScrollEnabled: false }}
                            iconStyle={{ tintColor: Colors.secondaryColor }}
                        />

                    </View>

                    <View>
                        {!!filePdfResponse && <Pressable style={{ position: 'absolute', right: moderateScale(-12), top: moderateScale(28) }} onPress={() => setFilePdfResponse('')}><CrossWhiteSVg /></Pressable>}
                        <UploadDocuments
                            label={"Practitioner’s image"}
                            subText={"Browse in device"}
                            sizeText={"Upload file size 500x500 pixels (1:1) AND Max Size 500 KB"}
                            mandatory={true}
                            labelStyle={fontStyles.notoSansSemiBold12}
                            onPress={handleDocumentSelection}
                            formatText={""}
                            icon={UploadDocSvg}
                            fromPdf={true}
                            pdfName={filePdfResponse?.name}

                        // rootStyle={{ paddingTop: moderateScale(10), }}
                        />
                    </View>
                </View>
            )}
        </Formik>
    );
})



const ProfileCompleteStepScreen = () => {

    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const [filePdfResponse, setFilePdfResponse] = React.useState(null)

    const handleDocumentSelection = useCallback(async () => {
        try {
            const response: any = await DocumentPicker.pick({
                presentationStyle: 'fullScreen',
                type: [types.pdf],
                allowMultiSelection: false,

            });
            if (response[0].size >= 5000000) return
            setFilePdfResponse(response[0]);
        } catch (err) {
            console.warn(err);
        }
    }, []);

    const { navigateBack } = navigationHook()
    const appointmentModeData = [
        { label: 'In Person', value: 'inperson' },
        { label: 'Virtual', value: 'virtual' },

    ]
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
    const languageSpokenData = [
        { label: "English", value: "english" },
        { label: "Hindi", value: "hindi" },
        { label: "Punjabi", value: "punjabi" },
    ]
    const [formData, setFormData] = React.useState<FormData>({
        appointmentMode: '',
        practitionersBio: '',
        consultantRate: 0,
        institutionName: '',
        medicalEducation: '',
        medicalSpeciality: '',
        medicalCondTreated: '',
        languageSpoken: '',
        clinicAddress: '',
        servingArea: '',
        additionalClinicAddress: '',
        additionalServingArea: '',
        PractitionerImage: '',
        practiseDescription: '',
    });

    const handleSubmit = (values: FormData) => {
        console.log(values);
    }
    const getBodyBasedOnIndex = React.useCallback((index: number) => {
        switch (index) {
            case 0:
                return <PersonalInfo
                    appointmentModeData={appointmentModeData}
                    handleSubmit={handleSubmit}
                    formData={formData}
                    setFormData={setFormData}
                />
            case 1:
                return <ProfessionalInfo
                    institutionNameData={institutionNameData}
                    medicalEducationData={medicalEducationData}
                    medicalSpecialityData={medicalSpecialityData}
                    medicalCondTreatedData={medicalCondTreatedData}
                    handleSubmit={handleSubmit}
                    formData={formData}
                    setFormData={setFormData}
                />
            case 2:
                return <PractiseDetails
                    handleSubmit={handleSubmit}
                    formData={formData}
                    setFormData={setFormData}
                />
            case 3:
                return <AdditionalInfo
                    handleSubmit={handleSubmit}
                    languageSpokenData={languageSpokenData}
                    formData={formData}
                    handleDocumentSelection={handleDocumentSelection}
                    setFormData={setFormData}
                    filePdfResponse={filePdfResponse}
                    setFilePdfResponse={setFilePdfResponse}
                />
        }
    }, [formData, handleSubmit, selectedIndex])
    const handleBackPress = () => {
        if (selectedIndex > 0) {
            setSelectedIndex(selectedIndex - 1);
        } else {
            navigateBack();
        }
        return true;
    };
    React.useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackPress);
        return () => backHandler.remove();
    }, [selectedIndex]);
    return (
        <>
            <SafeAreaView style={[{ backgroundColor: Colors.primaryColor }, helpers.isIos && { paddingTop: moderateScale(-38) }]} />
            <View style={{ flex: 1, backgroundColor: Colors.offWhite }} >
                <Header
                    label='Profile'
                    headText=''
                    icon={BackArrowSvg}
                />
                <FlatList
                    data={[1]}
                    renderItem={({ item }) => {
                        return (
                            <View style={{ flex: 1, padding: moderateScale(20) }}>
                                {getBodyBasedOnIndex(selectedIndex)}
                            </View>
                        )
                    }}
                    keyExtractor={(item) => item.toString()}
                />
                <View style={[commonStyles.RowJSB, styles.btnContainer]} >
                    <CustomButton
                        label="Previous"
                        onPress={() => {
                            if (selectedIndex > 0) {
                                setSelectedIndex(selectedIndex - 1)
                            }
                        }}
                        disabled={selectedIndex === 0}
                        extraCusBtnStyle={[{ borderRadius: moderateScale(4), backgroundColor: Colors.offBlack5 }]}
                        extraCusTxtStyle={[fontStyles.notoSansSemiBold14]}
                        btnWidth={'48.5%'}
                    />
                    <CustomButton
                        label={selectedIndex === 3 ? "Submit" : "Next"}
                        onPress={
                            () => {
                                if (selectedIndex < 3) {
                                    setSelectedIndex(selectedIndex + 1)
                                } else {
                                    handleSubmit(formData)
                                }
                            }
                        }
                        disabled={false}
                        extraCusBtnStyle={[{ borderRadius: moderateScale(4), backgroundColor: Colors.primaryColor }]}
                        extraCusTxtStyle={[fontStyles.notoSansMedium14, { color: Colors.offWhite }]}
                        btnWidth={'48.5%'}
                    />
                </View>
                {/* <SafeAreaView style={[{ backgroundColor: Colors.offWhite }]} /> */}
            </View>
        </>
    )
}

export default ProfileCompleteStepScreen

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: Colors.offWhite
//     },
// })
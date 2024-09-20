import React from 'react';
import { Colors } from '../../../constants';
import FastImage from 'react-native-fast-image';
import { VitalSign } from '../../../routes/type';
import StatItem from './components/stat-section';
import { helpers } from '../../../utility/helpers';
import { moderateScale } from 'react-native-size-matters';
import { commonStyles, fontStyles } from '../../../styles';
import VitalSignModal from './screens/modal/vital-sign-modal';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DocumentProps, usePrescriptionHook } from './prescription-vital.hook';
import { FlatList, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { BorderBottom, CustomButton, CustomModal, Header, TakeSpace } from '../../../components';
import { BackArrowSvg, BackGroundLine, BrowseSvg, CLockSvg, OrangePlusSvg, PdfSvg, PrescDeleteSvg, RefreshSvg } from '../../../../assets/svg';
import DeletePopUpModal from '../../../routes/components/delete-popup-modal';



const vitalSignData: VitalSign[] = [
    {
        id: 1,
        label: 'Weight (kg)',
        value: '60',
        lastCheckedDate: 'June 25th 2024',
        statData: [
            { id: 1, day: 'S', key: 'Weight', value: '100%' },
            { id: 2, day: 'M', key: 'Weight', value: '90%' },
            { id: 3, day: 'T', key: 'Weight', value: '80%' },
            { id: 4, day: 'W', key: 'Weight', value: '70%' },
            { id: 5, day: 'T', key: 'Weight', value: '60%' },
            { id: 6, day: 'F', key: 'Weight', value: '50%' },
            { id: 7, day: 'S', key: 'Weight', value: '40%' },
        ],
    },
    {
        id: 2,
        label: 'Height (cm)',
        value: '172',
        lastCheckedDate: 'June 25th 2024',
        statData: [
            { id: 1, day: 'S', key: 'height', value: '100%' },
            { id: 2, day: 'M', key: 'height', value: '90%' },
            { id: 3, day: 'T', key: 'height', value: '80%' },
            { id: 4, day: 'W', key: 'height', value: '70%' },
            { id: 5, day: 'T', key: 'height', value: '60%' },
            { id: 6, day: 'F', key: 'height', value: '50%' },
            { id: 7, day: 'S', key: 'height', value: '40%' },
        ],
    },
    {
        id: 3,
        label: 'Pulse (Heart beats/min)',
        value: '34',
        lastCheckedDate: 'June 25th 2024',
        statData: [
            { id: 1, day: 'S', key: 'pulse', value: '100%' },
            { id: 2, day: 'M', key: 'pulse', value: '90%' },
            { id: 3, day: 'T', key: 'pulse', value: '0%' },
            { id: 4, day: 'W', key: 'pulse', value: '70%' },
            { id: 5, day: 'T', key: 'pulse', value: '0%' },
            { id: 6, day: 'F', key: 'pulse', value: '50%' },
            { id: 7, day: 'S', key: 'pulse', value: '40%' },
        ],
    },
    {
        id: 4,
        label: 'Resp. rate (breathes /min)',
        value: '34',
        lastCheckedDate: 'June 25th 2024',
        statData: [
            { id: 1, day: 'S', key: 'resp', value: '100%' },
            { id: 2, day: 'M', key: 'resp', value: '90%' },
            { id: 3, day: 'T', key: 'resp', value: '0%' },
            { id: 4, day: 'W', key: 'resp', value: '70%' },
            { id: 5, day: 'T', key: 'resp', value: '0%' },
            { id: 6, day: 'F', key: 'resp', value: '50%' },
            { id: 7, day: 'S', key: 'resp', value: '40%' },
        ],
    },
    {
        id: 5,
        label: 'Pain',
        value: '02',
        lastCheckedDate: 'June 25th 2024',
        statData: [
            { id: 1, day: 'S', key: 'pain', value: '100%' },
            { id: 2, day: 'M', key: 'pain', value: '90%' },
            { id: 3, day: 'T', key: 'pain', value: '0%' },
            { id: 4, day: 'W', key: 'pain', value: '70%' },
            { id: 5, day: 'T', key: 'pain', value: '0%' },
            { id: 6, day: 'F', key: 'pain', value: '50%' },
            { id: 7, day: 'S', key: 'pain', value: '40%' },
        ],
    },
    {
        id: 6,
        label: 'SPO2',
        value: '34',
        lastCheckedDate: 'June 25th 2024',
        statData: [
            { id: 1, day: 'S', key: 'SPO2', value: '100%' },
            { id: 2, day: 'M', key: 'SPO2', value: '90%' },
            { id: 3, day: 'T', key: 'SPO2', value: '80%' },
            { id: 4, day: 'W', key: 'SPO2', value: '70%' },
            { id: 5, day: 'T', key: 'SPO2', value: '60%' },
            { id: 6, day: 'F', key: 'SPO2', value: '50%' },
            { id: 7, day: 'S', key: 'SPO2', value: '40%' },
        ],
    },
    {
        id: 7,
        label: 'Blood pressure',
        value: '34',
        lastCheckedDate: 'June 25th 2024',
        statData: [
            { id: 1, day: 'S', key: 'BP', value: '100%' },
            { id: 2, day: 'M', key: 'BP', value: '90%' },
            { id: 3, day: 'T', key: 'BP', value: '80%' },
            { id: 4, day: 'W', key: 'BP', value: '70%' },
            { id: 5, day: 'T', key: 'BP', value: '60%' },
            { id: 6, day: 'F', key: 'BP', value: '50%' },
            { id: 7, day: 'S', key: 'BP', value: '40%' },
        ],
    },
    {
        id: 8,
        label: 'Temperature (C’)',
        value: '32',
        lastCheckedDate: 'June 25th 2024',
        statData: [
            { id: 1, day: 'S', key: 'temp', value: '100%' },
            { id: 2, day: 'M', key: 'temp', value: '20%' },
            { id: 3, day: 'T', key: 'temp', value: '30%' },
            { id: 4, day: 'W', key: 'temp', value: '40%' },
            { id: 5, day: 'T', key: 'temp', value: '50%' },
            { id: 6, day: 'F', key: 'temp', value: '60%' },
            { id: 7, day: 'S', key: 'temp', value: '90%' },
        ],
    },
];

const SectionHeaderTile = React.memo(({ label, onPress, rightLable, Icon }: { label: string, rightLable?: string, onPress?: () => void, Icon?: React.ReactNode }) => (
    <View style={[commonStyles.RowJSBAC, { paddingHorizontal: moderateScale(16) }]}>
        <Text style={fontStyles.notoSansMedium14}>{label}</Text>
        <Pressable onPress={onPress} style={[commonStyles.RowJFSAC, { columnGap: moderateScale(6) }]}>
            {Icon}
            {rightLable &&
                <Text style={[fontStyles.notoSansMedium12, { color: Colors.secondaryColor }]}>{rightLable}</Text>
            }
        </Pressable>
    </View>
));


/*
This screen is used to check the vital stata nd upload the precription for patient referenace 
*/

const DrawerPrescriptionScreen = () => {
    const { onNoteChange, note, selectDocument, picDocuments, deleteDocument, navigateTo, closeVitals, openVitals, openVitalsModal } = usePrescriptionHook();


    const [showDeletePopup, setShowDeletePopup] = React.useState(false);
    const handleDelete = (uri: string) => {
        setShowDeletePopup(false)
        deleteDocument(uri)
    }
    const handleClose = () => {
        setShowDeletePopup(false)
    }
    const renderVitalSign = React.useCallback(({ item, index }: { item: VitalSign, index: number }) => {
        return (
            <TouchableOpacity style={[styles.vitalSignCont, { backgroundColor: Colors.offWhite }]} activeOpacity={0.8} onPress={() => { navigateTo('VitalSigns', { data: vitalSignData, selectedID: item.id }) }}>
                <View style={[commonStyles.RowJSBAC]}>
                    <Text style={fontStyles.notoSansRegular12}>{item.label}</Text>
                    <View style={[commonStyles.RowJFSAC, { columnGap: moderateScale(6), opacity: 0.75 }]}>
                        <CLockSvg />
                        <Text style={[fontStyles.notoSansRegular10, { textAlign: 'center' }]}>{item.lastCheckedDate}</Text>
                    </View>
                </View>
                <View style={[commonStyles.RowJSBAC]}>
                    <Text style={[fontStyles.notoSansSemiBold20, { fontSize: moderateScale(36) }]}>{item.value}</Text>
                    <FlatList
                        numColumns={7}
                        scrollEnabled={false}
                        data={item.statData}
                        renderItem={({ item }) => <StatItem item={item} />}
                        keyExtractor={(item) => item.id.toString()}
                        columnWrapperStyle={{ columnGap: moderateScale(16) }}
                    />
                </View>
            </TouchableOpacity>
        );
    }, [vitalSignData]);

    const renderDocuments = React.useCallback(({ item, index }: { item: DocumentProps, index: number }) => {
        return (
            <View style={[commonStyles.RowJSBAC, { columnGap: moderateScale(10), backgroundColor: Colors.offWhite }]}>
                <View style={[commonStyles.RowJFSAC, { columnGap: moderateScale(10), width: '90%' }]}>
                    {item.type == 'application/pdf' ?
                        <PdfSvg />
                        :
                        item.type == 'image/jpeg' ?
                            <FastImage
                                source={{ uri: item?.uri }}
                                style={styles.documentImg}
                                resizeMode={FastImage.resizeMode.cover}
                            />
                            : null
                    }
                    <Text style={[fontStyles.notoSansMedium12, { flexShrink: 1 }]} numberOfLines={2}>{item.name}</Text>
                </View>
                <Pressable style={{ width: '10%' }} onPress={() => setShowDeletePopup(true)}>
                    <PrescDeleteSvg />
                </Pressable>
            </View>
        )
    }, [picDocuments]);

    const renderPrescriptionData = () => {
        return (
            <View style={{ backgroundColor: Colors.bgGreen, rowGap: moderateScale(8) }}>
                <View style={{ backgroundColor: Colors.offWhite }}>
                    <TakeSpace space={4} />
                    <SectionHeaderTile label='Prescription' Icon={<RefreshSvg />} rightLable='Previous records' onPress={() => { navigateTo('PrescriptionHistory', { data: picDocuments }) }} />
                    <View style={{ padding: moderateScale(16) }}>
                        <Text style={fontStyles.notoSansSemiBold12}>Upload prescription</Text>
                        <TakeSpace space={4} />
                        <Pressable style={styles.browsCont} onPress={selectDocument}>
                            <BrowseSvg />
                            <Text style={[fontStyles.notoSansMedium14, { color: Colors.secondaryColor }]}>Browse in device</Text>
                        </Pressable>
                        <TakeSpace space={4} />
                        <BorderBottom />
                        <TakeSpace space={4} />
                        <FlatList
                            data={picDocuments}
                            ItemSeparatorComponent={() => <TakeSpace space={moderateScale(6)} />}
                            renderItem={renderDocuments}
                        />
                    </View>
                </View>
                <View style={{ backgroundColor: Colors.offWhite }}>
                    <TakeSpace space={moderateScale(3)} />
                    <SectionHeaderTile label='Vital signs' Icon={<OrangePlusSvg />} onPress={openVitalsModal} />
                    <FlatList
                        data={vitalSignData}
                        scrollEnabled={false}
                        renderItem={renderVitalSign}
                        showsVerticalScrollIndicator={false}
                        style={{ padding: moderateScale(10) }}
                        ItemSeparatorComponent={() => <TakeSpace space={4} />}
                        keyExtractor={(item, index) => item.id.toString() || index.toString()}
                    />
                </View>
                <View style={{ padding: moderateScale(16), rowGap: moderateScale(10), backgroundColor: Colors.offWhite }}>
                    <Text style={fontStyles.notoSansSemiBold12}>Additional note</Text>
                    <TextInput
                        placeholder='Please write important note here...'
                        style={styles.noteTxt}
                        placeholderTextColor={Colors.offBlack50}
                        numberOfLines={6}
                        multiline
                        value={note}
                        onChangeText={onNoteChange}
                    />
                </View>
                <TakeSpace space={moderateScale(0, 0.3)} />
            </View>
        );
    };

    return (
        <>
            <SafeAreaView style={[{ backgroundColor: Colors.primaryColor }, helpers.isIos && { paddingTop: moderateScale(-38) }]} />
            <Header label='Prescription & vital signs' headText='' icon={BackArrowSvg} />
            <View style={{ backgroundColor: Colors.offWhite, flex: 1 }}>
                <FlatList
                    data={[1]}
                    bounces={false}
                    renderItem={renderPrescriptionData}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index?.toString()}
                />
                <View style={styles.Btn}>
                    <CustomButton
                        showIcon
                        btnWidth={'95%'}
                        label='Submit'
                        onPress={() => {
                            navigateTo('DrawerPrescriptionScreen')
                        }}
                    />
                </View>
                {
                    showDeletePopup &&
                    <DeletePopUpModal
                        handleDelete={handleClose}
                        handleClose={handleClose}
                    />
                }
                <CustomModal
                    isVisible={openVitals}
                    children={<VitalSignModal closeModal={closeVitals} />}
                    closeModal={closeVitals}
                    rootStyle={{ paddingHorizontal: moderateScale(16) }}
                />
            </View>
        </>
    );
};

export default DrawerPrescriptionScreen;

const styles = StyleSheet.create({
    prescriptionCard: { padding: moderateScale(16), backgroundColor: Colors.offWhite, rowGap: moderateScale(8), },
    vitalSignCont: {
        borderWidth: moderateScale(1),
        borderColor: Colors.borderColor,
        padding: moderateScale(10),
        paddingHorizontal: moderateScale(14),
        borderRadius: moderateScale(6),
        rowGap: moderateScale(16)
    },
    browsCont: {
        borderRadius: moderateScale(8),
        borderStyle: 'dashed',
        padding: moderateScale(16),
        borderWidth: moderateScale(1),
        borderColor: Colors.secondaryColor,
        ...commonStyles.RowJCAC,
        columnGap: moderateScale(6),
    },
    noteTxt: { borderColor: Colors.borderColor, borderWidth: moderateScale(1), borderRadius: moderateScale(4), textAlignVertical: "top", textAlign: "justify", padding: moderateScale(10), color: Colors.offBlack },
    Btn: { padding: moderateScale(10), ...commonStyles.centerJCAC, borderTopColor: Colors.borderColor, borderTopWidth: moderateScale(1), backgroundColor: Colors.offWhite },
    documentImg: { width: moderateScale(36), height: moderateScale(36), borderRadius: moderateScale(4), },
});

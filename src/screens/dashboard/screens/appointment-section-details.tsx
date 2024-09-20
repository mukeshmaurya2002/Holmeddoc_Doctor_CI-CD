import React from 'react';
import { Colors } from '../../../constants';
import { helpers } from '../../../utility/helpers';
import { BackArrowSvg, DrVisitTypeSvg } from '../../../../assets/svg';
import { moderateScale } from 'react-native-size-matters';
import { commonStyles, fontStyles } from '../../../styles';
import { BorderBottom, Header, TakeSpace } from '../../../components';
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

interface dataProps { id: number; patientId: string; name: string; status: string; ApptType: string; timeSlot: string; };

const data = [
    {
        id: 1,
        patientId: 'OTET2023001',
        name: 'Cameroon Hudson',
        status: 'Completed',
        ApptType: 'In-Person',
        timeSlot: '5th July 2024 |10:00 pm'
    },
    {
        id: 2,
        patientId: 'OTET2023001',
        name: 'Cameroon Hudson',
        status: 'Pending',
        ApptType: 'In-Person',
        timeSlot: '5th July 2024 |10:00 pm'
    },
    {
        id: 3,
        patientId: 'OTET2023001',
        name: 'Cameroon Hudson',
        status: 'Cancelled',
        ApptType: 'In-Person',
        timeSlot: '5th July 2024 |10:00 pm'
    },
    {
        id: 4,
        patientId: 'OTET2023001',
        name: 'Cameroon Hudson',
        status: 'Rescheduled',
        ApptType: 'In-Person',
        timeSlot: '5th July 2024 |10:00 pm'
    },
    {
        id: 5,
        patientId: 'OTET2023001',
        name: 'Rex Rutherford',
        status: 'Rescheduled',
        ApptType: 'Video Consultation',
        timeSlot: '5th July 2024 |10:00 pm'
    },
    {
        id: 6,
        patientId: 'OTET2023001',
        name: 'Terry Mccarthy',
        status: 'Rescheduled',
        ApptType: 'Video Consultation',
        timeSlot: '5th July 2024 |10:00 pm'
    },
];

const AppointmentSectionDetails = () => {

    const getAppmntStatus = React.useCallback((status: string) => {
        return helpers.statusColors[status] || { textColor: Colors.offBlack, backColor: Colors.offBlack5 };
    }, [data]);


    const renderAppmntSec = React.useCallback(({ item, index }: { item: dataProps, index: number }) => {
        const stsColors = getAppmntStatus(item.status);
        return (
            <View style={styles.cont}>
                <View style={commonStyles.RowJSB}>
                    <Text style={[fontStyles.notoSansMedium12, { color: Colors.offBlack50 }]}>{item.patientId}</Text>
                    <View style={[styles.statusCon, { backgroundColor: stsColors.backColor }]}>
                        <Text style={[fontStyles.notoSansMedium10, { color: stsColors.textColor }]}>{item.status}</Text>
                    </View>
                </View>
                <Text style={fontStyles.notoSansMedium12}>{item.name}</Text>
                <View style={[commonStyles.RowJFSAC, { columnGap: moderateScale(4) }]}>
                    <DrVisitTypeSvg />
                    <Text style={fontStyles.notoSansRegular12}>{item.ApptType}</Text>
                </View>
                <BorderBottom />
                <TakeSpace space={moderateScale(1)} />
                <Text style={[fontStyles.notoSansRegular12, { opacity: 0.5, textAlign: 'right' }]}>{item.timeSlot}</Text>
            </View>
        )
    }, []);

    return (
        <>
            <SafeAreaView style={[{ backgroundColor: Colors.primaryColor }, helpers.isIos && { paddingTop: moderateScale(-38) }]} />
            <View>
                <Header
                    label='Today’s Appointment'
                    headText=''
                    icon={BackArrowSvg}
                />
                <FlatList
                    data={data}
                    renderItem={renderAppmntSec}
                    style={commonStyles.commonSpace}
                    ItemSeparatorComponent={() => <TakeSpace space={moderateScale(6)} />}
                    contentContainerStyle={{ paddingBottom: moderateScale(140) }}

                />
            </View>

        </>
    )
}

export default AppointmentSectionDetails;

const styles = StyleSheet.create({
    cont: { borderWidth: moderateScale(1), borderColor: Colors.borderColor, padding: moderateScale(10), borderRadius: moderateScale(4), rowGap: moderateScale(4) },
    statusCon: { padding: moderateScale(6), borderRadius: moderateScale(4) }
})
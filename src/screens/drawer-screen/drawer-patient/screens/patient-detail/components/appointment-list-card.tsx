import React from 'react';
import { Colors } from '../../../../../../constants';
import { moderateScale } from 'react-native-size-matters';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { commonStyles, fontStyles } from '../../../../../../styles';
import { BorderBottom, TakeSpace } from '../../../../../../components';
import { navigationHook } from '../../../../../../hooks/navigation.hook';
import { DropwDownSvgDown, DrVisitTypeSvg } from '../../../../../../../assets/svg';

interface TileProps { label: string, value: string, txtColor?: string, Icon?: React.ReactNode, showUnderLine?: boolean; onPress?: () => void };

const Tile = React.memo(({ label, value, txtColor = Colors.offBlack, Icon, showUnderLine = false, onPress }: TileProps) => {
    return (
        <View style={[commonStyles.RowJSBAC]}>
            <View style={{ width: '50%' }}>
                <Text style={[fontStyles.notoSansRegular12, { opacity: 0.5 }]}>{label}</Text>
            </View>
            <Pressable style={[commonStyles.RowJFSAC, { columnGap: moderateScale(4) }]} onPress={onPress}>
                {Icon}
                <Text style={[showUnderLine && { textDecorationLine: "underline" }, fontStyles.notoSansMedium12, { color: txtColor }]}>{value}</Text>
            </Pressable>
        </View>
    )
});


const AppointmentListCard = () => {
    const { navigateTo } = navigationHook();
    const [open, setOpen] = React.useState<boolean>(false);
    const toggleOpen = () => setOpen(!open);

    return (
        <View style={styles.container}>
            <View style={styles.insideCont}>
                <View style={styles.dateCont}>
                    <Text style={fontStyles.notoSansSemiBold14}>Thus</Text>
                    <Text style={fontStyles.notoSansRegular14}>Jun 12</Text>
                </View>
                <Pressable style={styles.IdCont} onPress={toggleOpen}>
                    <View>
                        <Text style={fontStyles.notoSansMedium14}>ID - OTET2023001</Text>
                        <View style={[commonStyles.RowJFSAC, { columnGap: moderateScale(4) }]}>
                            <DrVisitTypeSvg />
                            <Text style={[fontStyles.notoSansMedium12, { opacity: 0.75 }]}>In person</Text>
                        </View>
                    </View>
                    <Pressable style={[open && styles.openStyle]} onPress={toggleOpen}>
                        <DropwDownSvgDown fillColor={Colors.primaryColor} />
                    </Pressable>
                </Pressable>
            </View>
            {open &&
                <>
                    <View style={{ paddingHorizontal: moderateScale(16) }}>
                        <BorderBottom />
                        <TakeSpace space={moderateScale(6)} />
                        <View style={{ rowGap: moderateScale(10) }}>
                            <Tile label='Appointment date' value='11/ 10/ 2024' />
                            <Tile label='Appointment day' value='Monday' />
                            <Tile label='Time slot' value='10:00 am - 12:00 pm' />
                            <Tile label='Visit type' value='In Person' Icon={<DrVisitTypeSvg />} />
                            <Tile label='Status' value='Completed' txtColor={Colors.completedlColor} />
                            <Tile label='Prescription' value='View/ Add Prescription' txtColor={Colors.secondaryColor} showUnderLine onPress={() => navigateTo('DrawerPrescriptionScreen')} />
                        </View>
                    </View>
                    <TakeSpace space={moderateScale(8)} />
                </>
            }
        </View>
    )
}

export default AppointmentListCard

const styles = StyleSheet.create({
    container: { borderWidth: moderateScale(1), borderColor: Colors.borderColor, borderRadius: moderateScale(12) },
    dateCont: { width: '25%', ...commonStyles.centerJCAC, borderRightColor: Colors.borderColor, borderRightWidth: moderateScale(1) },
    insideCont: { paddingVertical: moderateScale(10), ...commonStyles.RowJFSAC },
    IdCont: { width: '75%', ...commonStyles.RowJSBAC, paddingHorizontal: moderateScale(15) },
    openStyle: { transform: [{ rotate: '180deg' }] }
})
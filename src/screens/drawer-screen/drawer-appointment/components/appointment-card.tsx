import React from 'react';
import { Colors } from '../../../../constants';
import { TakeSpace } from '../../../../components';
import { helpers } from '../../../../utility/helpers';
import { moderateScale } from 'react-native-size-matters';
import { commonStyles, fontStyles } from '../../../../styles';
import { navigationHook } from '../../../../hooks/navigation.hook';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import BorderBottom from '../../../../components/bottom-border/border-bottom';
import { DrawerPrescription, DrVisitTypeSvg, OpenEye, OutlineCalender } from '../../../../../assets/svg';

interface AppointmentCardProps { id: number; name: string; status: string };
interface TileProps { Icon: React.ReactNode, label: string, bgColor: string, txtColor?: string, onPress?: () => void, disabled?: boolean };

const SIZE18 = moderateScale(18);

const AppointmentCard = ({ item, index }: { item: AppointmentCardProps, index: number }) => {
    const { name, status, id } = item;
    const { navigateTo } = navigationHook();

    const getAppmntStaus = React.useCallback((status: string) => (helpers.statusColors[status]), [status]);
    const stsColor = getAppmntStaus(status);

    const Tile = React.useCallback(({ Icon, label, bgColor, txtColor = Colors.offBlack, onPress, disabled }: TileProps) => {
        return (
            <TouchableOpacity style={[commonStyles.RowJFSAC, styles.TileCont, { backgroundColor: bgColor, opacity: disabled ? 0.5 : 1 }]} onPress={onPress} disabled={disabled} activeOpacity={0.8}>
                {Icon}
                <Text style={[fontStyles.notoSansMedium14, { color: txtColor }]}>{label}</Text>
            </TouchableOpacity>
        )
    }, []);

    const NavigateToDetails = () => navigateTo('AppointmentDetails')

    return (
        <View style={styles.container}>
            <View style={[commonStyles.flexRow, { padding: moderateScale(4) }]}>
                <View style={{ width: '75%', ...commonStyles.RowJFSAC, columnGap: moderateScale(16), paddingTop: moderateScale(10) }}>
                    <View style={{ width: '15%', alignSelf: 'flex-start' }}>
                        <View style={styles.circle}>
                            <Text style={fontStyles.notoSansSemiBold20}>{name ? name.charAt(0) : 'N'}</Text>
                        </View>
                    </View>
                    <View style={{ width: '85%', rowGap: moderateScale(6) }}>
                        <Text style={fontStyles.notoSansSemiBold16}>{name ? name : 'Rohit Sharma'}</Text>
                        <View style={[styles.schedulTxt]}>
                            <DrVisitTypeSvg />
                            <Text style={[fontStyles.notoSansMedium12, { opacity: 0.75 }]}>In Person</Text>
                        </View>
                        <View style={[styles.schedulTxt]}>
                            <OutlineCalender width={moderateScale(15)} height={moderateScale(15)} fillColor={Colors.offBlack75} />
                            <Text style={fontStyles.notoSansRegular12}>Scheduled for -</Text>
                            <Text style={[fontStyles.notoSansMedium12, { flexShrink: 1, opacity: 0.8 }]} numberOfLines={1}>8:00 am | May 30</Text>
                        </View>
                    </View>
                </View>
                <View style={{ width: '25%' }}>
                    <View style={{ backgroundColor: stsColor?.backColor, ...styles.statusCont }}>
                        <Text style={[fontStyles.notoSansMedium10, { color: stsColor?.textColor }]}>{status ? status : 'Rescheduled'}</Text>
                    </View>
                </View>
            </View>
            <BorderBottom />
            <TakeSpace space={moderateScale(6)} />
            <View style={[commonStyles.RowJSBAC, { paddingHorizontal: moderateScale(10) }]}>
                <Tile
                    Icon={<DrawerPrescription width={SIZE18} height={SIZE18} fillColor={Colors.offBlack50} />}
                    label='Prescription'
                    bgColor={Colors.offBlack5}
                    disabled={status === 'Completed' ? false : true}
                    onPress={() => { navigateTo('DrawerPrescriptionScreen') }}
                />
                <Tile
                    Icon={<OpenEye width={SIZE18} height={SIZE18} fillColor={Colors.completedlColor} />}
                    label='View' bgColor={Colors.completedlbg}
                    txtColor={Colors.completedlColor}
                    onPress={NavigateToDetails}
                />
            </View>
        </View>
    )
}

export default AppointmentCard

const styles = StyleSheet.create({
    circle: { width: moderateScale(48), height: moderateScale(48), borderRadius: moderateScale(24), backgroundColor: Colors.fadedPink, ...commonStyles.centerJCAC },
    container: { backgroundColor: Colors.offWhite, padding: moderateScale(10) },
    schedulTxt: { ...commonStyles.RowJFSAC, columnGap: moderateScale(6), width: '120%' },
    statusCont: { padding: moderateScale(6), borderRadius: moderateScale(4), ...commonStyles.centerJCAC },
    TileCont: { columnGap: moderateScale(4), padding: moderateScale(6), borderRadius: moderateScale(8), paddingRight: moderateScale(8) }
})
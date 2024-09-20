import React from 'react';
import { Colors } from '../../../../constants';
import { TakeSpace } from '../../../../components';
import { moderateScale } from 'react-native-size-matters';
import { commonStyles, fontStyles } from '../../../../styles';
import { navigationHook } from '../../../../hooks/navigation.hook';
import { BackGroundLine, EmailSvg, OpenEye, PhoneSvg } from '../../../../../assets/svg';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import BorderBottom from '../../../../components/bottom-border/border-bottom';

interface PatientCardProps { id: number; name: string; status: string };
interface ButtonTileProps { Icon: React.ReactNode, label: string, bgColor?: string, txtColor?: string, onPress?: () => void, disabled?: boolean };

const SIZE18 = moderateScale(18);

const PatientCard = ({ item, index }: { item?: PatientCardProps, index?: number }) => {
    const { name, status, id } = item! || {};
    const { navigateTo } = navigationHook();


    const Tile = React.useCallback(({ Icon, label }: ButtonTileProps) => {
        return (
            <View style={[styles.schedulTxt]}>
                {Icon}
                <Text style={[fontStyles.notoSansMedium12, { opacity: 0.75 }]}>{label}</Text>
            </View>
        )
    }, []);

    const ButtonTile = React.useCallback(({ Icon, label, bgColor, txtColor = Colors.offBlack, onPress, disabled }: ButtonTileProps) => {
        return (
            <TouchableOpacity style={[commonStyles.RowJFSAC, styles.ButtonTileCont, { backgroundColor: bgColor, opacity: disabled ? 0.4 : 1 }]} onPress={onPress} disabled={disabled}>
                {Icon}
                <Text style={[fontStyles.notoSansMedium14, { color: txtColor }]}>{label}</Text>
            </TouchableOpacity>
        )
    }, []);



    const NavigateToDetails = () => navigateTo('PatientDetails')

    return (
        <>
            {index === 0 && <TakeSpace space={4} />}
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
                            <Tile Icon={<EmailSvg fillcolor={Colors.offBlack} width={moderateScale(16)} height={moderateScale(16)} />} label='cameron@gmail.com' />
                            <Tile Icon={<PhoneSvg width={moderateScale(15)} height={moderateScale(15)} fillcolor={Colors.offBlack75} />} label='+14845691298' />
                        </View>
                    </View>
                </View>
                <BorderBottom />
                <TakeSpace space={4} />
                <View style={[commonStyles.RowJFEAC, { paddingHorizontal: moderateScale(10) }]}>
                    <ButtonTile
                        Icon={<OpenEye width={SIZE18} height={SIZE18} fillColor={Colors.primaryColor} />}
                        label='View' bgColor={Colors.viewGreenFaded}
                        txtColor={Colors.primaryColor}
                        onPress={NavigateToDetails}
                    />
                </View>
            </View>
            <TakeSpace space={4} />
        </>
    )
}

export default PatientCard

const styles = StyleSheet.create({
    circle: { width: moderateScale(48), height: moderateScale(48), borderRadius: moderateScale(24), backgroundColor: Colors.fadedPink, ...commonStyles.centerJCAC },
    container: { backgroundColor: Colors.offWhite, padding: moderateScale(10) },
    schedulTxt: { ...commonStyles.RowJFSAC, columnGap: moderateScale(6), width: '120%' },
    ButtonTileCont: { columnGap: moderateScale(4), padding: moderateScale(6), borderRadius: moderateScale(8), paddingRight: moderateScale(8) }
})
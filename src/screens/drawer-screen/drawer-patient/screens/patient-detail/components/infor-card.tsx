import React from 'react';
import { Colors } from '../../../../../../constants';
import { StyleSheet, Text, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { commonStyles, fontStyles } from '../../../../../../styles';
import { AgeSvg, EmailSvg, PhoneSvg } from '../../../../../../../assets/svg';

interface ButtonTileProps { Icon: React.ReactNode, label: string, bgColor?: string, txtColor?: string, onPress?: () => void, disabled?: boolean };
interface InforCardPRops { name?: string, }

const InforCard = (props: InforCardPRops) => {
    const { name = 'Rohit Sharama' } = props

    const Tile = React.useCallback(({ Icon, label }: ButtonTileProps) => {
        return (
            <View style={[styles.schedulTxt]}>
                {Icon}
                <Text style={[fontStyles.notoSansMedium12, { opacity: 0.75 }]}>{label}</Text>
            </View>
        )
    }, []);
    return (
        <View style={[commonStyles.flexRow, { paddingHorizontal: moderateScale(6) }]}>
            <View style={{ width: '75%', ...commonStyles.RowJFSAC, columnGap: moderateScale(16), paddingTop: moderateScale(10) }}>
                <View style={{ width: '20%', alignSelf: 'flex-start' }}>
                    <View style={styles.circle}>
                        <Text style={fontStyles.notoSansSemiBold20}>{name ? name.charAt(0) : 'N'}</Text>
                    </View>
                </View>
                <View style={{ width: '80%', rowGap: moderateScale(6) }}>
                    <Text style={fontStyles.notoSansSemiBold16}>{name ? name : 'Rohit Sharma'}</Text>
                    <Tile Icon={<AgeSvg />} label='41 | MALE' />
                    <Tile Icon={<EmailSvg fillcolor={Colors.offBlack} width={moderateScale(16)} height={moderateScale(16)} />} label='cameron@gmail.com' />
                    <Tile Icon={<PhoneSvg width={moderateScale(15)} height={moderateScale(15)} fillcolor={Colors.offBlack75} />} label='+14845691298' />
                </View>
            </View>
        </View>
    )
}

export default InforCard
const styles = StyleSheet.create({
    circle: { width: moderateScale(48), height: moderateScale(48), borderRadius: moderateScale(24), backgroundColor: Colors.fadedPink, ...commonStyles.centerJCAC },
    schedulTxt: { ...commonStyles.RowJFSAC, columnGap: moderateScale(6), width: '120%' },
})
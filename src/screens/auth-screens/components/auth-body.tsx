import { Colors } from '../../../constants';
import React from 'react';
import { WhiteBackArrow } from '../../../../assets/svg';
import { moderateScale } from 'react-native-size-matters';
import { commonStyles, fontStyles } from '../../../styles';
import FastImage, { Source } from 'react-native-fast-image';
import { CustomButton, TakeSpace } from '../../../components';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../constants/responsive';
import { useAppSelector } from '../../../redux/hook';

type AuthBodyProps = {
    banner: Source;
    headTxt: string;
    subHeadTxt: string;
    bodyTxt?: string;
    children: React.ReactNode;
    btnLabel: string;
    bottmTxt?: string;
    bottmTxt2?: string;
    spacing: number;
    onPress: () => void;
    onPressBottTxt?: () => void;
    OnPressBack?: () => void;
    hideBnt?: boolean;
    isValidateForm?: boolean;
    resendPress?: () => void;
};

const AuthBody = (props: AuthBodyProps) => {
    const { banner, resendPress, subHeadTxt, headTxt, bodyTxt, children, btnLabel, onPress, onPressBottTxt, bottmTxt, bottmTxt2, spacing, OnPressBack, hideBnt = false, isValidateForm } = props;
    const timerReachedZero = useAppSelector(state => state.otpTimer.timerReachedToZero) || false;

    const HeaderImage = React.useCallback(() => (
        <View style={{ position: 'relative' }}>
            <FastImage
                source={banner}
                style={styles.imgStyle}
                resizeMode={FastImage.resizeMode.cover}
            />
            <Pressable testID='back-button' style={{ position: 'absolute', top: moderateScale(40), left: moderateScale(20) }} onPress={OnPressBack}>
                <WhiteBackArrow />
            </Pressable>
        </View>
    ), [banner, OnPressBack]);

    const TextField = React.useCallback(() => (
        <View style={[commonStyles.columnJFS, { rowGap: moderateScale(5) }]}>
            <Text style={[fontStyles.notoSansMedium14, { color: Colors.offBlack50 }]}>{subHeadTxt}</Text>
            <Text style={[fontStyles.notoSansSemiBold14, styles.headTxt]}>{headTxt}</Text>
            <Text style={[fontStyles.notoSansRegular14, { color: Colors.offBlack }]}>{bodyTxt}</Text>
        </View>
    ), [subHeadTxt, headTxt, bodyTxt]);

    return (
        <View style={{ flex: 1 }}>
            <HeaderImage />
            <View style={{ padding: moderateScale(16) }}>
                <TakeSpace space={10} />
                <TextField />
                {/* <TakeSpace space={6} /> */}
                {children}
                <TakeSpace space={spacing} />
                {!hideBnt &&
                    <CustomButton label={btnLabel} onPress={onPress} customBtnStyle={[{ alignSelf: 'center' }]} btnWidth={'100%'} disabled={isValidateForm} />
                }
                <TakeSpace space={10} />
                {(bottmTxt2 && bottmTxt) &&
                    <>
                        <View style={[commonStyles.RowJCAC, { columnGap: moderateScale(6) }]}>
                            <Text style={fontStyles.notoSansRegular14}>{bottmTxt}</Text>
                            <Pressable onPress={onPressBottTxt}>
                                <Text style={[fontStyles.notoSansSemiBold14, {
                                    color: !timerReachedZero ? Colors.secondaryColor : Colors.secondaryColor
                                }]}>{bottmTxt2}</Text>
                            </Pressable>
                        </View>
                        <TakeSpace space={6} />
                    </>
                }
            </View>
        </View>
    );
};

export default React.memo(AuthBody);

const styles = StyleSheet.create({
    imgStyle: { width: SCREEN_WIDTH, height: SCREEN_HEIGHT * (40 / 100) },
    headTxt: { fontSize: moderateScale(24) }
});

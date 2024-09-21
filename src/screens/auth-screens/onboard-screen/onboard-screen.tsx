/*
This is welcome screen that is obboarding ascreen 
*/
import React, { useCallback } from 'react';
import FastImage from 'react-native-fast-image'
import { AppLogo } from '../../../../assets/svg'
import { Colors, Images } from '../../../constants'
import { moderateScale } from 'react-native-size-matters'
import { commonStyles, fontStyles } from '../../../styles'
import { CustomButton, TakeSpace } from '../../../components';
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { navigationHook } from '../../../hooks/navigation.hook';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../constants/responsive'
import { helpers } from '../../../utility/helpers';


const OnboardScreen = () => {
    const { navigateTo } = navigationHook();

    const HeaderImage = useCallback(() => (
        <View style={{ position: 'relative' }}>
            <FastImage
                source={Images.onBoardBanner}
                style={styles.imgStyle}
                resizeMode={FastImage.resizeMode.cover}
            />
            <View style={styles.logoStyle}>
                <AppLogo />
            </View>
        </View>
    ), []);

    console.log("test ci cd......")
    const WelcomeText = useCallback(() => (
        <View style={[commonStyles.centerJCAC, { rowGap: moderateScale(10) }]}>
            <Text style={[fontStyles.notoSansMedium14, { color: Colors.offBlack50 }]}>Welcome to</Text>
            <Text style={[fontStyles.notoSansSemiBold14, styles.holmeddocTxt]}>Holmeddoc</Text>
            <Text style={[fontStyles.notoSansSemiBold20, { color: Colors.secondaryColor, }, { marginTop: moderateScale(-16) }]}>proCare</Text>
            <Text style={[fontStyles.notoSansRegular14, { color: Colors.offBlack75, textAlign: 'center' }]}>Connect with patients. Let's start building your professional presence today!</Text>
        </View>
    ), []);

    const renderOnboard = () => {
        return (
            <View>

                <HeaderImage />

                <TakeSpace space={35} />

                <WelcomeText />

                <TakeSpace space={35} />

                <CustomButton
                    label={'LOGIN'}
                    onPress={() => { navigateTo('Login') }}
                    paddingProp={moderateScale(14)}
                    customBtnStyle={[{ alignSelf: 'center' }]}
                />

                <TakeSpace space={10} />

                <CustomButton
                    label={'REGISTER'}
                    onPress={() => { navigateTo('Register') }}
                    customBtnStyle={[{ alignSelf: 'center' }]}
                    extraCusBtnStyle={[commonStyles.transparentBtn]}
                    extraCusTxtStyle={[{ color: Colors.primaryColor }]}
                />
                {helpers.isTablet && <TakeSpace space={10} />}
            </View>
        )
    };

    return (
        <View style={commonStyles._flexOneBg(Colors.offWhite)}>
            <FlatList
                data={[1]}
                bounces={false}
                renderItem={renderOnboard}
                showsVerticalScrollIndicator={false}
            />

        </View>
    )
}

export default OnboardScreen

const styles = StyleSheet.create({
    logoStyle: { position: 'absolute', bottom: moderateScale(-40), alignSelf: 'center' },
    imgStyle: { width: SCREEN_WIDTH, height: SCREEN_HEIGHT * (helpers.isTablet ? 0.64 : 0.44) },
    holmeddocTxt: { fontSize: moderateScale(28) }
})
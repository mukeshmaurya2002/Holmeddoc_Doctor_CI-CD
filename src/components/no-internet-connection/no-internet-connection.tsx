import { View, Text, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import { Colors } from '../../constants';
import { moderateScale } from 'react-native-size-matters';
import { useNetwork } from '../../context/network-context';
import fontStyles from '../../styles/font-styles';
import { SCREEN_HEIGHT } from '../../constants/responsive';
import { NoInternetSvg } from '../../../assets/svg';
import { commonStyles } from '../../styles';


const NoInternetScreen = () => {
    const { isConnected } = useNetwork();
    return (
        <Modal
            useNativeDriver={true}
            animationOut={'bounceOutDown'}
            animationOutTiming={1200}
            useNativeDriverForBackdrop
            collapsable
            avoidKeyboard
            hardwareAccelerated
            style={{
                flex: 1,
                margin: 0,
                height: SCREEN_HEIGHT
            }}
            animationIn={'slideInUp'}
            isVisible={isConnected}>
            <View style={styles.noInternetView}>
                <View style={{ paddingBottom: moderateScale(10) }}>
                    <NoInternetSvg />
                </View>
                <View>
                    <Text style={styles.noInternetText}>
                        Oopsie! Something went wrong. Check your connection
                    </Text>
                </View>

            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    noInternetView: {
        ...commonStyles._flexOneBg(Colors.offWhite),
        ...commonStyles.centerJCAC,
        gap: moderateScale(30),
        height: SCREEN_HEIGHT,
    },
    noInternetText: {
        ...fontStyles.notoSansRegular14,
        textAlign: 'center',
        paddingHorizontal: moderateScale(20),
        opacity: 0.75
    },
    noInternetSubTxt: {
        ...fontStyles.notoSansSemiBold16, color: Colors.offBlack25
    }
});

export default NoInternetScreen;
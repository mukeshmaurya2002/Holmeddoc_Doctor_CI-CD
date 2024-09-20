import { Pressable, StyleSheet, Text, View } from "react-native"
import { commonStyles, fontStyles } from "../../../styles"
import { Colors, Images } from "../../../constants"
import FastImage from "react-native-fast-image"
import { DrawerOpenSvg } from "../../../../assets/svg"
import { moderateScale } from "react-native-size-matters"

interface GreetSection { openDrawer: () => void }
const GreetSection = (props: GreetSection) => {
    const { openDrawer } = props
    return (
        <View style={[commonStyles.RowJSBAC]}>
            {/* <View>
                <Text style={[fontStyles.notoSansRegular14, { color: Colors.offWhite }]}>Hello</Text>
                <Text style={[fontStyles.notoSansSemiBold16, { color: Colors.offWhite }]}>Dr Rex Horry</Text>
            </View> */}
            <View>

            </View>
            <Pressable style={{ position: "relative" }} onPress={() => openDrawer()}>
                <FastImage
                    source={Images.profileImage}
                    style={styles.profileImgStyle}
                    resizeMode={FastImage.resizeMode.cover}
                />
                <View style={styles.drawerOpenSvg} >
                    <DrawerOpenSvg />
                </View>
            </Pressable>
        </View>
    )
}

export default GreetSection;
const styles = StyleSheet.create({
    profileImgStyle: { width: moderateScale(40), height: moderateScale(40), marginRight: moderateScale(4) },
    drawerOpenSvg: { position: 'absolute', top: moderateScale(22), right: moderateScale(-8) },
})
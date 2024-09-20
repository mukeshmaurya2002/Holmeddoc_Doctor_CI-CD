import { Pressable, StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { commonStyles, fontStyles } from "../../styles";
import FastImage from "react-native-fast-image";
import { SCREEN_WIDTH } from "../../constants/responsive";
import React from "react";
import { Colors } from "../../constants";
type UploadDocumentsTypes = {
    label?: string
    imagePicked?: string
    icon: React.ElementType
    sizeText?: string
    formatText?: any
    value?: string
    rootStyle?: ViewStyle
    labelStyle?: TextStyle
    onPress?: () => void;
    mandatory?: boolean
    pdfName?: string
    fromPdf?: boolean
    subText?: string
}
const UploadDocuments = ({ label, subText, icon, sizeText, formatText, rootStyle, labelStyle, onPress, imagePicked, mandatory = false, fromPdf = false, pdfName = '' }: UploadDocumentsTypes) => {
    return (
        <View style={{ ...rootStyle }}  >
            <Text style={[labelStyle, { paddingVertical: moderateScale(10) }]} >
                {label} {mandatory && <Text style={[fontStyles.notoSansMedium14, { color: Colors.errorColor }]}>*</Text>}
            </Text>
            <Pressable style={[styles.Outlined, { paddingVertical: !!imagePicked ? moderateScale(5) : moderateScale(10) }]} onPress={onPress}>
                {!!imagePicked ?
                    <View style={commonStyles.centerJCAC}>
                        <FastImage
                            source={{ uri: imagePicked }}
                            style={{
                                width: SCREEN_WIDTH * 0.88,
                                // height: SCREEN_HEIGHT * 0.25,
                                borderRadius: moderateScale(10)
                            }}
                            resizeMode={FastImage.resizeMode.cover}
                        />
                    </View>
                    :

                    fromPdf && pdfName ?
                        <View style={[commonStyles.alignSelfCenter, { paddingVertical: moderateScale(10), rowGap: moderateScale(10) }]} >
                            <View style={{ alignSelf: "center" }}>
                                {/* <PdfSvg /> */}
                            </View>
                            <Text style={styles.commonConditionTxt}>{pdfName}</Text>

                        </View>
                        :
                        <View style={[commonStyles.alignSelfCenter, { paddingVertical: moderateScale(32), rowGap: moderateScale(10) }]} >
                            <View style={{ alignSelf: "center" }}  >
                                {React.createElement(icon)}
                            </View>
                            <Text style={[fontStyles.notoSansSemiBold14, { textAlign: "center", color: Colors.secondaryColor }]}>
                                {subText}
                            </Text>
                            <Text style={[fontStyles.notoSansRegular10, { textAlign: "center", color: Colors.offBlack50 }]}>
                                {sizeText}
                            </Text>


                        </View>


                }
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    Outlined: {
        borderWidth: moderateScale(1.5),
        borderColor: Colors.secondaryOpacity50,
        borderRadius: moderateScale(5),

        borderStyle: "dashed",
        flex: 1,
    },
    commonConditionTxt: {
        ...fontStyles.notoSansRegular10,
        opacity: 0.5,
        textAlign: 'justify',
    }
});


export default UploadDocuments;
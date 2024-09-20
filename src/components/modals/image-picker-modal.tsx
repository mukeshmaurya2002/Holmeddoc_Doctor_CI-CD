import { View, Text, StyleSheet, Pressable, FlatList, Image } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { commonStyles, fontStyles } from '../../styles';
import { BlackCrossIconSvg, CrossIconSvg, TakePhotoSvg, UploadPhotoSvg } from '../../../assets/svg';
import { Colors } from '../../constants';
const ImagePickerModal = ({ openGallery, openCamera, onClose, avtarImagePickedHandler }: any) => {

    return (
        <View style={styles.container}>
            <View style={[commonStyles.RowJSBAC, {}]}>
                <Text style={fontStyles.notoSansBold16}>
                    Upload Profile
                </Text>
                <Pressable onPress={onClose}><BlackCrossIconSvg /></Pressable>
            </View>
            <View style={[commonStyles.flexRow, { columnGap: moderateScale(20), justifyContent: "space-around", paddingVertical: moderateScale(16) }]}>
                <Pressable style={{ rowGap: moderateScale(6), ...commonStyles.centerJCAC }} onPress={openCamera}>
                    <TakePhotoSvg />
                    <Text style={fontStyles.notoSansRegular12}>
                        Take Photo
                    </Text>
                </Pressable>
                <View style={{ width: 1, height: moderateScale(70), backgroundColor: Colors.borderColor, opacity: 0.5 }} />
                <Pressable style={{ rowGap: moderateScale(6), ...commonStyles.centerJCAC }} onPress={openGallery}>
                    <UploadPhotoSvg />
                    <Text style={fontStyles.notoSansRegular12}>
                        Upload Photo
                    </Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { paddingHorizontal: moderateScale(20), paddingVertical: moderateScale(20), rowGap: moderateScale(15) },
});

export default ImagePickerModal;
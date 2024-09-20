import React from 'react';
import { Colors, Images } from '../../../constants';
import RenderHTML from 'react-native-render-html';
import { helpers } from '../../../utility/helpers';
import { Header, TakeSpace } from '../../../components';
import { moderateScale } from 'react-native-size-matters';
import { commonStyles, fontStyles } from '../../../styles';
import VerticalBorder from '../components/vertical-border';
import FastImage, { Source } from 'react-native-fast-image';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../constants/responsive';
import { BackArrowSvg, ConnectEyeSvg, ConnectSvg, MiniBottomBorder, PartnerSvg, TrustSvg } from '../../../../assets/svg';

/*
This screen is used to shows the details of hospital
*/

interface IconTilePRops {
    icon: React.ElementType,
    label: string
};
interface TeamMembTilePRops {
    image: Source,
    HeadTxt: string
    subTxt: string
};

const AboutUS = () => {
    const htmlContent = {
        html: '<p>Pellentesque habitant morbi <b>tristique<b> senectus et netus et malesuada <b>fames<b> ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, <b>tempor<b> sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean <b>ultricies<b> mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien <b>ullamcorper<b> pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>'
    };

    const BannerImageTile = ({ image }: { image: Source }) => {
        return (
            <>
                <FastImage
                    source={image}
                    style={styles.ImgStyle}
                    resizeMode={FastImage.resizeMode.cover}
                />
                <TakeSpace space={10} />
            </>
        )
    }

    const SectionHeader = ({ label }: { label: string }) => {
        return (
            <View style={{ rowGap: 10 }}>
                <Text style={fontStyles.notoSansSemiBold20}>{label}</Text>
                <MiniBottomBorder startColor={Colors.secondaryColor} endColor={Colors.secondaryColor} />
            </View>
        )
    }

    const IconTile = (props: IconTilePRops) => {
        const { icon, label } = props;
        return (
            <Pressable style={[commonStyles.centerJCAC, { rowGap: moderateScale(16) }]}>
                <TakeSpace space={10} />
                {React.createElement(icon)}
                <Text style={styles.ApprochTxt}>{label}</Text>
                <TakeSpace space={10} />
            </Pressable>
        )

    };
    const TeamMembTile = (props: TeamMembTilePRops) => {
        const { image, HeadTxt, subTxt } = props;
        return (
            <View style={[commonStyles.centerJCAC, { rowGap: moderateScale(10) }]}>
                <FastImage
                    source={image}
                    style={{
                        width: SCREEN_WIDTH * 0.6,
                        height: SCREEN_HEIGHT * 0.3,
                    }}
                    resizeMode={FastImage.resizeMode.cover}
                />
                <Text style={styles.ApprochTxt}>{HeadTxt}</Text>
                <Text style={styles.teamMembTxt}>{subTxt}</Text>
                <MiniBottomBorder />
                <TakeSpace space={10} />
            </View>
        )

    };

    const renderAboutUs = () => {
        return (
            <View style={{ rowGap: moderateScale(10) }}>
                <TakeSpace space={10} />
                <BannerImageTile image={Images.about_us_banner} />

                <SectionHeader label='Know about Holmeddoc' />
                <RenderHTML
                    contentWidth={SCREEN_WIDTH}
                    baseStyle={{ color: Colors.offBlack50 }}
                    source={htmlContent}
                />

                <SectionHeader label='Our Approach to health care' />
                <View style={[styles.ApprochCont]}>
                    <IconTile icon={ConnectSvg} label='Connect' />
                    <VerticalBorder />
                    <IconTile icon={TrustSvg} label='Trust' />
                    <VerticalBorder />
                    <IconTile icon={ConnectEyeSvg} label='Transparency' />
                </View>

                <SectionHeader label='Strength of the team' />
                <View style={{ rowGap: 10 }}>
                    <TeamMembTile image={Images.profileImage} HeadTxt='Alexander O. Babazadeh' subTxt='Founder Of Holmeddoc' />
                    <TeamMembTile image={Images.profileImage} HeadTxt='Alizeh Khan' subTxt='Co - Founder' />
                    <TeamMembTile image={Images.profileImage} HeadTxt='Maheep' subTxt='Co- Founder & VP Operation' />
                </View>

                <SectionHeader label='Our Mission' />
                <RenderHTML
                    contentWidth={SCREEN_WIDTH}
                    source={htmlContent}
                    baseStyle={{ color: Colors.offBlack50 }}

                />
                <BannerImageTile image={Images.nurse_hand_banner} />

                <SectionHeader label='Our partners' />
                <View style={{}}>
                    <PartnerSvg />
                </View>
                <TakeSpace space={10} />
            </View>
        )
    };

    return (
        <>
            <SafeAreaView style={[{ backgroundColor: Colors.primaryColor }, helpers.isIos && { paddingTop: moderateScale(-38) }]} />
            <View style={commonStyles._flexOneBg(Colors.offWhite)}>
                <Header
                icon={BackArrowSvg}
                label='About Us'
                />
                <FlatList
                    data={[1]}
                    renderItem={renderAboutUs}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ padding: moderateScale(16) }}
                />
            </View>
        </>
    )
}

export default AboutUS

const styles = StyleSheet.create({
    ImgStyle: { width: SCREEN_WIDTH * 0.95, height: SCREEN_HEIGHT * 0.17, alignSelf: 'center' },
    ApprochTxt: { ...fontStyles.notoSansMedium14 },
    teamMembTxt: { ...fontStyles.notoSansRegular12, color: Colors.offBlack50 },
    ApprochCont: { ...commonStyles.RowJSBAC, paddingHorizontal: moderateScale(16) }
})
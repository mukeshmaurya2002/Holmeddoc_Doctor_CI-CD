import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BackArrowSvg, PipeSvg } from '../../../../assets/svg'
import { Header } from '../../../components'
import { SafeAreaView } from 'react-native-safe-area-context'
import { helpers } from '../../../utility/helpers'
import { Colors } from '../../../constants'
import { moderateScale } from 'react-native-size-matters'
import RenderHTML from "react-native-render-html";
import { SCREEN_WIDTH } from '../../../constants/responsive'
import { fontStyles } from '../../../styles'
const terms = `<h5>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </h5>`
const condition = `<h5>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </h5>`
const TermsAndCondition = () => {
    return (
        <>
            <SafeAreaView style={[{ backgroundColor: Colors.primaryColor }, helpers.isIos && { paddingTop: moderateScale(-38) }]} />
            <Header
                label='Terms & Conditions'
                headText=''
                icon={BackArrowSvg}
            />
            <View style={{ padding: moderateScale(16), flex: 1, backgroundColor: Colors.offWhite }}>
                <View>
                    <Text style={fontStyles.notoSansMedium20}>
                        Terms
                    </Text>
                    <PipeSvg />
                    <RenderHTML
                        baseStyle={{ color: Colors.offBlack50 }}
                        contentWidth={SCREEN_WIDTH}
                        source={{
                            html: terms
                        }}
                    />
                </View>
                <View>
                    <Text style={fontStyles.notoSansMedium20}>
                        Conditions
                    </Text>
                    <PipeSvg />
                    <RenderHTML
                        baseStyle={{ color: Colors.offBlack50 }}
                        contentWidth={SCREEN_WIDTH}
                        source={{
                            html: condition
                        }}
                    />
                </View>
            </View>
        </>
    )
}

export default TermsAndCondition

const styles = StyleSheet.create({})
import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { commonStyles, fontStyles } from '../../styles'
import { moderateScale } from 'react-native-size-matters'
import FastImage from 'react-native-fast-image'
import { TranlsationSvg } from '../../../assets/svg';
interface DoctorInfoCardProps {
    spokenLang: string[]
    drImage: string
    drName: string
    jobLocation: string
}

const DoctorInfoCard = (props: DoctorInfoCardProps) => {
    const { spokenLang, drImage, drName, jobLocation, } = props

    const renderItem = React.useCallback(({ item, index }: { item: string, index: number }) => {
        return (<Text style={[fontStyles.notoSansMedium12, { opacity: 0.75 }]}>{item},</Text>)
    }, [spokenLang]);

    return (
        <View style={[commonStyles.RowJFSAC, { columnGap: moderateScale(15) }]}>
            <View style={{ width: '30%' }}>
                <FastImage
                    source={{ uri: drImage }}
                    style={{
                        width: moderateScale(105),
                        height: moderateScale(105),
                        borderRadius: moderateScale(4)
                    }}
                    resizeMode={FastImage.resizeMode.cover}
                />
            </View>
            <View style={{ width: '70%', rowGap: moderateScale(6) }}>
                <Text style={[fontStyles.notoSansSemiBold16, { opacity: 0.75 }]}>{drName}</Text>
                <Text style={[fontStyles.notoSansMedium12, { opacity: 0.75 }]}>{jobLocation.split('|')?.[0]}</Text>
                <Text style={[fontStyles.notoSansMedium12, { opacity: 0.75 }]}>{jobLocation.split('|')?.[1]}</Text>
                <View style={[commonStyles.RowJFSAC, { columnGap: moderateScale(6) }]}>
                    <TranlsationSvg />
                    <FlatList
                        data={spokenLang}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={{ flexDirection: 'row', columnGap: moderateScale(6) }}
                        renderItem={renderItem}
                    />
                </View>
            </View>
        </View>
    )
}

export default React.memo(DoctorInfoCard)

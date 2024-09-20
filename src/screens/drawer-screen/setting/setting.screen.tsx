import React from 'react'
import { helpers } from '../../../utility/helpers'
import { DataProps, useSettings } from './setting.hook'
import { moderateScale } from 'react-native-size-matters'
import { commonStyles, fontStyles } from '../../../styles'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { BorderBottom, Header, SettingToggleBtn, TakeSpace } from '../../../components'

const Setting = () => {
    const { data, handleToggleChange } = useSettings();
    const renderSetting = ({ index, item }: { item: DataProps, index: number }) => {
        return (
            <>
                <TakeSpace space={4} />
                <View style={commonStyles.RowJSBAC}>
                    <View style={{ width: '80%' }}>
                        <Text style={fontStyles.notoSansRegular14}>{item.label}</Text>
                    </View>
                    <SettingToggleBtn isOn={item.isEnabled} toggleBtn={(value: boolean) => handleToggleChange({ id: item.id, value: value })} />
                </View>
                <TakeSpace space={4} />
            </>
        )
    }
    return (
        <>
            <SafeAreaView style={[{ backgroundColor: Colors.primaryColor }, helpers.isIos && { paddingTop: moderateScale(-38) }]} />
            <View style={commonStyles._flexOneBg(Colors.offWhite)}>
                <Header label='Settings' />
                <FlatList
                    data={data}
                    renderItem={renderSetting}
                    ItemSeparatorComponent={() => (<BorderBottom />)}
                    contentContainerStyle={{ padding: moderateScale(16) }}
                />
            </View>
        </>
    )
}

export default Setting
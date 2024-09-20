import React from 'react'
import { useVitalSign } from './vital-sign.hook'
import { Colors } from '../../../../../constants';
import { VitalSign } from '../../../../../routes/type';
import { CLockSvg, FilterSvg } from '../../../../../../assets/svg';
import { helpers } from '../../../../../utility/helpers';
import { moderateScale } from 'react-native-size-matters';
import { SafeAreaView } from 'react-native-safe-area-context';
import { commonStyles, fontStyles } from '../../../../../styles';
import { FlatList, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { BorderBottom, CustomModal, Header, TakeSpace } from '../../../../../components';
import VitalSignsFilter from '../../components/filter/vital-signs-filter';

const VitalSigns = () => {
    const { data, selected, flatListRef, getDataBasedOnId, handleSelection, visible, closeModal, openModal } = useVitalSign();

    const indexState = React.useMemo(() => {
        const foundIndex = data?.findIndex((item: VitalSign) => item?.id === selected);
        return foundIndex !== -1 ? foundIndex : 0;
    }, [selected, data]);

    React.useEffect(() => {
        if (flatListRef.current && indexState !== -1 && indexState !== 0) {
            flatListRef.current.scrollToIndex({ animated: true, index: indexState });
        }
    }, [indexState]);

    const renderTopList = React.useCallback(({ item, index }: { item: VitalSign, index: number }) => {
        const isSelected = item.id == selected;
        const activeIndex = data.findIndex((item: VitalSign) => item.id === selected);

        return (

            <Pressable
                disabled={selected === item?.id}
                style={[
                    styles.topListCont,
                    {
                        backgroundColor: isSelected ? Colors.selecVitalBg : Colors.unSelectVitalbg,
                        // marginRight: moderateScale(6),
                        paddingVertical: moderateScale(8),


                    }
                ]}
                onPress={() => handleSelection(item?.id, index)}
            >
                <Text style={fontStyles.notoSansMedium14}>
                    {item?.label?.length < 15 ? item?.label : item?.label?.substring(0, 16) + '...'}
                </Text>
                {isSelected && <View style={styles.yellowDot} />}
            </Pressable>
        );
    }, [selected, flatListRef]);


    const renderMidList = React.useCallback(({ item, index }: { item: VitalSign, index: number }) => {
        return (
            <>
                <TakeSpace space={moderateScale(4)} />
                <View style={[commonStyles.RowJSBAC, { paddingHorizontal: moderateScale(6) }]}>
                    <Text style={[fontStyles.notoSansSemiBold20, { fontSize: moderateScale(28) }]}>{item.value}</Text>
                    <View style={[commonStyles.RowJFSAC, { columnGap: moderateScale(4), opacity: 0.75 }]}>
                        <CLockSvg />
                        <Text style={fontStyles.notoSansRegular12}>{item.lastCheckedDate}</Text>
                    </View>
                </View>
            </>
        )
    }, [selected]);


    return (
        <>
            <SafeAreaView style={[{ backgroundColor: Colors.primaryColor }, helpers.isIos && { paddingTop: moderateScale(-38) }]} />
            <Header label='vital signs' headText='' />
            <View style={{ backgroundColor: Colors.offWhite, flex: 1 }}>
                <View>
                    <FlatList
                        horizontal
                        ref={flatListRef}
                        data={data}
                        renderItem={renderTopList}
                        keyExtractor={item => item.id.toString()}
                        showsHorizontalScrollIndicator={false}
                        ItemSeparatorComponent={() => <TakeSpace space={moderateScale(4)} />}
                        contentContainerStyle={{ padding: moderateScale(16) }}
                        getItemLayout={(_, index) => ({ length: moderateScale(10), offset: moderateScale(80) * index, index })}
                    />

                </View>
                <FlatList
                    data={getDataBasedOnId(selected)}
                    renderItem={renderMidList}
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={() => (<BorderBottom />)}
                    contentContainerStyle={{ padding: moderateScale(16) }}
                />
                <Pressable style={styles.filterIcon} onPress={openModal}>
                    <FilterSvg />
                </Pressable>
                {visible &&
                    <VitalSignsFilter closeModal={closeModal} isVisible={visible} />
                }
            </View>
        </>
    )
}

export default VitalSigns;

const styles = StyleSheet.create({
    topListCont: { paddingHorizontal: moderateScale(8), ...commonStyles.centerJCAC, borderRadius: moderateScale(4), rowGap: moderateScale(4) },
    yellowDot: { width: moderateScale(6), height: moderateScale(6), borderRadius: moderateScale(3), backgroundColor: Colors.secondaryColor },
    filterIcon: { padding: moderateScale(16), alignItems: 'flex-end', zIndex: 999 }
})
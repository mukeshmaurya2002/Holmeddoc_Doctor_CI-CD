import React from 'react'
import { Colors } from '../../../constants'
import { moderateScale } from 'react-native-size-matters'
import { commonStyles, fontStyles } from '../../../styles'
import { navigationHook } from '../../../hooks/navigation.hook'
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import HeadingText from './heading-text'

interface ItemProps { id: number; label: string };

const mostCommonData = [{ id: 1, label: "Diabetes", }, { id: 2, label: "Fever", }, { id: 3, label: "Headache", }, { id: 4, label: "Hyper Tension", }, { id: 5, label: "Heart Disease", }, { id: 6, label: "Headache", }];

//This component is used in the Home screen to display the 
const YourPatientSect = () => {

    const { navigateTo } = navigationHook();

    const renderYourPatientSect = React.useCallback(({ item, index }: { item: ItemProps, index: number }) => {
        const colors = [Colors.fadedPink, Colors.fadedBlue, Colors.fadedOrange,];
        const bgColor = colors[index % colors.length];
        return (
            <Pressable style={[commonStyles.centerJCAC, { padding: moderateScale(10) }]} onPress={() => navigateTo('BookAppointmentListing', { searchKey: item?.label })}>
                <View style={[styles.outerCirc, { borderColor: bgColor }]}>
                    <View style={[styles.innerCirc, { backgroundColor: bgColor, }]}>
                        <Text style={[fontStyles.notoSansSemiBold20, { paddingRight: moderateScale(6) }]}> {item.label.charAt(0)}</Text>
                    </View>
                </View>
                <Text style={[fontStyles.notoSansMedium12, { color: Colors.offBlack, textAlign: "center" }]}>{item.label}</Text>
            </Pressable>
        )
    }, [mostCommonData]);

    const handleViewAllPress = () => {
        navigateTo('DrawerScreen', { screen: "DrawerPatients" })
    }

    return (
        <>
            <View style={styles.mainContainer}>
                <HeadingText leftTxt='Your patients' midLineStyle={{ width: "42%" }} viewAllPress={handleViewAllPress} />
                <FlatList
                    data={mostCommonData}
                    bounces={false}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={renderYourPatientSect}
                    contentContainerStyle={{ padding: moderateScale(16) }}
                />
            </View>
        </>
    )
}

export default YourPatientSect

const styles = StyleSheet.create({
    mainContainer: { backgroundColor: Colors.offWhite, marginTop: moderateScale(40) },
    outerCirc: { width: moderateScale(64), height: moderateScale(64), borderRadius: moderateScale(32), borderWidth: moderateScale(1), ...commonStyles.centerJCAC },
    innerCirc: { width: moderateScale(56), height: moderateScale(56), borderRadius: moderateScale(28), ...commonStyles.centerJCAC }
})
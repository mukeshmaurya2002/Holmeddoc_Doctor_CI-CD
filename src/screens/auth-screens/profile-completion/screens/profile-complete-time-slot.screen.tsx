import React from 'react'
import { Colors } from '../../../../constants'
import { helpers } from '../../../../utility/helpers'
import { moderateScale } from 'react-native-size-matters'
import { SafeAreaView } from 'react-native-safe-area-context'
import { commonStyles, fontStyles } from '../../../../styles'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { navigationHook } from '../../../../hooks/navigation.hook'
import { BorderBottom, CustomButton, Header, TakeSpace } from '../../../../components'
import { BackArrowSvg, BackGroundLine, DeleteButtonSvg, EditButtonSvg } from '../../../../../assets/svg'
import DeletePopUpModal from '../../../../routes/components/delete-popup-modal'


const ProfileCompleteTimeSlotScreen = () => {
    const { navigateTo } = navigationHook()
    const timeSlotData = [
        {
            day: "Monday",
            data: [
                {
                    day: "Monday",
                    appointmnet_type: "In Person",
                    time: "10:00 AM - 11:00 AM"
                },
                {
                    day: "Monday",
                    appointmnet_type: "Virtual",
                    time: "11:00 AM - 12:00 PM"
                },
                {
                    day: "Monday",
                    appointmnet_type: "Clinic Visit",
                    time: "11:00 AM - 12:00 PM"
                }
            ]
        },
        {
            day: "Friday",
            data: [
                {
                    day: "Friday",
                    appointmnet_type: "In Person",
                    time: "10:00 AM - 11:00 AM"
                },
                {
                    day: "Friday",
                    appointmnet_type: "Virtual",
                    time: "11:00 AM - 12:00 PM"
                },
                {
                    day: "Friday",
                    appointmnet_type: "Clinic Visit",
                    time: "11:00 AM - 12:00 PM"
                }
            ]
        }
    ]
    const [showDeletePopup, setShowDeletePopup] = React.useState(false);
    const handleDelete = (uri: string) => {
        // deleteDocument(uri)
        setShowDeletePopup(false)
    }
    const handleClose = () => {
        setShowDeletePopup(false)
    }
    const renderSloData = ({ item, index }: any) => {
        const isLast = index === timeSlotData.length - 1;
        const firstItem = index === 0;
        return (
            <>
                <View style={[{ paddingHorizontal: moderateScale(10) }]}>
                    {!firstItem && <TakeSpace space={moderateScale(6)} />}
                    <View style={[commonStyles.RowJSB, { paddingHorizontal: moderateScale(6) }]}>
                        <Text style={[fontStyles.notoSansRegular14, { color: Colors.offBlack50, }]}>
                            Appointment type
                        </Text>
                        <Text style={[fontStyles.notoSansMedium12, { color: Colors.offBlack }]}>{item.appointmnet_type}</Text>
                    </View>
                    <TakeSpace space={moderateScale(2)} />

                    {
                        !firstItem && <View style={[commonStyles.RowJSB, { paddingHorizontal: moderateScale(6) }]}>
                            <Text style={[fontStyles.notoSansRegular14, { color: Colors.offBlack50 }]}>
                                Day
                            </Text>
                            <Text style={[fontStyles.notoSansMedium12, { color: Colors.offBlack }]}>{item.day}</Text>
                        </View>
                    }
                    <TakeSpace space={moderateScale(2)} />

                    <View style={[commonStyles.RowJSB, { paddingHorizontal: moderateScale(6) }]}>
                        <Text style={[fontStyles.notoSansRegular14, { color: Colors.offBlack50, }]}>
                            Time
                        </Text>
                        <View>

                            <Text style={[fontStyles.notoSansMedium12, { color: Colors.offBlack }]}>{item.time}</Text>

                        </View>

                    </View>
                    <TakeSpace space={moderateScale(6)} />
                    <BorderBottom />
                    <TakeSpace space={moderateScale(6)} />
                    <View style={[commonStyles.RowJSBAC]}>

                        <TouchableOpacity style={commonStyles.centerJCAC} activeOpacity={0.8} onPress={() => setShowDeletePopup(true)}>
                            <DeleteButtonSvg />
                        </TouchableOpacity>
                        <TouchableOpacity style={commonStyles.centerJCAC} activeOpacity={0.8} onPress={() => navigateTo('AddTimeSlot', { fromEdit: true })}>
                            <EditButtonSvg />
                        </TouchableOpacity>
                    </View>

                    <TakeSpace space={moderateScale(4)} />

                </View>

                {/* {isLast ? <TakeSpace space={0} /> : <BackGroundLine />} */}

            </>
        )
    }

    const renderTimeSlotData = ({ item, index }: any) => {
        const isLast = index === timeSlotData.length - 1;
        return (
            <View key={index}>
                <Text style={[fontStyles.notoSansBold16, { color: Colors.offBlack, paddingHorizontal: moderateScale(16), paddingVertical: moderateScale(10) }]}>{item.day}</Text>
                <FlatList
                    data={item.data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderSloData}
                    ItemSeparatorComponent={() => <BackGroundLine />}
                />


            </View>

        )
    }
    return (
        <>
            <SafeAreaView style={[{ backgroundColor: Colors.primaryColor }, helpers.isIos && { paddingTop: moderateScale(-38) }]} />
            <View style={styles.container} >
                <Header
                    label='Time Slot'
                    headText=''
                    icon={BackArrowSvg}
                />
                <View style={styles.secondaryContainer}>
                    <FlatList
                        data={timeSlotData}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={renderTimeSlotData}
                        ItemSeparatorComponent={() => <BackGroundLine />}
                        ListFooterComponent={() => <TakeSpace space={75} />}
                    />
                </View>
                <View style={[commonStyles.sbtBtn, { bottom: 0, }]}>
                    <CustomButton
                        label={"+  Add Time Slot"}
                        btnWidth={'100%'}
                        onPress={() => navigateTo('AddTimeSlot', { fromEdit: false })}
                        customTxtStyle={[fontStyles.notoSansSemiBold14, { color: Colors.primaryColor }]}
                        customBtnStyle={[{ alignSelf: 'center' }]}
                        extraCusBtnStyle={[commonStyles.transparentBtn]}
                        extraCusTxtStyle={[{ color: Colors.primaryColor, }]}
                        // onPress={handleInsuranceAdd}
                        paddingProp={moderateScale(12, 0.5)}
                    />
                </View>
                {
                    showDeletePopup &&
                    <DeletePopUpModal
                        handleDelete={() => { }}
                        handleClose={handleClose}
                    />
                }
            </View>
        </>
    )
}

export default ProfileCompleteTimeSlotScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.offWhite
    },
    secondaryContainer: {
        // padding: moderateScale(16),
    },
    schedulTxt: { ...commonStyles.RowJFSAC, columnGap: moderateScale(6), width: '120%' },
    TileCont: { columnGap: moderateScale(4), borderRadius: moderateScale(8) }
})
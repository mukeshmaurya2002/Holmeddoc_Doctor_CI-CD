import React from 'react'
import { Colors } from '../../../../constants'
import { helpers } from '../../../../utility/helpers'
import { moderateScale } from 'react-native-size-matters'
import { SafeAreaView } from 'react-native-safe-area-context'
import { commonStyles, fontStyles } from '../../../../styles'
import { useAppointmentDetails } from './appointment-details.hook'
import { BorderBottom, Header, TakeSpace } from '../../../../components'
import { Animated, FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import { BackArrowSvg, BackGroundLine, CopySvg, DrVisitTypeSvg, OrangeForwarArrow } from '../../../../../assets/svg'

interface ScheduleTileProps { label: string, value: string, txtColor?: string };
interface OtherTileProps { label: string, value: string, Icon?: React.ReactNode };
interface ItemProps { id: number, label: string };

const ScheduleTile = React.memo(({ label, value, txtColor }: ScheduleTileProps) => {
  return (
    <View style={commonStyles.RowJSBAC}>
      <View style={{ width: '45%' }}>
        <Text style={[fontStyles.notoSansRegular14, { opacity: 0.5 }]}>{label}</Text>
      </View>
      <Text style={[fontStyles.notoSansMedium14, { color: txtColor ? txtColor : Colors.offBlack }]}>{value}</Text>
    </View>
  )
});

const OtherTile = React.memo(({ label, value, Icon }: OtherTileProps) => {
  return (
    <View style={commonStyles.columnJFS}>
      <Text style={[fontStyles.notoSansRegular14, { opacity: 0.5 }]}>{label}</Text>
      <Pressable style={[commonStyles.RowJFSAC, { columnGap: moderateScale(6) }]}>
        {Icon}
        <Text style={[fontStyles.notoSansMedium14, {
          color: value === 'Click here to join' ? Colors.primaryColor : Colors.offBlack
        }]}>{value}</Text>
      </Pressable>
    </View>
  )
});



const AppointmentDetails = () => {
  const { navigateTo, selected, setSelected, otherData, borderWidthAnim } = useAppointmentDetails();

  let name = 'Dr Rex';
  let visitType = 'In Person';

  const getAppmntStaus = React.useCallback((status: string) => (helpers.statusColors[status] || { textColor: Colors.offBlack, backColor: Colors.offBlack5 }), []);
  const SectionHeader = React.memo(({ label }: { label: string }) => (<Text style={fontStyles.notoSansMedium14}>{label}</Text>));


  const renderOtherItem = React.useCallback(({ item }: { item: ItemProps }) => {
    const isSelected = selected === item.id;
    const borderWidth = borderWidthAnim.current[item.id];
    return (
      <Pressable onPress={() => setSelected(item.id)} style={{ paddingRight: moderateScale(30) }}>
        <Text style={[styles.txt, isSelected && styles.selectTxt, {
          color: isSelected ? Colors.primaryColor : Colors.offBlack75
        }]}>{item.label}</Text>
        <Animated.View style={[styles.bottBord, isSelected && styles.selctBottBord, { width: borderWidth }]} />
      </Pressable>
    );
  }, [selected]);


  const renderAppointmentDetails = () => {
    return (
      <>
        <View style={[styles.container]}>
          <View style={{ width: '15%' }}>
            <View style={styles.circle}>
              <Text style={fontStyles.notoSansSemiBold20}>{name ? name.charAt(0) : 'N'}</Text>
            </View>
          </View>
          <View style={{ rowGap: moderateScale(4) }}>
            <Text style={fontStyles.notoSansSemiBold16}>{name}</Text>
            <View style={[commonStyles.RowJFSAC, { columnGap: moderateScale(4) }]}>
              <DrVisitTypeSvg />
              <Text style={fontStyles.notoSansMedium12}>{visitType}</Text>
            </View>
          </View>
        </View>
        <View style={{ rowGap: moderateScale(10), padding: moderateScale(16), backgroundColor: Colors.offWhite }}>
          <BorderBottom />
          <SectionHeader label='Schedule details' />
          <ScheduleTile label='Appointment ID' value='#OTET201834' />
          <ScheduleTile label='Booking status' value={'Completed'} txtColor={getAppmntStaus('Completed').textColor} />
          <ScheduleTile label='Appointment status' value={'Completed'} txtColor={getAppmntStaus('Completed').textColor} />
          <ScheduleTile label='Visit type' value='In Person' />
          <ScheduleTile label='Time Slot' value='10:00 am - 12:00 pm' />
          <ScheduleTile label='Date' value='30th May 2024' />
          <BorderBottom />

          {/* OTher details section */}
          <FlatList horizontal data={otherData} renderItem={renderOtherItem} />
          <TakeSpace space={6} />
          {selected == 1 ?
            <View style={{ rowGap: moderateScale(10) }}>
              <OtherTile label='Visit type' value='Virtual' />
              <OtherTile label='Meet link' value='Click here to join' Icon={<CopySvg />} />
            </View>
            :
            <View style={{ rowGap: moderateScale(10) }}>
              <OtherTile label='Patient name' value='Cameron Hudson' />
              <OtherTile label='Patient email' value='cameronhudson@gmail.com' />
              <OtherTile label='Medical condition' value='Asthama disease' />
              <OtherTile label='Medical speciality' value='Asthama disease' />
              <OtherTile label='Insurance company' value='Star' />
              <OtherTile label='Insurance number' value='232482' />
            </View>
          }
        </View>
        <TakeSpace space={6} />
        <View style={{ backgroundColor: Colors.offWhite, padding: moderateScale(16) }}>
          <TakeSpace space={6} />
          <Pressable style={[commonStyles.RowJSBAC]} onPress={() => { navigateTo('DrawerPrescriptionScreen') }}>
            <View >
              <Text style={[fontStyles.notoSansMedium14, { color: Colors.secondaryColor }]}> Prescription & vital signs </Text>
              <Text style={[fontStyles.notoSansRegular12, { paddingLeft: moderateScale(4) }]}>View / add required prescription & vital details</Text>
            </View>
            <OrangeForwarArrow />
          </Pressable>
          <TakeSpace space={6} />
        </View>
        <TakeSpace space={20} />
      </>
    )
  };


  return (
    <>
      <SafeAreaView style={[{ backgroundColor: Colors.primaryColor }, helpers.isIos && { paddingTop: moderateScale(-38) }]} />
      <View style={commonStyles._flexOneBg(Colors.bgGreen)}>
        <Header
          label='Appointment'
          icon={BackArrowSvg}
        />
        <FlatList
          data={[1]}
          // contentContainerStyle={{ padding: moderateScale(16) }}
          renderItem={renderAppointmentDetails}
          showsVerticalScrollIndicator={false}
        />
      </View >
    </ >
  )
}

export default AppointmentDetails

const styles = StyleSheet.create({
  circle: { width: moderateScale(48), height: moderateScale(48), borderRadius: moderateScale(24), backgroundColor: Colors.fadedPink, ...commonStyles.centerJCAC },
  container: { columnGap: moderateScale(4), ...commonStyles.RowJFSAC, backgroundColor: Colors.offWhite, paddingHorizontal: moderateScale(16), paddingTop: moderateScale(16) },
  bottBord: { backgroundColor: Colors.offBlack75, height: moderateScale(1.2) },
  selctBottBord: { backgroundColor: Colors.primaryColor, height: moderateScale(2) },
  txt: { ...fontStyles.notoSansRegular16, opacity: 0.75 },
  selectTxt: { ...fontStyles.notoSansMedium16, opacity: 0.75 },
})
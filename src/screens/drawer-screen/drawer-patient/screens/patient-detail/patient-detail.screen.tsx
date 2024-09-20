import React from 'react'
import InforCard from './components/infor-card'
import { Colors } from '../../../../../constants'
import { helpers } from '../../../../../utility/helpers'
import { moderateScale } from 'react-native-size-matters'
import { BorderBottom, Header, TakeSpace } from '../../../../../components'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { commonStyles, fontStyles } from '../../../../../styles'
import AppointmentListCard from './components/appointment-list-card'

const PatientDetails = () => {

  const SectionHeader = React.useCallback(({ label }: { label: string }) => (
    <View style={{ padding: moderateScale(10) }}>
      <Text style={fontStyles.notoSansMedium14}>{label}</Text>
    </View>
  ), []);



  const renderPatientDetail = () => {
    return (
      <View>
        <InforCard />
        <BorderBottom />
        <TakeSpace space={moderateScale(4)} />
        <SectionHeader label='Appointment' />
        <FlatList
          scrollEnabled={false}
          data={[1, 2, 3, 4, 5, 7, 8,]}
          style={{paddingHorizontal:moderateScale(8)}}
          renderItem={({ item, index }) => (<AppointmentListCard />)}
          ItemSeparatorComponent={() => (<TakeSpace space={moderateScale(8)} />)}
        />
      </View>
    )
  }
  return (
    <>
      <SafeAreaView style={[{ backgroundColor: Colors.primaryColor }, helpers.isIos && { paddingTop: moderateScale(-38) }]} />
      <View style={commonStyles._flexOneBg(Colors.offWhite)}>
        <Header label='Patients' />
        <FlatList
          data={[1]}
          renderItem={renderPatientDetail}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ padding: moderateScale(10) }}
          ListFooterComponent={() => (<TakeSpace space={moderateScale(8)} />)}
        />

      </View>
    </>
  )
}

export default PatientDetails

const styles = StyleSheet.create({})
import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { HeartRateMonitor, StatCalenderSvg, StatHospBuild, StatStatusScop } from '../../../../assets/svg';
import { fontStyles } from '../../../styles';
import { moderateScale } from 'react-native-size-matters';
import { Colors } from '../../../constants';
interface StatDataProps {
  id: number
  label: string
  statCount: number
  icon: React.ElementType,
}
const StatSection = () => {


  const data = [
    {
      id: 1,
      label: 'Total Appointments',
      statCount: 5000,
      icon: StatCalenderSvg,
    },
    {
      id: 2,
      label: 'Total Appointments',
      statCount: 5000,
      icon: StatStatusScop,
    },
    {
      id: 3,
      label: 'Clinic Consulting',
      statCount: 5000,
      icon: StatHospBuild,
    },
    {
      id: 4,
      label: 'Video Consulting',
      statCount: 5000,
      icon: HeartRateMonitor,
    },
  ]

  const renderStat = React.useCallback(({ item, index }: { item: StatDataProps, index: number }) => {
    return (
      <View style={[styles.statCont, styles.shadow]}>
        {React.createElement(item?.icon)}
        <Text style={styles.itemTxt}>{item.statCount}</Text>
        <Text style={styles.labelTxt}>{item.label}</Text>
      </View>
    )
  }, []);

  return (
    <View style={{}}>
      <FlatList
        data={data}
        numColumns={2}
        columnWrapperStyle={{ gap: moderateScale(10) }}
        renderItem={renderStat}
      />
    </View>
  )
}

export default StatSection

const styles = StyleSheet.create({
  statCont: { width: '48%', backgroundColor: Colors.offWhite, marginBottom: moderateScale(10), borderRadius: moderateScale(4), padding: moderateScale(10) },
  itemTxt: { ...fontStyles.notoSansMedium20, fontSize: moderateScale(24), textAlign: 'right' },
  labelTxt: { ...fontStyles.notoSansMedium10, color: Colors.offBlack75, textAlign: 'right' },
  shadow: {
    shadowColor: Colors.offBlack,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }
})
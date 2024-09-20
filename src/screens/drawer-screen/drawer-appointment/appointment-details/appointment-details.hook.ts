import React from "react";
import { RouteProp, useRoute } from "@react-navigation/native"
import { DrawerStackScreenProps } from "../../../../routes/type"
import { navigationHook } from "../../../../hooks/navigation.hook"
import { Animated } from "react-native";
import { moderateScale } from "react-native-size-matters";

const useAppointmentDetails = () => {
  const { params: { } } = useRoute<RouteProp<DrawerStackScreenProps, 'AppointmentDetails'>>()
  const { navigateTo } = navigationHook();
  const [selected, setSelected] = React.useState<number>(1);
  const otherData = [{ id: 1, label: 'Meeting details' }, { id: 2, label: 'Patient details' }];
  const borderWidthAnim = React.useRef<{ [key: number]: Animated.Value }>({});
  const [initialized, setInitialized] = React.useState(false);



  React.useEffect(() => {
    if (!initialized) {
      otherData.forEach(item => {
        borderWidthAnim.current[item.id] = new Animated.Value(item.id === selected ? moderateScale(90) : moderateScale(16));
      });
      setInitialized(true);
    } else {
      otherData.forEach(item => {
        Animated.timing(borderWidthAnim.current[item.id], {
          toValue: item.id === selected ? moderateScale(90) : moderateScale(16),
          duration: 300,
          useNativeDriver: false
        }).start();
      });
    }
  }, [selected, otherData, initialized]);


  return { navigateTo, selected, setSelected, otherData, borderWidthAnim }
}

export { useAppointmentDetails }
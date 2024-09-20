import React from "react";
import { FlatList } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native"
import { DrawerStackScreenProps, VitalSign } from "../../../../../routes/type"


const useVitalSign = () => {
    const { params: { data, selectedID = 1, index = 0 } } = useRoute<RouteProp<DrawerStackScreenProps, 'VitalSigns'>>();
    const [selected, setSelected] = React.useState<number>(selectedID);
    const [visible, setVisible] = React.useState<boolean>(false);
    const setTopLabel = (id: number) => setSelected(id);
    const closeModal = () => setVisible(false);
    const openModal = () => setVisible(true);
    const flatListRef = React.useRef<FlatList>(null);

    // Filter data based on selected key
    const getDataBasedOnId = (id: number) => data?.filter((e: VitalSign) => e?.id === id);

    // set the selected value and animate to that id's index 
    const handleSelection = (id: number, index: number) => {
        setTopLabel(id);
        flatListRef.current!.scrollToIndex({ animated: true, index });
    }
    return { data, selected, setTopLabel, flatListRef, getDataBasedOnId, handleSelection, visible, closeModal, openModal }
}
export { useVitalSign }
import React from "react";
import Modal from "react-native-modal";
import { Colors } from "../../../../../constants";
import { moderateScale } from "react-native-size-matters";
import { BackArrowSvg } from "../../../../../../assets/svg";
import { commonStyles, fontStyles } from "../../../../../styles";
import { SCREEN_HEIGHT } from "../../../../../constants/responsive";
import RadioButton from "../../../../../components/radio-button/radio-button";
import { FlatList, Pressable, StyleSheet, Text, View, Animated } from "react-native";
import { CustomButton, Header, TakeSpace } from "../../../../../components";

interface DataProps {
    id: number;
    label: string;
}

interface VitalSignsFilterProps {
    isVisible: boolean;
    closeModal: () => void;
}

const LeftData: DataProps[] = [
    { id: 1, label: "Time" },
    { id: 2, label: "Sort" },
];

const TypeData: DataProps[] = [
    { id: 1, label: "Last week" },
    { id: 2, label: "Last 30 days" },
    { id: 3, label: "Last 6 months" },
    { id: 4, label: "Last year" },
];

const StatusData: DataProps[] = [
    { id: 1, label: "Booked" },
    { id: 2, label: "Rescheduled" },
    { id: 3, label: "Cancelled" }
];

const VitalSignsFilter: React.FC<VitalSignsFilterProps> = ({ isVisible, closeModal }) => {
    const handleClose = () => {
        closeModal();
        setSelected({ left: 1, right: 1 });
    };

    const [selected, setSelected] = React.useState<{ left: number; right: number }>({ left: 1, right: 1 });
    const [selectionHistory, setSelectionHistory] = React.useState<{ [key: number]: number }>({ 1: 1, 2: 1 });
    const borderWidthAnim = React.useRef<{ [key: number]: Animated.Value }>({});

    React.useEffect(() => {
        LeftData.forEach(item => {
            borderWidthAnim.current[item.id] = new Animated.Value(item.id === selected.left ? moderateScale(30) : moderateScale(10));
        });
    }, []);

    React.useEffect(() => {
        LeftData.forEach(item => {
            Animated.timing(borderWidthAnim.current[item.id], {
                toValue: item.id === selected.left ? moderateScale(30) : moderateScale(10),
                duration: 300,
                useNativeDriver: false
            }).start();
        });
    }, [selected.left]);

    React.useEffect(() => {
        setSelected(prev => ({ ...prev, right: selectionHistory[selected.left] }));
    }, [selected.left]);

    const handleRadioButton = (id: number) => {
        setSelectionHistory(prevState => ({ ...prevState, [selected.left]: id }));
        setSelected(prev => ({ ...prev, right: id }));
    };

    const renderLeftSide = React.useCallback(({ item }: { item: DataProps }) => {
        const isSelected = selected.left === item.id;
        const borderWidth = borderWidthAnim.current[item.id];
        return (
            <Pressable onPress={() => setSelected(prev => ({ ...prev, left: item.id }))}>
                <Text style={[styles.txt, isSelected && styles.selectTxt]}>{item.label}</Text>
                <Animated.View style={[styles.bottBord, isSelected && styles.selctBottBord, { width: borderWidth }]} />
            </Pressable>
        );
    }, [selected.left]);

    const renderRightSide = React.useCallback(({ item }: { item: DataProps }) => {
        const isSelected = selected.right === item.id;
        return (
            <Pressable
                style={[commonStyles.RowJFSAC, { columnGap: moderateScale(6) }]}
                onPress={() => handleRadioButton(item.id)}
            >
                <RadioButton isSelected={isSelected} />
                <Text style={fontStyles.notoSansMedium14}>{item.label}</Text>
            </Pressable>
        );
    }, [selected.right, selected.left]);

    const getDataBasedOnSelection = React.useCallback((key: number) => {
        switch (key) {
            case 1: return TypeData;
            case 2: return StatusData;
            default: return TypeData;
        }
    }, []);

    const renderFilter = () => (
        <View style={commonStyles.flexRow}>
            <FlatList
                data={LeftData}
                renderItem={renderLeftSide}
                keyExtractor={item => item.id.toString()}
                scrollEnabled={false}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => <TakeSpace space={10} />}
                style={{ backgroundColor: Colors.offWhite, flexBasis: "25%" }}
            />
            <View style={styles.verticalLine} />
            <FlatList
                data={getDataBasedOnSelection(selected.left)}
                renderItem={renderRightSide}
                keyExtractor={item => item.id.toString()}
                scrollEnabled={false}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => <TakeSpace space={10} />}
                style={{ backgroundColor: Colors.offWhite, flexBasis: "75%", paddingLeft: moderateScale(15), paddingTop: moderateScale(6) }}
            />
        </View>
    );

    return (
        <Modal
            useNativeDriver
            animationInTiming={500}
            style={{ margin: 0, padding: 0, backgroundColor: Colors.offWhite }}
            animationIn="slideInUp"
            isVisible={isVisible}
            onBackdropPress={handleClose}
            onBackButtonPress={handleClose}
        >
            <Header icon={BackArrowSvg} label="Filter" onPress={handleClose} />
            <View style={styles.container}>
                <FlatList data={[1]} renderItem={renderFilter} showsVerticalScrollIndicator={false} />
            </View>
            <View style={styles.sbtBtns}>
                <CustomButton
                    label="Reset"
                    extraCusBtnStyle={[{ width: "48%", backgroundColor: Colors.offBlack5 }]}
                    extraCusTxtStyle={[{ color: Colors.offBlack }]}
                    onPress={closeModal}
                />
                <CustomButton label="Apply" extraCusBtnStyle={[{ width: "48%" }]} onPress={closeModal} />
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    sbtBtns: { ...commonStyles.RowJSBAC, padding: moderateScale(14), backgroundColor: Colors.offWhite, borderTopWidth: moderateScale(1), borderTopColor: Colors.offBlack25 },
    container: { ...commonStyles._flexOneBg(Colors.offWhite), padding: moderateScale(16) },
    bottBord: { backgroundColor: Colors.offBlack50, height: moderateScale(1) },
    selctBottBord: { backgroundColor: Colors.primaryColor, height: moderateScale(2) },
    txt: { ...fontStyles.notoSansRegular16, opacity: 0.75 },
    selectTxt: { ...fontStyles.notoSansMedium16, opacity: 0.75 },
    verticalLine: { height: SCREEN_HEIGHT * 0.8, borderRightColor: Colors.offBlack5, borderWidth: moderateScale(0.5), opacity: 0.1 }
});

export default VitalSignsFilter;

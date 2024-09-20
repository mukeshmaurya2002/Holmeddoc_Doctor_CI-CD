import React from 'react';
import { Colors } from '../../constants';
import { commonStyles, fontStyles } from '../../styles';
import { moderateScale } from 'react-native-size-matters';
import { FlatList, Pressable, StyleSheet, Text, View, ViewStyle, TextStyle, ListRenderItem } from 'react-native';

interface ToggleButtonProps {
    options: string[];
    initialSelection?: string;
    onToggle?: (selection: string) => void;
    containerStyle?: ViewStyle;
    textStyle?: TextStyle;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({
    options,
    initialSelection = options[0],
    onToggle,
    containerStyle,
    textStyle,
}) => {
    const [selected, setSelected] = React.useState<string>(initialSelection);

    const handleToggle = (selection: string) => {
        if (selected == selection) return;
        setSelected(selection);
        onToggle?.(selection);
    };

    const renderItem: ListRenderItem<string> = React.useCallback(({ item }) => (
        <Pressable
            style={[styles.button, selected === item && styles.selectedButton]}
            onPress={() => handleToggle(item)}
        >
            <Text style={[styles.unselectedText, textStyle, selected === item && styles.selectedText]}>
                {item}
            </Text>
        </Pressable>
    ), [selected]);

    return (
        <View style={[styles.container, containerStyle]}>
            <FlatList
                data={options}
                renderItem={renderItem}
                keyExtractor={(item) => item}
                numColumns={2}
                scrollEnabled={false}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ flex: 1 }}
            />
        </View>
    );
};

export default ToggleButton;

const styles = StyleSheet.create({
    container: {
        // width: '100%',
        borderRadius: moderateScale(5),
        borderWidth: moderateScale(1),
        borderColor: Colors.borderColor,
        padding: moderateScale(6)
    },
    button: {
        width: '50%',
        ...commonStyles.centerJCAC,
        borderRadius: moderateScale(4),
        padding: moderateScale(8),
    },
    selectedButton: {
        backgroundColor: Colors.offWhite,
        borderWidth: moderateScale(1),
        borderColor: Colors.secondaryColor,
    },
    selectedText: {
        ...fontStyles.notoSansSemiBold12,
        color: Colors.secondaryColor,
    },
    unselectedText: {
        ...fontStyles.notoSansMedium12,
        color: Colors.offBlack75,
    },
});

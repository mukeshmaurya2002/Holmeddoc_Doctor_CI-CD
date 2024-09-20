import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../constants';

const CustomDayComponent = ({ date, state, marking }) => {
    const isSelected = marking && marking.selected;
    const isToday = state === 'today';

    return (
        <View
            style={[
                styles.dayContainer,
                isSelected && styles.selectedDay,
                isToday && styles.today,
            ]}
        >
            <Text
                style={[
                    styles.dayText,
                    isSelected && styles.selectedDayText,
                    isToday && styles.todayText,
                ]}
            >
                {date.day}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    dayContainer: {
        width: 32, // Adjust size as needed
        height: 32, // Adjust size as needed
        justifyContent: 'center',
        alignItems: 'center',
    },
    selectedDay: {
        backgroundColor: Colors.fadedSecondary,
    },
    today: {
        backgroundColor: Colors.secondaryColor,
    },
    dayText: {
        color: Colors.offBlack,
    },
    selectedDayText: {
        color: Colors.secondaryColor,
    },
    todayText: {
        color: Colors.secondaryColor,
    },
});

export default CustomDayComponent;

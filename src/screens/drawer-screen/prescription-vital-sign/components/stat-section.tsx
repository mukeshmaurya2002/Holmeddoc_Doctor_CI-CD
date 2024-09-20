import React from "react";
import { Text, View } from "react-native";
import { Colors } from "../../../../constants";
import { VitalKey } from "../../../../utility/type";
import { moderateScale } from "react-native-size-matters";
import { commonStyles, fontStyles } from "../../../../styles";
import Animated, { useAnimatedStyle, useSharedValue } from "react-native-reanimated";

interface StatData {
    id: number;
    day: string;
    value: string;
    key: VitalKey;
};

const vitalColor: Record<VitalKey, string> = {
    Weight: Colors.greenCyanBg,
    height: Colors.pinkBg,
    pulse: Colors.blueBg,
    resp: Colors.fadedOrangeBg,
    pain: Colors.greenBG,
    SPO2: Colors.purpleBg,
    BP: Colors.orangeBg,
    temp: Colors.regBg
};
const StatItem: React.FC<{ item: StatData }> = ({ item }) => {

    const sharedHeight = useSharedValue(Number(item?.value.replace('%', '')));
    const borderRadiusValue = moderateScale(4);
    const getBackColor = vitalColor[item.key]

    const animatedStyle = useAnimatedStyle(() => {
        return {
            height: `${sharedHeight?.value}%`,
            width: '100%',
            backgroundColor: getBackColor,
            position: 'absolute',
            bottom: 0,
            borderRadius: borderRadiusValue,
        };
    });

    return (
        <View style={[commonStyles.columnJCAC]}>
            <View style={{ height: moderateScale(40), width: moderateScale(8), position: 'relative' }}>
                <Animated.View style={animatedStyle} />
            </View>
            <Text style={fontStyles.notoSansMedium10}>{item.day}</Text>
        </View>
    );
};

export default React.memo(StatItem);
import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { commonStyles, fontStyles } from '../../styles';
import { ForwardArrow } from '../../../assets/svg';
import { moderateScale } from 'react-native-size-matters';
import TakeSpace from '../take-space/take-space';
import BorderBottom from '../bottom-border/border-bottom';

type FieldBoxProps = {
    icon?: any;
    title?: string;
    description?: string;
    showBottomBorder?: boolean;
    onPress?: () => void;
};

const FieldBox = (props: FieldBoxProps) => {
    const { icon, title, description, showBottomBorder, onPress } = props;
    return (
        <View style={styles.container}>
            <Pressable style={styles.row} onPress={onPress}>
                <View style={styles.rowLeft}>
                    {React.createElement(icon)}
                    <Text style={fontStyles.notoSansMedium14}>
                        {title}
                    </Text>
                </View>
                <View>
                    <ForwardArrow />
                </View>
            </Pressable>
            {description && <Text style={styles.description}>{description}</Text>}
            {showBottomBorder && <BorderBottom />}
        </View>
    );
};

export default FieldBox;

const styles = StyleSheet.create({
    container: {
        paddingVertical: moderateScale(10),
        paddingHorizontal: moderateScale(15),
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: moderateScale(8),
    },
    rowLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: moderateScale(12),
    },
    description: {
        ...fontStyles.notoSansRegular12,
        marginTop: moderateScale(4),
    },
});

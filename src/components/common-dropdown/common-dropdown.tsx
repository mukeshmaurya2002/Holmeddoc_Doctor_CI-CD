import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Dropdown } from 'react-native-element-dropdown';
import { helpers } from '../../utility/helpers';
import { SCREEN_WIDTH } from '../../constants/responsive';
import { Colors } from '../../constants';
import { moderateScale } from 'react-native-size-matters';
import { fontStyles } from '../../styles';
import ErrorHelper from '../error-helper/error-helper';

interface CommonDropdownProps {
    data?: { label: string, value: string }[];
    placeHolder: string,
    errorMessg?: string;
    onChange: (item: { label: string; value: string; }) => void;
    onBlur: () => void;
    select: string;
}

const CommonDropdown = (props: CommonDropdownProps) => {
    const { data, placeHolder, onChange, errorMessg, onBlur, select } = props;

    const handleChange = (item: { label: string; value: string; }) => {
        onChange(item)
    };

    const genderData = [
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
        { label: 'Other', value: 'other' }
    ]
    return (
        <View>
            <Dropdown
                style={[styles.dropdownTest]}
                placeholderStyle={[styles.placeHolder, { color: Colors.offBlack50 }]}
                selectedTextStyle={[styles.placeHolder]}
                activeColor={Colors.offBlack25}
                itemTextStyle={fontStyles.notoSansMedium12}
                data={data ? data : genderData}
                dropdownPosition='auto'
                search={false}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={placeHolder}
                value={select}
                onChange={handleChange}
                onBlur={onBlur}
                showsVerticalScrollIndicator={false}
                flatListProps={{ nestedScrollEnabled: false }}
                iconStyle={{ tintColor: Colors.secondaryColor }}
            />
            {errorMessg &&
                <ErrorHelper errorMsg={errorMessg} />
            }
        </View>
    )
}

export default CommonDropdown

const styles = StyleSheet.create({
    dropdownTest: {
        height: helpers.isIos ? moderateScale(46) : moderateScale(50),
        width: SCREEN_WIDTH * 0.90,
        backgroundColor: Colors.offBlack5,
        paddingHorizontal: moderateScale(8),
        borderRadius: moderateScale(4), borderWidth: moderateScale(0.8),
        borderColor: Colors.offBlack5
    },
    placeHolder: { ...fontStyles.notoSansMedium12, marginLeft: moderateScale(6) },
})
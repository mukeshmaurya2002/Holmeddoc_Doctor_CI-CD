import { Text, View } from 'react-native'
import React from 'react'
import { styles } from '../styles'
import { Colors } from '../../../../../../constants';
import { Dropdown } from 'react-native-element-dropdown';
import { fontStyles } from '../../../../../../styles';


interface CommonDropdownProps { value: string, data: { label: string, value: string }[]; onChange: (value: any) => void, label: string, applyDropStyle3?: boolean }
const CommonDropdown = (props: CommonDropdownProps) => {
    const { value, data, onChange, label, applyDropStyle3 = false } = props
    return (
        <View style={{}}>
            <Text style={styles.fieldTxt}>{label}</Text>
            <Dropdown
                style={applyDropStyle3 ? styles.dropdownTest3 : styles.dropdownTest}
                placeholderStyle={[styles.placeHolder, { color: Colors.offBlack50 }]}
                selectedTextStyle={[styles.placeHolder]}
                activeColor={Colors.offBlack25}
                itemTextStyle={fontStyles.notoSansRegular12}
                data={data}
                dropdownPosition='auto'
                search={false}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={"select"}
                value={value}
                onChange={onChange}
                showsVerticalScrollIndicator={false}
                flatListProps={{ nestedScrollEnabled: false }}
                iconStyle={{ tintColor: Colors.secondaryColor }}
            />
        </View>
    )
}

export default CommonDropdown
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PieChart } from 'react-native-svg-charts';
import { G, Text as SvgText, Path } from 'react-native-svg';
import { Colors } from '../../constants';
import { moderateScale } from 'react-native-size-matters';
import { fontStyles } from '../../styles';
import { helpers } from '../../utility/helpers';
import { Dropdown } from 'react-native-element-dropdown';

const CustomSlice = ({ value, color, pathData }: { value: any, color: any, pathData: any }) => (
    <Path d={pathData} fill={color} />
);

const getPieChartDataRounded = () => {
    const color = ["#76BC21", "#FACC15"];
    const data = [40, 60];
    const paths = [
        // SVG paths for the 75% slice
        `M173 95.5C184.046 95.5 193.208 104.548 190.935 115.357C188.412 127.353 183.615 138.819 176.737 149.113C166.133 164.982 151.062 177.351 133.429 184.654C115.796 191.958 96.393 193.869 77.6738 190.146C58.9546 186.422 41.76 177.232 28.2642 163.736C14.7684 150.24 5.57769 133.045 1.85422 114.326C-1.86925 95.607 0.0417687 76.2041 7.34563 58.571C14.6495 40.938 27.0181 25.8667 42.8875 15.2632C53.1808 8.38538 64.6471 3.58761 76.6425 1.06516C87.4518 -1.20786 96.5 7.95431 96.5 19V75.5C96.5 86.5457 105.454 95.5 116.5 95.5H173Z`
    ];

    return data.map((item, index) => ({
        key: index,
        value: item,
        CustomSlice: CustomSlice,
        svg: { fill: color[index] },
        arc: { cornerRadius: 8 },
        label: `${item}%`,
    }));
};


const Labels = ({ slices }) => {
    return slices.map((slice, index) => {
        const { pieCentroid, data } = slice;
        return (
            <G key={index}>
                <SvgText
                    x={pieCentroid[0]}
                    y={pieCentroid[1]}
                    fill="white"
                    textAnchor="middle"
                    alignmentBaseline="middle"
                    fontSize={16}
                    fontWeight="bold"
                >
                    {data.label}
                </SvgText>
            </G>
        );
    });
};

export const PieChartComponent = ({ data }) => {
    const pieChartDataRounded = getPieChartDataRounded(data);
    const yearData = [
        {
            id: 1,
            label: '2021'
        },
        {
            id: 2,
            label: '2022'
        },
        {
            id: 3,
            label: '2023'
        },
        {
            id: 4,
            label: '2024'
        },
    ];
    const [selectedYear, setSelectedYear] = React.useState(1);

    return (
        <View style={{ padding: moderateScale(20) }}>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: moderateScale(10) }}>
                <Text style={fontStyles.notoSansSemiBold16}>Appointment</Text>

                <View style={{
                    height: 1,
                    width: moderateScale(120),
                    backgroundColor: Colors.borderColor,
                }} />
                <View style={{}}>
                    <Dropdown
                        style={[styles.dropdownTest]}
                        placeholderStyle={[styles.placeHolder, { color: Colors.secondaryHighOpacity }]}
                        selectedTextStyle={[styles.placeHolder]}
                        activeColor={Colors.secondaryHighOpacity}
                        itemTextStyle={fontStyles.notoSansRegular12}
                        data={yearData}
                        dropdownPosition='auto'
                        search={false}
                        maxHeight={300}
                        labelField="label"
                        valueField="id"
                        value={selectedYear}
                        onChange={
                            (value) => setSelectedYear(value)
                        }
                        showsVerticalScrollIndicator={false}
                        flatListProps={{ nestedScrollEnabled: false }}
                        iconStyle={{ tintColor: Colors.secondaryColor }}
                    />
                </View>
            </View>
            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: moderateScale(20) }}>
                <View style={{ display: "flex", flexDirection: "row", alignItems: "flex-end" }}>
                    <PieChart
                        style={{ height: moderateScale(200), width: moderateScale(200) }}
                        data={pieChartDataRounded}
                        innerRadius={moderateScale(60)}
                        outerRadius={moderateScale(100)}
                        sort={(a, b) => b.key - a.key}
                        startAngle={27} // Start angle set to 0 degrees
                    >
                        <Labels slices={undefined} />
                    </PieChart>
                    <View style={{ marginTop: moderateScale(20), alignSelf: "flex-end", gap: moderateScale(10), marginLeft: moderateScale(14) }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: moderateScale(15) }}>
                            <View style={{ width: moderateScale(12), height: moderateScale(12), backgroundColor: "#76BC21", marginRight: moderateScale(5), borderRadius: moderateScale(4) }} />
                            <Text style={fontStyles.notoSansMedium12}>Clinic consulting</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ width: moderateScale(12), height: moderateScale(12), backgroundColor: "#FACC15", marginRight: moderateScale(5), borderRadius: moderateScale(4) }} />
                            <Text style={fontStyles.notoSansMedium12}>Video consulting</Text>
                        </View>
                    </View>
                </View>


            </View>


        </View>
    );
};

const styles = StyleSheet.create({
    fieldTxt: {
        ...fontStyles.notoSansSemiBold12,
        paddingVertical: moderateScale(6),
        paddingLeft: moderateScale(4),
    },
    dropdownTest: {
        height: helpers.isIos ? moderateScale(46) : moderateScale(36),
        width: moderateScale(80),
        backgroundColor: Colors.secondaryHighOpacity,
        paddingHorizontal: moderateScale(8),
        borderRadius: moderateScale(8),
        // borderWidth: moderateScale(0.8),
        // borderColor: Colors.offBlack5
    },
    placeHolder: { ...fontStyles.notoSansSemiBold12, marginLeft: moderateScale(6), color: Colors.secondaryColor },
})

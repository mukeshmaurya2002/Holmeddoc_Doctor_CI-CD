import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LineChart, BarChart, Grid, XAxis, YAxis } from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import { Circle, G, Line, Rect, Text as SvgText } from 'react-native-svg';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import LineArrowSvg from '../../../assets/svg/home-screen/line-arrow';
import { Colors } from '../../constants';
import { Dropdown } from 'react-native-element-dropdown';
import { fontStyles } from '../../styles';
import { moderateScale } from 'react-native-size-matters';
import { helpers } from '../../utility/helpers';
import { TakeSpace } from '../../components';

const LineChartWithBars = () => {
    const data = [700, 500, 600, 800, 700, 400];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

    const [tooltip, setTooltip] = useState({ x: 0, y: 0, value: 0, visible: false });

    const Decorator = ({ x, y, data }: { x: any, y: any, data: any }) => {
        return data.map((value: any, index: any) => (
            <Circle
                key={index}
                cx={x(index)}
                cy={y(value)}
                r={4}
                stroke={Colors.primaryColor}
                fill={'white'}
            />
        ));
    };

    const Tooltip = ({ x, y, value }: { x: any, y: any, value: any }) => (
        <G x={x} y={y}>
            <Rect
                x={-30}
                y={-40}
                width={60}
                height={30}
                fill="black"
                opacity={0.8}
                rx={5}
                ry={5}
            />
            <SvgText
                x={0}
                y={-20}
                textAnchor="middle"
                alignmentBaseline="middle"
                fontSize={14}
                stroke="white"
                fill="white"
            >
                {value}
            </SvgText>
        </G>
    );

    const handleGestureEvent = ({ nativeEvent }: { nativeEvent: any }) => {
        const { x, y } = nativeEvent;
        const index = Math.round(x / (chartWidth / data.length));
        if (index >= 0 && index < data.length) {
            setTooltip({
                x: x,
                y: y,
                value: data[index],
                visible: true,
            });
        }
    };

    const handleStateChange = ({ nativeEvent }: { nativeEvent: any }) => {
        if (nativeEvent.state === State.END) {
            setTooltip({ ...tooltip, visible: false });
        }
    };

    const chartWidth = 300;
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
        <>
            <View style={{ padding: moderateScale(20) }}>
                <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: moderateScale(10) }}>
                    <Text style={fontStyles.notoSansSemiBold16}>
                        Payment
                    </Text>

                    <View style={{
                        height: 1,
                        width: moderateScale(150),
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
                <TakeSpace space={10} />
                <View style={{ alignSelf: "center", backgroundColor: Colors.secondaryOpacity5, padding: moderateScale(10), borderRadius: moderateScale(4), rowGap: moderateScale(4) }}>
                    <Text style={[fontStyles.notoSansBold14, { textAlign: "center" }]}>$ 14,000</Text>
                    <Text style={[fontStyles.notoSansRegular12, { textAlign: "center" }]}>
                        My Total Earnings
                    </Text>
                </View>
            </View>
            <View style={{ flexDirection: 'column', height: 400, padding: 20 }}>
                <View style={{ height: 300, flexDirection: 'row' }}>
                    <YAxis
                        data={data}
                        style={{ marginBottom: 10 }}
                        contentInset={{ top: 10, bottom: 10 }}
                        svg={{ fontSize: 10, fill: 'grey' }}
                        numberOfTicks={6}
                        formatLabel={(value) => `${value}`}
                    />
                    <View style={{ flex: 1, marginLeft: 10 }}>
                        <BarChart
                            style={StyleSheet.absoluteFill}
                            data={data}
                            svg={{ fill: 'rgba(0, 130, 130, .05)' }}
                            contentInset={{ top: 10, bottom: 10 }}
                            yAccessor={({ item }) => item}
                            //gap 
                            spacingInner={0.2}
                            xAccessor={({ item, index }) => index}
                        />
                        <LineChart
                            style={{ flex: 1 }}
                            data={data}
                            svg={{ stroke: Colors.primaryColor }}
                            contentInset={{ top: 10, bottom: 10, left: 10, right: 10 }}
                            curve={shape.curveNatural}
                        >
                            <Grid
                                svg={{
                                    stroke: '#1E1E1E',
                                    strokeOpacity: 0.02,
                                    strokeDasharray: [4, 4],

                                }}
                            />

                            <Decorator x={undefined} y={undefined} data={undefined} />
                            {/* {tooltip.visible && <Tooltip x={tooltip.x} y={tooltip.y} value={tooltip.value} />} */}
                        </LineChart>


                    </View>
                </View>
                <LineArrowSvg />
                <View style={{ paddingLeft: 26, paddingRight: 10 }}>
                    <XAxis
                        data={data}
                        formatLabel={(value, index) => months[index]}
                        scale={shape.scaleBand}
                        contentInset={{ left: 10, right: 10 }}
                        svg={{ fontSize: 10, fill: 'grey' }}
                    />
                </View>

                {/* <PanGestureHandler
                onGestureEvent={handleGestureEvent}
                onHandlerStateChange={handleStateChange}
            >
                <View style={StyleSheet.absoluteFill} />
            </PanGestureHandler> */}
            </View>
        </>
    );
};

export default LineChartWithBars;
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

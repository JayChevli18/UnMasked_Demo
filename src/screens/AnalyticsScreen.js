import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Dimensions, SafeAreaView, } from 'react-native';
//import { LineChart } from 'react-native-chart-kit';
import { BarChart, LineChart, PieChart, PopulationPyramid } from "react-native-gifted-charts";
import { SelectList } from "react-native-dropdown-select-list";
import LinearGradient from 'react-native-linear-gradient';

export const AnalyticsScreen = () => {

    const { width } = Dimensions.get("window");
    const [selected, setSelected] = useState("");
    const options = ["Last 7 Days", "Last Month", "Last Year"];

    const data = [
        { value: Math.random() * 100, label: "Sun" },
        { value: Math.random() * 100, label: "Mon" },
        { value: Math.random() * 100, label: "Tue" },
        { value: Math.random() * 100, label: "Wed" },
        { value: Math.random() * 100, label: "Thu" },
        { value: Math.random() * 100, label: "Fri" },
        { value: Math.random() * 100, label: "Sat" },
    ];
    const data1 = [
        { value: Math.random() * 100, },
        { value: Math.random() * 100, },
        { value: Math.random() * 100, },
        { value: Math.random() * 100, },
        { value: Math.random() * 100, },
        { value: Math.random() * 100, },
        { value: Math.random() * 100, },
    ];
    const data2 = [
        { value: Math.random() * 100, },
        { value: Math.random() * 100, },
        { value: Math.random() * 100, },
        { value: Math.random() * 100, },
        { value: Math.random() * 100, },
        { value: Math.random() * 100, },
        { value: Math.random() * 100, },
    ];


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
            <View style={{ width: "50%", padding: 20 }}>
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={["#FBB4D1", "#BF9EF2"]} style={{ borderRadius: 10, }}>
                    <SelectList inputStyles={{ color: "white", fontSize: 15, }} dropdownTextStyles={{ color: "black" }} dropdownStyles={{ color: "white", position: "absolute", width: "100%", top: 40, backgroundColor: "white", zIndex: 999, }} setSelected={setSelected} data={options} />
                </LinearGradient>
                <Text style={{ fontSize: 24, marginTop: 16, color: "black" }}>1.3M</Text>
                <Text style={{ fontSize: 16, color: "black" }}>Post Views</Text>
            </View>
            <View style={{ alignItems: 'center', backgroundColor: "white", }}>
                <LineChart
                    data={data}
                    height={120}
                    animationDuration={1000}
                    animateOnDataChange
                    isAnimated
                    onDataChangeAnimationDuration={300}
                    width={width}
                    endSpacing={20}
                    color="rgb(192, 84, 234)"
                    maxValue={100}
                    noOfSections={1}
                    areaChart
                    curved
                    hideRules={true}
                    hideYAxisText={true}
                    hideDataPoints={true}
                    startFillColor={'rgba(192, 84, 234, 0.5)'}
                    endFillColor={'rgba(255, 255, 255, 1)'}
                    startOpacity={1}
                    endOpacity={0.2}
                    spacing={width / 7} // Adjusted spacing
                    initialSpacing={20} // Adjusted initialSpacing
                    backgroundColor="#ffffff"
                    yAxisColor="white"
                    xAxisColor="white"
                />
            </View>
            <View style={{ padding: 5, marginTop: 20 }}>
                <View style={styles.textInput}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <View style={{ alignItems: "flex-start" }}>
                            <Text>Earnings</Text>
                            <Text style={{ fontSize: 20, color: "black", fontWeight: "bold" }}>$125.2K</Text>
                        </View>
                        <View style={{ justifyContent: "flex-start" }}>
                            <LineChart
                                data={data1}
                                height={30}
                                animationDuration={1000}
                                animateOnDataChange
                                isAnimated
                                onDataChangeAnimationDuration={300}
                                adjustToWidth
                                endSpacing={20}
                                color="rgb(192, 84, 234)"
                                maxValue={100}
                                noOfSections={1}
                                areaChart
                                curved
                                hideRules={true}
                                hideYAxisText={true}
                                hideDataPoints={true}
                                startFillColor={'rgba(192, 84, 234, 0.5)'}
                                endFillColor={'rgba(255, 255, 255, 1)'}
                                startOpacity={1}
                                endOpacity={0.2}
                                spacing={width / 14} // Adjusted spacing
                                initialSpacing={60} // Adjusted initialSpacing
                                backgroundColor="#ffffff"
                                yAxisColor="white"
                                xAxisColor="white"
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.textInput}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <View style={{ alignItems: "flex-start" }}>
                            <Text>Subscribers</Text>
                            <Text style={{ fontSize: 20, color: "black", fontWeight: "bold" }}>25.2K</Text>
                        </View>
                        <View style={{ justifyContent: "flex-start" }}>
                            <LineChart
                                data={data2}
                                height={30}
                                animationDuration={1000}
                                animateOnDataChange
                                isAnimated
                                onDataChangeAnimationDuration={300}
                                adjustToWidth
                                endSpacing={20}
                                color="rgb(192, 84, 234)"
                                maxValue={100}
                                noOfSections={1}
                                areaChart
                                curved
                                hideRules={true}
                                hideYAxisText={true}
                                hideDataPoints={true}
                                startFillColor={'rgba(192, 84, 234, 0.5)'}
                                endFillColor={'rgba(255, 255, 255, 1)'}
                                startOpacity={1}
                                endOpacity={0.2}
                                spacing={width / 14} // Adjusted spacing
                                initialSpacing={60} // Adjusted initialSpacing
                                backgroundColor="#ffffff"
                                yAxisColor="white"
                                xAxisColor="white"
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.textInput}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <View style={{ alignItems: "flex-start" }}>
                            <Text>Followers</Text>
                            <Text style={{ fontSize: 20, color: "black", fontWeight: "bold" }}>25M</Text>
                        </View>
                        <View style={{ justifyContent: "flex-start" }}>
                            <LineChart
                                data={data1}
                                height={30}
                                animationDuration={1000}
                                animateOnDataChange
                                isAnimated
                                onDataChangeAnimationDuration={300}
                                adjustToWidth
                                endSpacing={20}
                                color="rgb(192, 84, 234)"
                                maxValue={100}
                                noOfSections={1}
                                areaChart
                                curved
                                hideRules={true}
                                hideYAxisText={true}
                                hideDataPoints={true}
                                startFillColor={'rgba(192, 84, 234, 0.5)'}
                                endFillColor={'rgba(255, 255, 255, 1)'}
                                startOpacity={1}
                                endOpacity={0.2}
                                spacing={width / 14} // Adjusted spacing
                                initialSpacing={60} // Adjusted initialSpacing
                                backgroundColor="#ffffff"
                                yAxisColor="white"
                                xAxisColor="white"
                            />
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    textInput: {
        margin: 12,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 20,
    },

})
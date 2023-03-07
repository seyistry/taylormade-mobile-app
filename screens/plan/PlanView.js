import { useState, useEffect, useRef } from "react";
import { FlatList, Dimensions, Button } from "react-native";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Agenda, calendarTheme } from "react-native-calendars";
import PlanActivityCard from "../../components/card/PlanActivityCard";
import SingleDateCard from "../../components/card/SingleDateCard";
import { blackBg, blueBg, greyHeader, white } from "../../utils/color";
import { dateArrRange, days } from "../../utils/dateRange";

const windowWidth = Dimensions.get("window").width;
export default function PlanView({ navigation }) {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const refContainer = useRef(true);

    const handleSubmit = () => {
        navigation.navigate("workout");
    };
    useEffect(() => {
        if (refContainer.current) {
            refContainer.current.scrollToIndex({
                animated: true,
                index: 28,
                viewPosition: 0,
            });
        }

        setTimeout(() => (refContainer.current = false), 5000);
    });

    const separators = () => <View style={{ width: windowWidth * 0.03 }} />;
    return (
        <View style={styles.container}>
            <View style={{ paddingVertical: 20, backgroundColor: greyHeader }}>
                <Text
                    style={[
                        styles.textWhite,
                        { fontFamily: "LatoB", fontSize: 18, paddingLeft: 20 },
                    ]}
                >
                    WEIGHT LOSS PLAN
                </Text>
            </View>
            <View
                style={{
                    marginHorizontal: "5%",
                    marginTop: 30,
                    marginBottom: 20,
                }}
            >
                <FlatList
                    ref={refContainer}
                    horizontal={true}
                    data={dateArrRange}
                    renderItem={({ item, index }) => (
                        <SingleDateCard
                            key={index}
                            dayOfWeek={days[item.getDay()]}
                            dayOfMonth={item.getDate()}
                            selectedDate={selectedDate}
                            index={item}
                            onPress={() => setSelectedDate(item)}
                        />
                    )}
                    keyExtractor={(item) => dateArrRange.indexOf(item)}
                    ItemSeparatorComponent={separators}
                    onScrollToIndexFailed={(info) => {
                        const wait = new Promise((resolve) =>
                            setTimeout(resolve, 500)
                        );
                        wait.then(() => {
                            refContainer.current?.scrollToIndex({
                                index: info.index,
                                animated: true,
                            });
                        });
                    }}
                />
            </View>
            <ScrollView style={{ flex: 1, backgroundColor: blackBg }}>
                <Text
                    style={[
                        styles.textWhite,
                        {
                            fontFamily: "LatoB",
                            fontSize: 16,
                            marginHorizontal: "5%",
                            // marginTop: 30,
                            marginBottom: 10,
                        },
                    ]}
                >
                    MAIN ACTIVITY
                </Text>
                <PlanActivityCard onPress={handleSubmit} />
                {/* <PlanActivityCard />
                <Text
                    style={[
                        styles.textWhite,
                        {
                            fontFamily: "LatoB",
                            fontSize: 16,
                            paddingLeft: 20,
                            marginTop: 30,
                            marginBottom: 10,
                        },
                    ]}
                >
                    ADDITIONAL ACTIVITY
                </Text>
                <PlanActivityCard /> */}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: blackBg,
    },
    textWhite: {
        color: white,
    },
});

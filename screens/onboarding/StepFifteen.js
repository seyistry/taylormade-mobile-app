import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { blackBg, white } from "../../utils/color";
import ButtonFill from "../../components/button/ButtonFill";
import BodyTypeCard from "../../components/card/BodyTypeCard";
import { useContext } from "react";
import { RegContext } from "../../utils/RegContext";
import { storeRegData } from "../../utils/api";

export default function StepFifteen({ navigation }) {
    const regLoaded = useContext(RegContext);
    const [id, setId] = useState(false);
    const [toggle, setToggle] = useState(null);

    const handleSubmit = () => {
        storeRegData({ walkout_location_id: id });
        navigation.navigate("STEP 16 OF 20");
    };
    return (
        <View style={styles.container}>
            <View
                style={{
                    height: "20%",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Text style={styles.text}>CHOOSE YOUR WORKOUT LOCATION</Text>
            </View>
            <View style={{ height: "60%" }}>
                {regLoaded[6].data.map((item) => {
                    return (
                        <BodyTypeCard
                            key={item.id}
                            name={item.name}
                            imageLink={item.image}
                            onPress={() =>
                                setId(() => {
                                    setToggle(true);
                                    return item.id;
                                })
                            }
                            fill={id === item.id ? true : false}
                        />
                    );
                })}
            </View>
            <View
                style={{
                    height: "20%",
                    justifyContent: "flex-end",
                    paddingBottom: 20,
                }}
            >
                <ButtonFill
                    name="CONTINUE"
                    fill={toggle}
                    disabled={!toggle}
                    onPress={handleSubmit}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: blackBg,
    },
    text: {
        color: white,
        textAlign: "center",
        fontFamily: "LatoXb",
        fontSize: 20,
        paddingHorizontal: "20%",
    },
});

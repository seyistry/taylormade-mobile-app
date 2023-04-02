import { StyleSheet, Text, View } from "react-native";
import { useState, useContext } from "react";
import { blackBg, white } from "../../utils/color";
import ButtonFill from "../../components/button/ButtonFill";
import BodyTypeCard from "../../components/card/BodyTypeCard";
import { RegContext } from "../../utils/RegContext";

const StepFour = ({ navigation }) => {
    const regLoaded = useContext(RegContext);
    const [id, setId] = useState(false);
    const [toggle, setToggle] = useState(null);

    const handleSubmit = () => {
        navigation.navigate("STEP 5 OF 20");
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
                <Text style={styles.text}>CHOOSE YOUR BODY TYPE</Text>
            </View>
            <View style={{ height: "60%" }}>
                {regLoaded[2].data
                    .sort((a, b) => {
                        if (a.id > b.id) {
                            return -1;
                        }
                    })
                    .map((item) => {
                        if (item.target === 0) {
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
                        }
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
};

export default StepFour;

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
        paddingHorizontal: "30%",
    },
});

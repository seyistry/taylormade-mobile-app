import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { greyText, white } from "../../utils/color";
import { useState } from "react";

const InputForm = (props) => {
    const [toggle, setToggle] = useState(true);
    const handleChange = () => {};
    return (
        <>
            <View
                style={[
                    styles.container,
                    { borderBottomColor: props.errorText ? "#ff3737" : white },
                ]}
            >
                {props.placeholder === "Password" ||
                props.placeholder === "Re-type password" ? (
                    <>
                        <Ionicons
                            name="lock-closed-outline"
                            size={18}
                            color={white}
                        />
                        <TextInput
                            style={styles.input}
                            placeholderTextColor={greyText}
                            secureTextEntry={toggle}
                            {...props}
                        />
                        {toggle ? (
                            <TouchableOpacity onPress={() => setToggle(false)}>
                                <Ionicons
                                    name="eye-outline"
                                    size={18}
                                    color={white}
                                />
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity onPress={() => setToggle(true)}>
                                <Ionicons
                                    name="eye-off-outline"
                                    size={18}
                                    color={white}
                                />
                            </TouchableOpacity>
                        )}
                    </>
                ) : props.placeholder === "Email" ? (
                    <>
                        <Ionicons name="mail-outline" size={18} color={white} />
                        <TextInput
                            style={styles.input}
                            placeholderTextColor={greyText}
                            {...props}
                        />
                        <Ionicons
                            name="eye-off-outline"
                            size={18}
                            color="rgba(52, 52, 52, 0.0)"
                        />
                    </>
                ) : (
                    <>
                        <Ionicons
                            name="person-outline"
                            size={18}
                            color={white}
                        />
                        {/* <Ionicons name="mail-outline" size={18} color={white} /> */}
                        <TextInput
                            style={styles.input}
                            placeholderTextColor={greyText}
                            {...props}
                        />
                        <Ionicons
                            name="eye-off-outline"
                            size={18}
                            color="rgba(52, 52, 52, 0.0)"
                        />
                    </>
                )}
            </View>
        </>
    );
};

export default InputForm;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: "6%",
        borderBottomWidth: 1,
        height: 50,
        marginBottom: 20,
    },
    input: {
        color: greyText,
        fontFamily: "LatoR",
        width: "84%",
        // paddingHorizontal: "5%",
    },
});

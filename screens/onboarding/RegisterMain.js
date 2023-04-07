import {
    Text,
    TouchableOpacity,
    View,
    ScrollView,
    Dimensions,
    Alert,
    Modal,
    ActivityIndicator,
} from "react-native";
import { useDispatch } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { blackBg, blueBg, white } from "../../utils/color";
import StyleSheet from "react-native-media-query";
import InputForm from "../../components/form/InputForm";
import ButtonFill from "../../components/button/ButtonFill";
import { useState, useEffect } from "react";
import { regUrl } from "../../utils/apiLinks";
import { addUser } from "../../features/auth/user";

const windowHeight = Dimensions.get("window").height;

const schema = yup
    .object({
        name: yup.string().min(6).required(),
        password: yup.string().min(6).required(),
        passwordConfirmation: yup
            .string()
            .oneOf([yup.ref("password"), null], "Passwords must match"),
        email: yup.string().email().required(),
    })
    .required();

const RegisterMain = ({ navigation }) => {
    // const dispatch = useDispatch();
    const [modalVisible, setModalVisible] = useState(false);

    const onSubmit = async (data) => {
        setModalVisible(true);
        delete data.passwordConfirmation;
        try {
            await fetch(regUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            }).then((response) => {
                response.json().then((data) => {
                    if (data.status) {
                        Alert.alert("Successful : ", data.message);
                        // dispatch(addUser(data));
                        navigation.reset({
                            index: 0,
                            routes: [{ name: "Login" }],
                        });
                        setModalVisible(false);
                    } else {
                        Alert.alert("Error : ", data.message);
                        setModalVisible(false);
                    }
                });
            });
        } catch (error) {
            console.error(error);
        }
    };

    const [email, setEmail] = useState(false);

    const {
        handleSubmit,
        control,
        watch,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            email: "",
            name: "",
            password: "",
            passwordConfirmation: "",
            goal_id: 1,
            motivation_id: 1,
            current_body_type_id: 5,
            current_weight: 90,
            target_body_type_id: 1,
            target_areas: ["PECS"],
            level_id: 2,
            daily_work: "LESS THAN 1 HOUR",
            pushups: "LESS THAN 1 HOUR",
            reason_id: 1,
            height: "182",
            target_weight: 75,
            age: 19,
            walkout_location_id: 1,
            plan_id: 1,
            status: 1,
        },
    });

    useEffect(() => {
        const subscription = watch((data) => {
            schema
                .isValid({
                    name: data.name,
                    email: data.email,
                    password: data.password,
                    passwordConfirmation: data.passwordConfirmation,
                })
                .then((valid) => {
                    if (valid) {
                        setEmail(true);
                    } else {
                        setEmail(false);
                    }
                });
        });
        return () => subscription.unsubscribe();
    }, [watch, email]);

    return (
        <>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.modalView}>
                    <ActivityIndicator size="large" color={blueBg} />
                </View>
            </Modal>
            <ScrollView
                style={styles.container}
                keyboardShouldPersistTaps="handled"
            >
                <View
                    style={{
                        height: 0.3 * windowHeight,
                        alignItems: "center",
                        justifyContent: "flex-end",
                    }}
                >
                    <Text style={[styles.text, styles.t1]}>
                        Set up a user account.
                    </Text>
                    <Text style={[styles.text, styles.t2]}>
                        If you already have an account, please login here
                    </Text>
                </View>
                <View
                    style={{
                        height: 0.4 * windowHeight,
                        justifyContent: "flex-end",
                    }}
                >
                    <Controller
                        control={control}
                        rules={{
                            required: {
                                value: true,
                                message: "name is required",
                            },
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <InputForm
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                placeholder="Full Name"
                                errorText={errors?.name?.message}
                                // setEmail={setEmail}
                            />
                        )}
                        name="name"
                    />
                    <Controller
                        control={control}
                        rules={{
                            required: {
                                value: true,
                                message: "Password is required",
                            },
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <InputForm
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                placeholder="Email"
                                errorText={errors?.email?.message}
                                setEmail={setEmail}
                            />
                        )}
                        name="email"
                    />
                    <Controller
                        control={control}
                        rules={{
                            required: {
                                value: true,
                                message: "Password is required",
                            },
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <InputForm
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                placeholder="Password"
                                errorText={errors?.password?.message}
                            />
                        )}
                        name="password"
                    />
                    <Controller
                        control={control}
                        rules={{
                            required: {
                                value: true,
                                message: "Password is required",
                            },
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <InputForm
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                placeholder="Re-type password"
                                errorText={
                                    errors?.passwordConfirmation?.message
                                }
                            />
                        )}
                        name="passwordConfirmation"
                    />
                </View>
                <View
                    style={{
                        height: 0.3 * windowHeight,
                        justifyContent: "flex-end",
                        paddingBottom: 20,
                    }}
                >
                    <ButtonFill
                        onPress={handleSubmit(onSubmit)}
                        name="CREATE ACCOUNT"
                        fill={email}
                    />
                </View>
            </ScrollView>
        </>
    );
};

export default RegisterMain;

const { ids, styles } = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: blackBg,
    },
    text: {
        color: white,
    },
    t1: {
        fontFamily: "LatoXb",
        paddingBottom: 25,
        "@media (max-width: 700px)": {
            fontSize: 30,
        },
        "@media (max-width: 400px)": {
            fontSize: 20,
        },
    },
    t2: {
        fontFamily: "LatoR",
        paddingHorizontal: "20%",
        textAlign: "center",
        "@media (max-width: 700px)": {
            fontSize: 16,
        },
        "@media (max-width: 400px)": {
            fontSize: 14,
        },
    },
    modalView: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        alignItems: "center",
        justifyContent: "center",
    },
});

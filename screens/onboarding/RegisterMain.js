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
import { getRegData, removeRegData } from "../../utils/api";

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
    const [req, setReq] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    const getBio = async () => {
        if (req === null) {
            const help = await getRegData();
            setReq(help);
        }
    };

    useEffect(() => {
        getBio();
        console.log(req);
    }, [req]);

    const onSubmit = async (data) => {
        setModalVisible(true);
        delete data.passwordConfirmation;
        const details = {
            ...data,
            ...req,
        };
        try {
            await fetch(regUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(details),
            }).then((response) => {
                response.json().then((data) => {
                    if (data.status) {
                        Alert.alert("Successful : ", data.message);
                        // dispatch(addUser(data));
                        removeRegData();
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
            pushups: "LESS THAN 1 HOUR",
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
                        height: 0.25 * windowHeight,
                        alignItems: "center",
                        justifyContent: "flex-end",
                    }}
                >
                    <Text style={[styles.text, styles.t1]}>Register Now.</Text>
                    <Text style={[styles.text, styles.t2]}>
                        If you already have an account, please login here
                    </Text>
                </View>
                <View
                    style={{
                        height: 0.45 * windowHeight,
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
        textTransform: "uppercase",
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

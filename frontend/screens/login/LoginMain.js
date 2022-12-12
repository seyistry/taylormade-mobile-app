import {
    Text,
    TouchableOpacity,
    View,
    ScrollView,
    Dimensions,
} from "react-native";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { blackBg, white } from "../../utils/color";
import StyleSheet from "react-native-media-query";
import InputForm from "../../components/form/InputForm";
import ButtonFill from "../../components/button/ButtonFill";
import { useState, useEffect } from "react";

const windowHeight = Dimensions.get("window").height;

const schema = yup
    .object({
        password: yup.string().min(6).required(),
        email: yup.string().email().required(),
    })
    .required();

const LoginMain = ({ navigation }) => {
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
            password: "",
        },
    });

    useEffect(() => {
        const subscription = watch((data) => {
            schema
                .isValid({
                    email: data.email,
                    password: data.password,
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

    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <ScrollView style={styles.container}>
            <View
                style={{
                    height: 0.3 * windowHeight,
                    alignItems: "center",
                    justifyContent: "flex-end",
                }}
            >
                <Text style={[styles.text, styles.t1]}>WELCOME</Text>
                <Text style={[styles.text, styles.t2]}>
                    If you don’t have an account, please register here
                </Text>
            </View>
            <View
                style={{
                    height: 0.3 * windowHeight,
                    justifyContent: "flex-end",
                }}
            >
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
                <TouchableOpacity
                    style={{
                        // width: "80%",
                        alignItems: "center",
                    }}
                >
                    <Text
                        style={{
                            color: white,
                            textAlign: "center",
                            fontFamily: "LatoB",
                            fontSize: 14,
                            borderBottomColor: white,
                            borderBottomWidth: 1,
                        }}
                    >
                        Forgot password?
                    </Text>
                </TouchableOpacity>
            </View>
            <View
                style={{
                    height: 0.4 * windowHeight,
                    justifyContent: "flex-end",
                    paddingBottom: 20,
                }}
            >
                <ButtonFill
                    onPress={handleSubmit(onSubmit)}
                    name="LOG IN"
                    fill={email}
                />
            </View>
        </ScrollView>
    );
};

export default LoginMain;

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
});

import { useState, useEffect } from "react";
import {
    bodyTypeUrl,
    fitnessLevelUrl,
    goalUrl,
    hindranceUrl,
    motiveUrl,
    targetAreaURL,
    walkoutLocationUrl,
} from "../utils/apiLinks";

import { Alert } from "react-native";

export function FetchRegData() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchData = async () => {
        await Promise.all([
            fetch(goalUrl, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            }),
            fetch(motiveUrl, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            }),
            fetch(bodyTypeUrl, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            }),
            fetch(targetAreaURL, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            }),
            fetch(fitnessLevelUrl, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            }),
            fetch(hindranceUrl, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            }),
            fetch(walkoutLocationUrl, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            }),
        ])
            .then((responses) => {
                // Get a JSON object from each of the responses
                return Promise.all(
                    responses.map((response) => {
                        // console.log(response.json());
                        if (response.status == 200) {
                            return response.json();
                        } else {
                            throw new Error("Server Error!");
                        }
                    })
                );
            })
            .then((data) => {
                // Log the data to the console
                // You would do something with both sets of data here
                // console.log(data);
                setData(data);
                setIsLoading(false);
            })
            .catch((error) => {
                // if there's an error, log it
                Alert.alert("Network error ", "Unable to connect to network", [
                    { text: "Try Again", onPress: () => fetchData() },
                ]);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    return { data, isLoading };
}

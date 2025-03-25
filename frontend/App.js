import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import axios from "axios";

const API_URL = `http://${process.env.IP_ADDRESS}:3000/`;

export default function App() {
    const [message, setMessage] = useState("");

    const fetchData = async () => {
        try {
            const response = await axios.get(API_URL);
            setMessage(response.data.message);
        } catch (error) {
            setMessage("Hiba");
            console.error(error);
        }
    };

    useEffect(() => {   
        fetchData();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{message || "Kapcsolódás"}</Text>
            <Button title="Frissítés" onPress={fetchData} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center" },
    text: { fontSize: 18, marginBottom: 20 },
});

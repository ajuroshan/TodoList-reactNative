import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import React from "react";
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Task from "./components/Task";

export default function App() {
	const [task, setTask] = useState();
	const [taskItems, setTaskitems] = useState([]);

	const handleTask = () => {
		Keyboard.dismiss();
		setTaskitems([...taskItems, task]);
		setTask(null);
	};

	const completeTask = (index) => {
		let itemsCopy = [...taskItems]; 
		itemsCopy.splice(index, 1);
		setTaskitems(itemsCopy);
	};

	return (
		<View style={styles.container}>
			<View style={styles.titlebox}>
				<Text style={styles.title}>Todays Tasks</Text>
			</View>
			<View style={styles.items}>
				{taskItems.map((item, index) => {
					return (
						<TouchableOpacity key={index} onPress={() => completeTask(index)}>
							<Task text={item} />
						</TouchableOpacity>
					);
				})}
			</View>
			<StatusBar style="auto" />
			<KeyboardAvoidingView style={styles.bottomcontainer} behavior={Platform.OS === "ios" ? "padding" : "height"}>
				<TextInput style={styles.textinput} placeholder={"Enter a new task"} onChangeText={(text) => setTask(text)} value={task} />
				<TouchableOpacity style={styles.button} onPress={() => handleTask()}>
					<Text style={styles.plus}>+</Text>
				</TouchableOpacity>
			</KeyboardAvoidingView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#E8EAED",
	},
	titlebox: {
		paddingTop: 80,
		paddingLeft: 20,
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
	},
	items: {
		margin: 20,
	},
	bottomcontainer: {
		padding: 15,
		position: "absolute",
		bottom: 40,
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
	},
	textinput: {
		backgroundColor: "#fff",
		borderRadius: 60,
		padding: 15,
		width: 250,
	},
	button: {
		height: 60,
		width: 60,
		backgroundColor: "#fff",
		borderRadius: 100,
		alignItems: "center",
		justifyContent: "center",
	},
	plus: {
		fontSize: 25,
		textAlign: "center",
	},
});

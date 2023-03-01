import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Task = (props) => {
	return (
		<View style={styles.container}>
			<View style={styles.itemleft}>
				<View style={styles.square}></View>
				<Text style={styles.itemtext}>{props.text}</Text>
			</View>
			<View style={styles.circle}></View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#fff",
		borderRadius: 10,
		padding: 15,
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 20,
		alignItems: "center",
	},
	itemleft: {
		flexDirection: "row",
		alignItems: "center",
		flexWrap: "wrap",
	},
	square: {
		width: 24,
		height: 24,
		backgroundColor: "#55BCF6",
		opacity: 0.4,
		borderRadius: 5,
		marginRight: 15,
	},
	itemtext: {
		maxWidth: "80%",
	},
	circle: {
		height: 12,
		width: 12,
		borderRadius: 5,
		borderWidth: 2,
		borderColor: "#55BCF6",
	},
});

export default Task;

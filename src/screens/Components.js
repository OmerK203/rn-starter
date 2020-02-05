import React from 'react';
import { Text, StyleSheet, View } from 'react-native';


const ComponentsScreen = () => {
	const greeting = 'Getting started with react native!';
	const name = 'My name is omer!!'
	const iwantto = 'learn react'
	const teacher = 'Ayaan'
	return (
		<View>
			<Text style={styles.textStyle}>{greeting}</Text>
			<Text style={styles.subHeaderStyle}>{name}</Text>
			<Text style={styles.subSubHeaderstyle}>'I want to {iwantto}'</Text>
			<Text style={styles.megaSubHeaderstyle}>'My teacher is {teacher}'</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	textStyle: {
	  fontSize: 45
	},
	subHeaderStyle:{
		fontSize: 30
	},
	subSubHeaderstyle:{
		fontSize: 15
	},
	megaSubHeaderstyle:{
		fontSize: 35
	}
});

export default ComponentsScreen;


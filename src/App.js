import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Dimensions, StatusBar } from 'react-native';
import MyMap from './MapView';

export default function App() {
	return (
		<View style={styles.container}>
			<StatusBar backgroundColor="#fff" barStyle="dark-content" />
			<MyMap />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	map: {
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height,
	},
});

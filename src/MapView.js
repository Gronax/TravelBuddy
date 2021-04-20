import React, { useState, useEffect } from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { StyleSheet, View, Dimensions, Alert } from 'react-native';
import GetLocation from 'react-native-get-location';
import { appleStyle } from './utils/mapStyle';

const initialRegion = {
	latitude: 41.0391683,
	longitude: 28.9982707,
	latitudeDelta: 0.04,
	longitudeDelta: 0.04,
};

export default function MyMap() {
	const [location, setLocation] = useState({
		latitude: 41.0391683,
		longitude: 28.9982707,
		latitudeDelta: 0.01,
		longitudeDelta: 0.01,
	});

	useEffect(() => {
		GetLocation.getCurrentPosition({
			enableHighAccuracy: true,
			timeout: 15000,
		})
			.then(res => {
				setLocation({
					...location,
					latitude: res.latitude,
					longitude: res.longitude,
				});
			})
			.catch(error => {
				const { code, message } = error;
				console.warn(code, message);
				if (code === 'CANCELLED') {
					Alert.alert('Location cancelled by user or by another request');
				}
				if (code === 'UNAVAILABLE') {
					Alert.alert('Location service is disabled or unavailable');
				}
				if (code === 'TIMEOUT') {
					Alert.alert('Location request timed out');
				}
				if (code === 'UNAUTHORIZED') {
					Alert.alert('Authorization denied');
				}
			});
	}, []);

	return (
		<View style={styles.container}>
			<MapView
				customMapStyle={appleStyle}
				mapType="standard"
				style={styles.map}
				provider={PROVIDER_GOOGLE}
				//initialRegion={initialRegion}
				region={location}
				showsUserLocation={true}
			>
				{location !== undefined && <Marker coordinate={initialRegion} />}
			</MapView>
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

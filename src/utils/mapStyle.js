export const defaultStyle = [
	{
		featureType: 'administrative.country',
		elementType: 'geometry',
		stylers: [
			{
				visibility: 'simplified',
			},
			{
				hue: '#ff0000',
			},
		],
	},
];

export const appleStyleV2 = [
	{
		featureType: 'landscape.man_made',
		elementType: 'geometry',
		stylers: [
			{
				color: '#f7f1df',
			},
		],
	},
	{
		featureType: 'landscape.natural',
		elementType: 'geometry',
		stylers: [
			{
				color: '#d0e3b4',
			},
		],
	},
	{
		featureType: 'landscape.natural.terrain',
		elementType: 'geometry',
		stylers: [
			{
				visibility: 'off',
			},
		],
	},
	{
		featureType: 'poi',
		elementType: 'labels',
		stylers: [
			{
				visibility: 'off',
			},
		],
	},
	{
		featureType: 'poi.business',
		elementType: 'all',
		stylers: [
			{
				visibility: 'off',
			},
		],
	},
	{
		featureType: 'poi.medical',
		elementType: 'geometry',
		stylers: [
			{
				color: '#fbd3da',
			},
		],
	},
	{
		featureType: 'poi.park',
		elementType: 'geometry',
		stylers: [
			{
				color: '#bde6ab',
			},
		],
	},
	{
		featureType: 'road',
		elementType: 'geometry.stroke',
		stylers: [
			{
				visibility: 'off',
			},
		],
	},
	{
		featureType: 'road',
		elementType: 'labels',
		stylers: [
			{
				visibility: 'off',
			},
		],
	},
	{
		featureType: 'road.highway',
		elementType: 'geometry.fill',
		stylers: [
			{
				color: '#ffe15f',
			},
		],
	},
	{
		featureType: 'road.highway',
		elementType: 'geometry.stroke',
		stylers: [
			{
				color: '#efd151',
			},
		],
	},
	{
		featureType: 'road.arterial',
		elementType: 'geometry.fill',
		stylers: [
			{
				color: '#ffffff',
			},
		],
	},
	{
		featureType: 'road.local',
		elementType: 'geometry.fill',
		stylers: [
			{
				color: 'black',
			},
		],
	},
	{
		featureType: 'transit.station.airport',
		elementType: 'geometry.fill',
		stylers: [
			{
				color: '#cfb2db',
			},
		],
	},
	{
		featureType: 'water',
		elementType: 'geometry',
		stylers: [
			{
				color: '#a2daf2',
			},
		],
	},
];

export const appleStyle = [
	{
		featureType: 'landscape.man_made',
		elementType: 'all',
		stylers: [
			{
				color: '#faf5ed',
			},
			{
				lightness: '0',
			},
			{
				gamma: '1',
			},
		],
	},
	{
		featureType: 'poi.park',
		elementType: 'geometry.fill',
		stylers: [
			{
				color: '#bae5a6',
			},
		],
	},
	{
		featureType: 'road',
		elementType: 'all',
		stylers: [
			{
				weight: '1.00',
			},
			{
				gamma: '1.8',
			},
			{
				saturation: '0',
			},
		],
	},
	{
		featureType: 'road',
		elementType: 'geometry.fill',
		stylers: [
			{
				hue: '#ffb200',
			},
		],
	},
	{
		featureType: 'road.arterial',
		elementType: 'geometry.fill',
		stylers: [
			{
				lightness: '0',
			},
			{
				gamma: '1',
			},
		],
	},
	{
		featureType: 'transit.station.airport',
		elementType: 'all',
		stylers: [
			{
				hue: '#b000ff',
			},
			{
				saturation: '23',
			},
			{
				lightness: '-4',
			},
			{
				gamma: '0.80',
			},
		],
	},
	{
		featureType: 'water',
		elementType: 'all',
		stylers: [
			{
				color: '#a0daf2',
			},
		],
	},
];

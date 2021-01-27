/* eslint-disable max-len */
import React from 'react';
import { View, processColor, OpaqueColorValue } from 'react-native';

//other deps
import { LineChart, PieChart } from 'react-native-charts-wrapper';

//components

//styles
import styles from './NewCharts.styles';

//types
type NewChartsViewProps = {

};

//constants
let pie = {
	title: 'Favorite Food in Jogja',
	detail: {
		time_value_list: [2017],
		legend_list: ['Hamburger', 'Steak', 'Pecel', 'Magelangan'],
		dataset: {
			Hamburger: { '2017': 9 },
			Steak: { '2017': 17 },
			Pecel: { '2017': 29 },
			Magelangan: { '2017': 45 },
		},
	},
};

export const NewChartsView: React.FC<NewChartsViewProps> = ({

}) => {
	//constants
	const data = { dataSets: [{
		label: 'Правильное',
		values: [{ y: 250 }, { y: 240 }, { y: 245 }, { y: 260 }, { y: 270 }, { y: 240 }, { y: 240 }, { y: 250 }, { y: 245 }, { y: 270 }, { y: 280 }, { y: 230 }, { y: 220 }, { y: 200 }, { y: 250 }, { y: 258 }, { y: 250 }, { y: 251 }, { y: 254 }, { y: 258 }, { y: 242 }, { y: 270 }, { y: 267 }, { y: 266 }, { y: 250 }, { y: 230 }, { y: 240 }, { y: 263 }, { y: 235 }, { y: 250 }],
		config: {
			colors: [processColor('#005670')],
			drawCircles: false,
			mode: 'HORIZONTAL_BEZIER',
			// drawValues: false,
		},
	}, {
		label: 'Предсказание',
		values: [{ y: 253 }, { y: 243 }, { y: 242 }, { y: 258 }, { y: 267 }, { y: 238 }, { y: 242 }, { y: 253 }, { y: 240 }, { y: 275 }, { y: 275 }, { y: 250 }, { y: 240 }, { y: 230 }, { y: 250 }, { y: 260 }, { y: 255 }, { y: 240 }, { y: 250 }, { y: 264 }, { y: 240 }, { y: 275 }, { y: 267 }, { y: 260 }, { y: 250 }, { y: 240 }, { y: 230 }, { y: 250 }, { y: 238 }, { y: 260 }],
		config: {
			drawCircles: false,
			colors: [processColor('#FF5B5B')],
			mode: 'HORIZONTAL_BEZIER',
			drawValues: false,
		} },
	] };

	return (
		<View style={{ flex: 1 }}>
			<View style={styles.container}>
				<LineChart
					style={styles.chart}
					data={data} />
			</View>
		</View>
	);
};

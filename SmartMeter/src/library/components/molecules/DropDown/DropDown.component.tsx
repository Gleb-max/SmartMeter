import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';

//other deps
import DropDownPicker from 'react-native-dropdown-picker';

//component
import { SMIcons } from 'library/components';

//styles
import styles from './DropDown.styles';

type CustomDropDownProp = {
	data: string[];
	onChange: (selectedItem: string) => void;
	style?: StyleProp<ViewStyle>;
	listStyle?: StyleProp<ViewStyle>;
}

export const CustomDropDown: React.FC<CustomDropDownProp> = ({
	data,
	onChange,
	style,
	listStyle,
}) => {
	//state
	const dropdownValues = data.map(function (val) {
		return { label: val, value: val };
	});

	//callbacks
	const _onChange = React.useCallback((selectedItem: string) => {
		onChange(selectedItem);
	}, [onChange]);

	//renders
	const _renderCustomArrowUp = React.useCallback(() => {
		return (
			<SMIcons
				size={18}
				color={'#DCDCDC'}
				name='ic_arrow_up' />
		);
	}, []);
	const _renderCustomArrowDown = React.useCallback(() => {
		return (
			<SMIcons
				size={18}
				color={'#DCDCDC'}
				name='ic_arrow_up'
				style={styles.IconArrowUp} />
		);
	}, []);

	return (
		<DropDownPicker
			items={dropdownValues}
			defaultValue={data[0]}
			onChangeItem={(item: any, index: number) => _onChange(item.label)}
			activeLabelStyle={{ color: '#000' }}
			containerStyle={{ height: 40, marginTop: 250 }}
			style={[styles.container, style]}
			dropDownStyle={listStyle}
			placeholderStyle={{ color: '#000' }}
			labelStyle={{ color: '#000' }}
			itemStyle={[styles.itemStyle]}
			customArrowUp={_renderCustomArrowUp}
			customArrowDown={_renderCustomArrowDown} />
	);
};

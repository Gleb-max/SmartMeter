import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';

//other deps
import DropDownPicker from 'react-native-dropdown-picker';

//styles
import styles from './DropDown.styles';

type CustomDropDownProp = {
	data: string[];
	onChange: (selectedItem: string) => void;
	style?: StyleProp<ViewStyle>;
	containerStyle?: StyleProp<ViewStyle>;
	listStyle?: StyleProp<ViewStyle>;
}

export const CustomDropDown: React.FC<CustomDropDownProp> = ({
	data,
	onChange,
	style,
	containerStyle,
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

	return (
		<DropDownPicker
			items={dropdownValues}
			defaultValue={data[0]}
			onChangeItem={(item: any, index: number) => _onChange(item.label)}
			activeLabelStyle={[styles.textStyle, { color: '#005670' }]}
			containerStyle={[styles.container, containerStyle]}
			style={[styles.dropdown, style]}
			dropDownStyle={[styles.list, listStyle]}
			placeholder={'Enter value'}
			placeholderStyle={{ color: '#000' }}
			labelStyle={{ color: '#000' }}
			// 			placeholderStyle={{color: '#000'}}
			// 			selectedLabelStyle={[styles.textStyle, {marginLeft: 0}]}
			// 			labelStyle={[styles.textStyle]}
			// 			arrowStyle={{marginRight: -2.5}}
			itemStyle={[styles.itemStyle]} />
	);
};

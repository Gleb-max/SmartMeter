import React from 'react';

import DropDownPicker from 'react-native-dropdown-picker';

//styles
import styles from "./DropDown.styles";

type CustomDropDownProp = {
    values: string[];
}

export const CustomDropDown: React.FC<CustomDropDownProp> = ({values}) => {
    const mValues = values.map(function (val) {
        return {label: val, value: val}
    })
    return (
        <DropDownPicker
            items={mValues}
            defaultValue={values[0]}
            containerStyle={{height: 40}}
            style={{backgroundColor: '#fafafa'}}
            itemStyle={{
                justifyContent: 'flex-start'
            }}
            dropDownStyle={{backgroundColor: '#fafafa'}}
        />
    );
}

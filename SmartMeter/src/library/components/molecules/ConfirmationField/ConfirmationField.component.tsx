import React, {useState} from 'react';
import { Text, View, SafeAreaView, ViewStyle } from 'react-native';

//components
import { Loader } from 'library/components/atoms';

//styles
import styles from './ConfirmationField.styles';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

type ConfirmationFieldProps = {
    cellCount: number;
    containerStyle?: ViewStyle;
    onSubmit: () => void;
};

export const ConfirmationField: React.FC<ConfirmationFieldProps> = ({
    cellCount,
    containerStyle,
    onSubmit,
}) => {
    const [value, setValue] = useState('');
    // const ref = useBlurOnFulfill({value, cellCount: cellCount});
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
      });
	return (
      <CodeField
        // ref={ref}
        blurOnSubmit
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={cellCount}
        rootStyle={[containerStyle, styles.codeFieldRoot]}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        onSubmitEditing={onSubmit}
        renderCell={({index, symbol, isFocused}) => (
          <View
            onLayout={getCellOnLayoutHandler(index)}
            key={index}
            style={[styles.cellRootEmpty, (symbol != '') && styles.cellRoot, isFocused && styles.focusCell]}>
            <Text style={styles.cellText}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          </View>
        )}
      />
	);
};

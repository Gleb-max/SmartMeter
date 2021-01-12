import React, {useState} from 'react';
import { Text, View, SafeAreaView } from 'react-native';

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
};

export const ConfirmationField: React.FC<ConfirmationFieldProps> = ({
    cellCount
}) => {
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({value, cellCount: cellCount});
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
      });
	return (
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={cellCount}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
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

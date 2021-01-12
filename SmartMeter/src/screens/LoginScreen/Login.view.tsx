import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

//other deps
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

//components
import {CustomTextInput} from 'library/components';

//styles
import styles from './Login.styles';

type LoginViewProps = {
    
}

export const LoginView: React.FC<LoginViewProps> = ({

}) => {
    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView>
                <Text style={styles.welcome}>Welcome to a SmartMeter app</Text>
                <View style={styles.loginComps}>
                    <CustomTextInput
                        keyboardType="default"
                        style={styles.inputField}
                        placeholder="Имя"
                    />
                    <CustomTextInput
                        keyboardType="number-pad"
                        style={styles.inputField}
                        placeholder="Телефон"
                    />
                    <CustomTextInput
                        style={styles.inputField}
                        placeholder="Пароль"
                    />
                </View>
                <TouchableOpacity style={styles.loginButton}>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>
            </KeyboardAwareScrollView>
        </View>
    );
}
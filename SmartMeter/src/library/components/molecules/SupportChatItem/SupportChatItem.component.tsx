import React from 'react';
import { TouchableOpacity, ViewStyle, StyleProp, View, Pressable } from 'react-native';

//components
import { GilroyText } from 'library/components/atoms';

//styles
import styles from './SupportChatItem.styles';

//types
type SupportChatItemProps = {
	onPress?: () => void;
    message: string;
    own?: boolean;
    style?: StyleProp<ViewStyle>;
    messageStyle? :StyleProp<ViewStyle>;
    isLoading?: boolean;
    isError?: boolean;
}

export const SupportChatItem: React.FC<SupportChatItemProps> = ({
    message,
    own = false,
    style,
    messageStyle,
    onPress,
    isLoading = false,
    isError = false,
}) => {
	return (
        <View style={[styles.container, style]}>
            <Pressable onPressIn = { onPress } style={ [styles.messageContainer, own && styles.ownContainer, messageStyle] }>

                <GilroyText
                    type='Medium'
                    size='g12'
                    style={[styles.text, own && styles.ownText]}
                >
                    {message}
                </GilroyText>

            </Pressable>

            {
                isError && <View style={styles.errorContainer}>
                    <GilroyText type="Medium" size="g4" style={{color: '#FDFDFD'}}>!</GilroyText>
                </View>
            }
			
        </View>
	);
};

import React from 'react';
import { TouchableOpacity, View, ViewStyle, StyleProp, Text, Image } from 'react-native';

//components
import { SMIcons } from 'library/components/atoms';
import { PressableIcon } from '../PressableIcon';

//styles
import styles from './ProfileHead.styles';

type ProfileHeadProps = {
	userData: {
        name: string;
        surname: string;
        address: string;
		photo: string;
    };
    withNotif?: boolean;
    onNotifications?: () => void;
    onProfile: () => void;
}

export const ProfileHead: React.FC<ProfileHeadProps> = ({
    userData,
    withNotif,
    onNotifications = () => {},
    onProfile,
}) => {
	return (
		<View style={styles.container}>
            <PressableIcon
                iconName='ic_notification'
                onPress={onNotifications}
                size={22}
                color='#000000'
                width={20}
                height={22}
                style={{alignSelf: 'center'}}
                withNotif={withNotif} />

            <View style={styles.profileInfoContainer}>
                <View style={styles.nameAdressTextContainer}>
                    <Text style={styles.nameText}>{userData.name} {userData.surname}</Text>
                    <Text style={styles.addressText}>{userData.address}</Text>
                </View>

                <TouchableOpacity onPress={onProfile}>
                    <Image 
                        source={{
                            uri: userData.photo
                        }} 
                        style={styles.profilePhoto} />
                </TouchableOpacity>
            </View>

        </View>
	);
};

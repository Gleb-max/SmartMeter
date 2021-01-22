import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
        flexDirection: 'row',
    },
    profileInfoContainer: {
        flexDirection: 'row',
        marginLeft: 'auto',
    },
    nameAdressTextContainer: {
        alignItems: 'flex-end',
        marginRight: 12,
    },
    headText: {
        fontFamily: 'Gilroy-Semibold',
        fontWeight: '600',
        fontStyle: 'normal',
        fontSize: 31,
        lineHeight: 38,
        marginBottom: 12.5,
    },
    nameText: {
        fontFamily: 'Gilroy-Semibold',
        fontWeight: '600',
        fontStyle: 'normal',
        fontSize: 16,
        lineHeight: 20,
        color: '#000000',
    },
    addressText: {
        fontFamily: 'Roboto',
        fontWeight: '400',
        fontStyle: 'normal',
        fontSize: 12,
        lineHeight: 14,
        color: '#747474',
    },
    profilePhoto: {
		height: 40,
		width: 40,
		borderRadius: 20,
    },
});

export default styles;

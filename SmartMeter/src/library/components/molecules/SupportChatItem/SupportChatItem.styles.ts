import { Helpers } from 'library/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        paddingBottom: 16,
    },
	messageContainer: {
        backgroundColor: '#E4E4E4',
        maxWidth: 183,
		borderRadius: 11,
        alignSelf: 'flex-start',
        paddingHorizontal: 11,
        paddingVertical: 6,
        justifyContent: 'center',
	},
	text: {
        fontStyle: 'normal',
		lineHeight: 22,
		fontWeight: '500',
		alignSelf: 'center',
		color: '#000000',
    },
    ownContainer: {
        backgroundColor: '#005670',
        marginLeft: 'auto',
    },
    ownText: {
        color: '#FDFDFD',
    },
    errorContainer: {
        backgroundColor: '#FF5B5B',
        width: 17,
        height: 17,
        borderRadius: 8.5,
        alignSelf: 'center',
        marginLeft: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default styles;

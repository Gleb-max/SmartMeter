import { DimensionsManager } from 'library/modules/DimensionsManager';
import { StyleSheet } from 'react-native';
import { Helpers } from 'library/theme';

const styles = StyleSheet.create({
	container: {
        flex: 1,
        paddingTop: 41,
		backgroundColor: '#FDFDFD',
    },
    header: {
        fontWeight: '600',
        fontStyle: "normal",
        lineHeight: 38,
        marginLeft: 28,
		// marginBottom: 37,
    },
    chatContainer: {
        flex: 1,
        paddingHorizontal: 30,
    },
    chatList: {
        // alignItems: 'stretch',
        flex: 1,
    },
    sendContainer: {
        height: 51,
        backgroundColor: '#F1F1F1',
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerContainer: {
        borderBottomWidth: 1,
        borderColor: '#E4E4E4',
        paddingBottom: 10,
    },
    icon: {
        marginLeft: 'auto',
        marginRight: 15,
    },
    messageInput: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        marginVertical: 10,
        marginLeft: 14,
        marginRight: 14,
        paddingVertical: 0,     //delete it
    },
});

export default styles;

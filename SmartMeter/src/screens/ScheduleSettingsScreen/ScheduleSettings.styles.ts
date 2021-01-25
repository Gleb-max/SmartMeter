import { StyleSheet } from 'react-native';
import { Helpers } from 'library/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
        paddingTop: 28,
        paddingHorizontal: 30,
		backgroundColor: '#FDFDFD',
    },
    header: {
		fontStyle: 'normal',
		fontWeight: '600',
		lineHeight: 38,
		color: '#000000',
		marginTop: 37,
        marginBottom: 37.45,
    },
    settingsItemContainer: {
        height: 52,
        flexDirection: 'row',
        backgroundColor: '#FDFDFD',
        borderRadius: 8,
        paddingLeft: 13,
        alignItems: 'center',
        marginBottom: 37,
		...Helpers.boxShadow('rgba(0, 0, 0, 0.04)', { x: 10, y: 20 }, 100, 0.1, 3),
    },
    settingsItemText: {
        fontWeight: '500',
        fontStyle: 'normal',
        lineHeight: 22,
        color: '#000000',
    },
    interval: {
        fontWeight: '500',
        fontStyle: 'normal',
        lineHeight: 22,
        color: '#005670',
    },
    arrow: {
    },
    intervalText: {
        marginLeft: 'auto',
        marginRight: 22,
    },
    settingsItemContent: {
        flexDirection: 'row',
        marginLeft: 'auto',
        marginRight: 20,
        alignItems: 'center',
    },
    daysContainer: {
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        ...Helpers.boxShadow('rgba(0, 0, 0, 0.04)', { x: 10, y: 20 }, 100, 0.1, 3),
        paddingVertical: 12,
    },
    dayCardContainer: {
        backgroundColor: '#00000000',
        width: 28,
        height: 28,
        borderRadius: 14,
        marginRight: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    day: {
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: 22,
    },
    modalContainer: {
        flex: 1,
    },
    modalOpacity: {
        flex: 1, 
        justifyContent: 'center', 
        alignContent: 'center', 
        alignItems: 'center', 
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    intervalInput: {
        width: 78,
        alignItems: 'center',
    },
    inputContainer: {
        backgroundColor: '#FFFFFF',
        width: 169,
        height: 162,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
});

export default styles;

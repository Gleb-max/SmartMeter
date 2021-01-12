import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
        justifyContent: 'space-between',
        backgroundColor: '#005670',
	alignItems: 'stretch',
        borderRadius: 15,
        marginLeft: 30,
        marginRight: 61,
        height: 68,
        flexDirection: "row",
    },
    numberContainer: {
        backgroundColor: '#FFFFFF',
        width: 35,
        height: 35,
        maxHeight: 35,
        maxWidth: 35,
        left: 12,
        top: 17,
        borderRadius: 35,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'flex-start',
        alignItems: 'flex-start',
        marginLeft: 30,
    },
    number: {
        color: '#000000',
        fontFamily: 'Gilroy',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 18,
        lineHeight: 22,
    },
    text: {
        color: '#FFFFFF',
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 18,
        lineHeight: 22,
    },
});

export default styles;

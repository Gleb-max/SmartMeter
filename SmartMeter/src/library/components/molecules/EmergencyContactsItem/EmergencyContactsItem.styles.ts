import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        shadowColor: 'rgba(0, 0, 0, 0.04)',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.08,
        elevation: 4,
        marginHorizontal: 30,
        alignSelf: 'stretch',
        alignItems: 'center',
        height: 55,
        maxHeight: 55,
    },
    contentContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'baseline',
    },
    contactInfoContainer: {
        alignContent: 'center',
        alignItems: 'flex-start',
        marginLeft: 23,
    },
    arrowContainer: {
        marginLeft: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 22,
    },
    mark: {
        alignSelf: 'flex-start',
        marginTop: 0,
        marginLeft: 0,
        backgroundColor: '#005670',
        width: 11,
        height: 25,
    },
    name: {
        color: '#000000',
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 22,
        lineHeight: 27
    },
    phone: {
        color: '#747474',
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 20,
    },
});

export default styles;

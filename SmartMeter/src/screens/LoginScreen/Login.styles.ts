import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    loginComps: {
        backgroundColor: '#FFFFFF',
        flex: 1,
        alignSelf: 'stretch',
        marginHorizontal: 29,
        marginVertical: '18%',
    },
    welcome: {
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontStyle: 'normal',
        fontSize: 48,
        color: '#323232',
        marginLeft: '10%',
        marginTop: '15%',
    },
    fieldName: {
        fontFamily: 'Roboto',
        marginVertical: '10%',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 21,
        color: '#323232',
        alignSelf: 'stretch',
    },
    inputField: {
        alignSelf: 'stretch',
        backgroundColor: '#FFFFFF',
        color: '#000000',
        borderRadius: 10,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 12.5379,
        shadowColor: 'rgba(0, 0, 0, 0.08)',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.08,
        elevation: 4,
        paddingLeft: '4%',
    },
    loginButton: {
        backgroundColor: '#FFE3D3',
        marginHorizontal: '7%',
        marginBottom: '9%',
        paddingVertical: 13,
        alignSelf: 'stretch',
        borderRadius: 10,
    },
    loginText: {
        fontFamily: 'Roboto',
        fontWeight: '900',
        fontStyle: 'normal',
        fontSize: 18,
        color: '#323232',
        textAlign: 'center',
        justifyContent: 'center',
    },
});

export default styles;

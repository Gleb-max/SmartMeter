import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        alignSelf: 'flex-start',
    },
    contentContainer: {
        backgroundColor: '#FFFFFF',
        shadowColor: 'rgba(0, 0, 0, 0.04)',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.08,
        elevation: 4,
        alignSelf: 'flex-start',
        marginHorizontal: 27,
        marginVertical: 9,
    },
    mark: {
        position: 'absolute',
        marginTop: 0,
        marginLeft: 0,
        backgroundColor: '#005670',
        width: 11,
        height: 44,
        alignSelf: 'flex-start',
        flex: 1,
    },
    contentText: {
        color: '#000000',
        fontFamily: 'Montserrat-Medium',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 14,
        paddingTop: 8,
        paddingBottom: 16,
        paddingLeft: 27,
        paddingRight: 21,
        lineHeight: 17
    },
    date: {
        color: '#000000',
        fontFamily: 'Gilroy-Medium',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 17,
        lineHeight: 21,
        marginLeft: 27,
    },
});

export default styles
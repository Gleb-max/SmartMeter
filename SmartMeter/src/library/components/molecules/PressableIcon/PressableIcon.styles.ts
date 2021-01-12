import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        alignSelf: 'flex-start',
        flex: 1,
    },
    count: {
        position: 'absolute',
        backgroundColor: '#FF5B5B',
        width: 8,
        height: 8,
        maxWidth: 8,
        maxHeight: 8,
        top: 2,
        right: 7,
        borderRadius: 10,
    },
});

export default styles
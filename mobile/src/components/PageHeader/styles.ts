import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingVertical: 15,
        paddingHorizontal: 22,
        backgroundColor: '#8257e5',

    },

    backButton:{
        marginVertical: 10,
        padding: 10,
    },

    logo:{
            marginVertical: 10,
            padding: 10,
    },

    topBar:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    header:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    title:{
        fontFamily: 'Archivo_700Bold',
        color: '#FFF',
        fontSize: 24,
        lineHeight: 32,
        maxWidth: 160,
        marginVertical: 25,
    }
});


export default styles;
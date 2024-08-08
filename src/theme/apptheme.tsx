import { StyleSheet } from 'react-native';

export const styles =  StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      title: {
        fontSize: 24,
        marginBottom: 20,
      },
      image: {
        width: 200,
        height: 200,
        marginBottom: 20,
      },
      container2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      result: {
        fontSize: 24,
        marginTop: 20,
      },
      container3: {
        margin: 10,
      },
      input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 5,
        fontSize: 18,
      },
    button: {
        backgroundColor: '#fde6ae',
        paddingVertical:20,
        borderRadius: 10,
        marginTop:30,
        width:200
    },
    buttonText:{
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});
import React, { useState } from 'react';
import { View,ImageBackground,Text, Button,TouchableOpacity, TextInput, SafeAreaView, StyleSheet} from 'react-native';
import firebase from '../../database/firebase';

 
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#ffc0eb",
    },
    containerInput:{
        flex:1,
        padding: 40,
        paddingTop:0,
        paddingBottom: 0,
    },

    containerText:{
        flex:1,
        margin:20,
        padding:10,
        alignItems: "center",
    },
   
    image: {
        width:'auto',
        height: 200,
        resizeMode: "cover",
        justifyContent: "center",
      },
      title: {
        flex:1,
        margin: 30,
        marginTop: 20,
        marginBottom:0,
        color: "black",
        fontSize: 42,
        fontWeight: "bold",
        textAlign: "left",
      },

    inputGroup: { 
        marginTop:10,
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        marginBottom:15,

     },
   
     text: {
        color: "black",
        fontSize: 20,
        textAlign: "left",
      },
  });

const Login = (props) => {
    const [value, onChangeText] = React.useState('Useless Placeholder');
    const [ state, setState] = useState({

        email:'',
        password: '',
    });

    const handleChangeText = (name, value) =>{
        setState({...state, [name]: value})
    };


    const userLogin = async (email, password) => {
        await firebase.auth.signInWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
          });

            props.navigation.navigate('Main')
    };

    return (
        <SafeAreaView  style={styles.container}>
            <View style={styles.container}>
                <ImageBackground source={require('../../Image/loginilustration.jpg')}  style={styles.image}>
                </ImageBackground>
                <Text style={styles.title}>Autenticarse</Text>

            </View>
            <View style={styles.containerInput }>
                <View style={styles.inputGroup }>
                    <TextInput style={styles.text} placeholder="Nombre de usuario"  
                    onChangeText={(value) => handleChangeText('email', value)}
                    ></TextInput>
                </View>
                <View style={styles.inputGroup }>
                    <TextInput style={styles.text} placeholder="Contraseña"
                        onChangeText={(value) => handleChangeText('password', value)}
                    ></TextInput>
                </View>
                <View style={[{ padding: 0, margin:10, marginTop:30, backgroundColor: "#f50087"}]}>
                    <Button 
                        title="Entrar"
                        color="#f50087"
                        onPress={() => userLogin(state.email, state.password)}
                    >
                    </Button>

                        

                </View>
                <View style={styles.containerText }>
                    <Text style={{
                        fontSize: 15,
                        color: "gray",
                    }} >
                        O
                    </Text>
                    <Text
                        onPress={() => props.navigation.navigate('CreateAccount')}
                        style={{
                        fontSize: 20,
                        color: "black",
                        fontWeight: "bold",
                        textAlign: "center",
                    }}>
                        Crear cuenta
                    </Text>
                </View>
            </View>
            
                    
        </SafeAreaView>
        
    )
}

export default Login
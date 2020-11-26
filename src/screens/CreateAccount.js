import React, { useState } from 'react';
import { View,ImageBackground,Text, Button,TouchableOpacity, TextInput, SafeAreaView, StyleSheet} from 'react-native';
import firebase from 'firebase'
require('firebase/auth')
 
const styles = StyleSheet.create({
    container: {
        fontFamily: 'Iowan Old Style',
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
        padding:10,
        alignItems: "center",
        marginBottom:20,
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

const CreateAccount = (props) => {
    const [value, onChangeText] = React.useState('Useless Placeholder');
    const [ state, setState] = useState({

        name:'',
        password: '',
        email:'',
    });

    const handleChangeText = (name, value) =>{
        setState({...state, [name]: value})
    };


    const createAccount2 = async (pEmail, pPassword) => {
            try {
                const authResult = await firebase.auth().createUserWithEmailAndPassword(pEmail, pPassword);
                 usersRef.doc(authResult.user.uid)
                    .set({
                        email: pEmail,
                        created: firebase.firestore.FieldValue.serverTimestamp(),
                      });
            }
            catch(error){
                console.log(error);
            }
        
    };

    return (
        <SafeAreaView  style={styles.container}>
            <View style={styles.container}>
                <ImageBackground source={require('../../Image/loginilustration.jpg')}  style={styles.image}>
                </ImageBackground>
                <Text style={styles.title}>Crear cuenta</Text>

            </View>
            <View style={styles.containerInput }>
                <View style={styles.inputGroup }>
                    <TextInput style={styles.text} placeholder="Nombre de usuario"  
                    onChangeText={(value) => handleChangeText('name', value)}
                    ></TextInput>
                </View>
                <View style={styles.inputGroup }>
                    <TextInput tipe='email' style={styles.text} placeholder="email"  
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
                        title="Cear cuenta"
                        color="#f50087"
                        onPress={() => createAccount2(state.email, state.password)}
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
                        onPress={() => props.navigation.navigate('Login')}
                        style={{
                        fontSize: 20,
                        color: "black",
                        fontWeight: "bold",
                        textAlign: "center",
                    }}>
                        Autenticarse
                    </Text>
                </View>
            </View>
            
                    
        </SafeAreaView>
        
    )
}

export default CreateAccount
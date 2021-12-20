import React from 'react';
import { Image, ImageBackground ,StyleSheet,Text,View} from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground  style={styles.background}
        source={ require('../assets/background.jpeg')}>
             <View style={styles.logocontainer}>
             <Image style={styles.logo} source={require('../assets/logo.png')}></Image>
            <Text style={{color: "white"}}>Stay in Stay Safe</Text>
             </View>
            

<View style={styles.loginButton}></View>

<View style={styles.registerButton}></View>




        </ImageBackground>
        
        
        );
}
const styles = StyleSheet.create({
    background:{
        marginTop:25,
        flex:1,
        justifyContent:"flex-end",
        alignItems:"center"
    },
    loginButton:{
        width:"100%",
        height:70,
        backgroundColor:"#fc5c65",
    },
    registerButton:{
        width:"100%",
        height:70,
        backgroundColor:"grey"
    },
    logo:{
        width:100,
        height:100,
        
    },
    logocontainer:{
        position:'absolute',
        top:50,
       

    }
    
})

export default WelcomeScreen;
import React from 'react';
import {SafeAreaView, Image,StyleSheet, View } from 'react-native';

function ViewImageScreen(props) {
    return (
         <SafeAreaView style={styles.Container} >
             <Image resizeMode="contain" style={styles.image} source={ require('../assets/background3.jpg')} />
             <View style={styles.closeIcon}></View>
             <View style={styles.nextIcon}></View>
       

        </SafeAreaView>
        );
}

const styles = StyleSheet.create({
    
    nextIcon:{

        height:50,
        width:100,
        backgroundColor:"white",
        position:"absolute",
        right:25,
        top:18,
    }
    ,

    closeIcon:{

        height:50,
        width:100,
        backgroundColor:"#4ecdc4",
        position:"absolute",
        left:25,
        top:18,
    }
    ,

    Container:{
        backgroundColor:"black",
        flex:1,
        

    },
    image:{
        
        width:"100%",
        height:"100%"

    },
   
})

export default ViewImageScreen;
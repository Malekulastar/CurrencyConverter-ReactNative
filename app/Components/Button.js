import React from 'react';
import {TouchableOpacity,TouchableHighlight,StatusBar,Text,StyleSheet,Image,View,TextInput,Alert, SafeAreaView} from 'react-native';
import colors from '../constants/colors';

export const Button =({onPress,text}) =>{
    return(

        <TouchableOpacity onPress={onPress} style={styles.Button} resizeMode='contain'>
            <Image  source={require('../assets/reverse.png')} style={styles.buttonIcon}/>
            <Text style={styles.buttontext}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
   Button:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,

   },
   buttonIcon:{
    marginRight: 10,
    width: 20,
    height: 20,

   },
   buttontext:{
    fontSize: 16,
    color: colors.white,

   } 
})
//import { StatusBar } from 'expo-status-bar';
import React from 'react';
//import{ useDimensions ,useDeviceOrientation} from '@react-native-community/hooks';
//import { StyleSheet, Dimensions, Text, View,Image,TouchableOpacity,Alert,TouchableHighlight,Platform ,TouchableNativeFeedback, SafeAreaView, Button} from 'react-native';
//import WelcomeScreen from './app/screens/WelcomeScreen.js';
//import ViewImageScreen from './app/screens/ViewImageScreen.js';
//import Options from './app/screens/Options.js';
//import Home from './app/screens/Home.js';
import Navigation from './app/config/Navigation.js';
import { ConversionContextProvider  } from './app/util/ConversionContext.js';
import {api} from './app/util/api.js';


api('/latest?base=USD')
  .then((res) => console.log(res))
  .catch((err) => console.log('err', err));


  export default () => (
    <ConversionContextProvider>
      <Navigation />
    </ConversionContextProvider>
  );


//export default () => <Navigation />;

/*
export default function App() {

  //console.log(useDeviceOrientation());
  return <Home /> ;
  

}*/
    /*<SafeAreaView style={{

     backgroundColor:'dodgerblue',
     flex:1,
     flexDirection:"row",
     marginTop:25,
     justifyContent:"center",
     alignItems:"center"
    }}>
      <View style={{
     backgroundColor:'yellow',
     height:100,
     width:100,
    

    }}/>
    <View style={{
     backgroundColor:'black',
     height:100,
     width:100,
     top:20
    

    }}/>
    <View style={{
     backgroundColor:'red',
     height:100,
     width:100

    }}/>
     <View style={{
     backgroundColor:'grey',
     height:100,
     width:100,
     position:"relative"

    }}/>


      
    </SafeAreaView>
    );
  }*/
/*
  < SafeAreaView>
     <View 
     style = {{backgroundColor:'dodgerblue',width:150,height:150,marginTop:25 }}></View>

  </SafeAreaView>
   

    < SafeAreaView style={[styles.container, containerStyle]}>

      <Text >Open up App.js </Text>
      <TouchableHighlight onPress={()=>console.log("Image Tapped")} >
      <Image 
       fadeDuration={5000}
      source={{
        height:200,
        width:300,
        uri:"https://picsum.photos/200/300",
      }}/>
       </TouchableHighlight>
      

      <Button  color="blue" title="click me" onPress={()=> Alert.alert("My Title",'Button Tapped',[
        {text:"Yes",onPress:()=> console.log("yes")},
        {text:"No",onPress:()=> console.log("no")}
      ])  } />

    
      
    </SafeAreaView>*/
    
    

/*
const containerStyle ={ backgroundColor: 'orange'};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginTop:30,
    paddingTop:Platform.OS==='android' ? 20:0,
    backgroundColor: 'dodgerblue',
    //justifyContent:"center",
    //alignItems:"center"
    
  },
});*/

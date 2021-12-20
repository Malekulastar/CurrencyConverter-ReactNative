import React  from 'react';

import { StyleSheet,Linking , ScrollView ,StatusBar, Text, View,Image,TouchableOpacity,Alert,TouchableHighlight,Platform ,TouchableNativeFeedback, SafeAreaView, Button } from 'react-native';
import colors from '../constants/colors';
import {Entypo}  from '@expo/vector-icons';
import {RowItem,RowSeparator} from '../Components/RowItem';

const openLink = (url) =>
  Linking.openURL(url).catch(() =>
  Alert.alert('Sorry, something went wrong.', 'Please try again later.'))
  ;

export default function App() {

    //console.log(useDeviceOrientation());
    return(
        

        <View style= {{ flex:1}}>
          <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
            
            <ScrollView>
            <RowItem
        Title="Developer Name"
        onPress={() => alert('Thank you for using My Converter From Malekulastar Dhudhiyawala,Dahod Gujarat ,India')}
       
      />
        
       

        <RowSeparator />
        <RowItem
        Title="Contact via LinkedIn"
        onPress={() =>
          openLink(
            'https://www.linkedin.com/in/malekulastar-dhudhiyawala'
          )
        }
        rightIcon={
          <Entypo name="linkedin" size={20} color={colors.blue} />
        }
      />

       {/* <TouchableOpacity style={styles.row}>
            <Text style={styles.Text}>
                React native
            </Text>
            <Entypo  name="upload" size={20} color={colors.blue} />
    </TouchableOpacity> */}

<RowSeparator />
        <RowItem
        Title="Email-Us"
        onPress={() => Linking.openURL('mailto:malikdudhiyawala@gmail.com?subject=Feedback Regarding Currency Converter=body')}
        rightIcon={
          <Entypo name="mail" size={20} color={colors.blue} />
        }
      />

        {/* <TouchableOpacity style={styles.row}>
            <Text style={styles.Text}>
                React Native Basics
            </Text>
            <Entypo  name="chevron-left" size={20} color={colors.blue} />
        </TouchableOpacity> */}
        
        <RowSeparator />
        {/* <RowItem
        Title="Example"
        onPress={() => alert('Hello Beautifull!')}
        rightIcon={
          <Entypo name="chevron-left" size={20} color={colors.blue} />
        }
      /> */}
      
      </ScrollView>
        </View>
        


    
     ) ;
  
  
  }
 
  
  const styles = StyleSheet.create({
      row:{
          paddingHorizontal:20,
          paddingVertical:16,
          flexDirection:'row',
          alignItems:'center',
          justifyContent:'space-between',


      },
      Text:{
          fontSize:16,
          color: colors.Text,//'#005A9C',
      },
      Separator:{
          height: StyleSheet.hairlineWidth,
          backgroundColor: colors.border,//'#E2E2E2',
          marginLeft:20
      }


      
  })
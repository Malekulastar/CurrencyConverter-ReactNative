import React , { useState,useContext }  from 'react';
import {Keyboard,TouchableOpacity,ScrollView,StatusBar,Text,StyleSheet,Image,View,Dimensions,Alert,ActivityIndicator,} from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import colors from '../constants/colors';
import { ConversionInput } from '../Components/ConversionInput';
import {format} from 'date-fns';
import {Button } from '../Components/Button';
import {Entypo} from '@expo/vector-icons';
import {SafeAreaView} from 'react-native-safe-area-context';
import { ConversionContext } from '../util/ConversionContext.js';
import CurrencyList from './CurrencyList';
const screen = Dimensions.get('window');
import {api} from '../util/api.js';

export default ({ navigation }) => {
  
  const { BaseCurrency, QuoteCurrency, swapCurrencies,date,
    rates,isLoading } = useContext( ConversionContext );
  const [value, setValue] = useState('100');

  
  //const conversionRate = 0.89824;
  //const date = new Date();
  const conversionRate = rates[QuoteCurrency];
  
  const [scrollEnabled, setScrollEnabled] = useState(false);

return(
  
     
    <View style={styles.container}>
       <SafeAreaView style={styles.header}>
         <TouchableOpacity  onPress={() => navigation.push('Options')}>
         <Entypo name="cog" size={32} color={colors.white} />
         </TouchableOpacity>
        

         </SafeAreaView>


        
         <StatusBar barStyle="light-content" backgroundColor={colors.blue} />
        
        

         <View style={styles.logoContainer}>
        <Image
          source={require('../assets/background.png')}
          style={styles.logoBackground}
          resizeMode="contain"
        />
        <Image
          source={require('../assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.TextHeader}>
        Currency Converter
      </Text>

      {isLoading ? (
            <ActivityIndicator color={colors.white} size="large" />
          ) : (
            <>
      <ConversionInput
         text={BaseCurrency}
         value={value}
         onButtonPress={() =>
           navigation.push('CurrencyList', {
             title: 'BaseCurrency',
             //activeCurrency: BaseCurrency,
             isBaseCurrency: true,
             onChange: (currency) => setBaseCurrency(currency),
           })
         }
         keyboardType="numeric"
         onChangeText={(text) => setValue(text)}
      />
      <ConversionInput
        text={QuoteCurrency}
        value={
          value && `${(parseFloat(value) * conversionRate).toFixed(2)}`
        }
        editable={false}
        onButtonPress={() =>
          navigation.push('CurrencyList', {
            title: 'QuoteCurrency',
            //activeCurrency: QuoteCurrency,
            isBaseCurrency: false,
            onChange: (currency) => setQuoteCurrency(currency),
          })
          }
      />


<Text style={styles.text}>
            {`1 ${BaseCurrency} = ${conversionRate} ${QuoteCurrency} as of ${
              date && format(new Date(date), 'MMM do, yyyy')
            }`}
          </Text>
        <Button text="Reverse Currency" onPress={()=>  swapCurrencies()}/>
        </>)}
        <KeyboardSpacer onToggle={(visible) => setScrollEnabled(visible)} />
        

    </View>
    

)
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue,
    
  },
  content: {
    paddingTop: screen.height * 0.1,
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    marginTop:30
  },
  logoBackground: {
    width: screen.width / 0.45,
    height: screen.width * 0.45,
  },
  logo: {
    position: 'absolute',
    width: screen.width * 0.25,
    height: screen.width * 0.25,
  },
  TextHeader: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 20,
  },
  TextFooter: {
    fontSize: 14,
    color: colors.white,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 10,
  },
  header: {
    alignItems: 'flex-end',
    marginHorizontal: 15,
    marginVertical:5
  },
  text: {
    fontSize: 14,
    color: colors.white,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 10,
  },
});
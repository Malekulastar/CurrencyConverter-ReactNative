import React,{useContext} from 'react';
import { StatusBar,FlatList,View,StyleSheet } from 'react-native';
import { useSafeArea } from 'react-native-safe-area-context';
import { Entypo } from '@expo/vector-icons';

import colors from '../constants/colors';
import Currencies from '../data/Currencies.json';
import {RowItem,RowSeparator } from '../Components/RowItem.js';
import { ScrollView } from 'react-native-gesture-handler';
import{ConversionContext} from '../util/ConversionContext.js';
import {api} from '../util/api.js';

export default ({ navigation, route = {} }) => {
 const insets = useSafeArea();
  const {
    BaseCurrency,
    QuoteCurrency,
    setBaseCurrency,
    setQuoteCurrency,
  } = useContext(ConversionContext);

  const params = route.params || {};
  const { isBaseCurrency } = params;

    return(

    
    <View style={{flex:1,backgroundColor: colors.white,}}> 
<StatusBar barStyle="dark-content" backgroundColor={colors.white} />

<FlatList
        data={Currencies}
        renderItem={({ item }) => {
          let selected = false;

          if (isBaseCurrency && item === BaseCurrency) {
            selected = true;
          } else if (!isBaseCurrency && item === QuoteCurrency) {
            selected = true;
          }
          //const selected = activeCurrency === item;
          return (
            <RowItem
              Title={item}
              onPress={() => {
                if (isBaseCurrency) {
                  setBaseCurrency(item);
                } else {
                  setQuoteCurrency(item);
                }
                navigation.pop();
              }}
              rightIcon={
                selected && (
                  <View style={styles.icon}>
                    <Entypo name="check" size={20} color={colors.white} />
                  </View>
                )
              }
            />
          );
        }}
        keyExtractor={(item) => item}
        ItemSeparatorComponent={() => <RowSeparator />}
        ListFooterComponent={() => (
            <View style={{ paddingBottom: insets.bottom }} />
          )}
        contentContainerStyle={{
            flexGrow: 1,
            }}
        
      />



    </View>
  );
};
   

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.blue,
  },
});
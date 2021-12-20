import React from 'react';
import {TouchableOpacity,Text,StyleSheet,Alert,View} from 'react-native';
import colors from '../constants/colors';

export const RowItem = ({ Title ,rightIcon ,onPress }) =>{
return (
    <TouchableOpacity onPress={onPress} style={styles.row}>
    <Text style={styles.Text}>
        {Title}
    </Text>
    {rightIcon}
</TouchableOpacity>

);
}

export const RowSeparator = () => <View style={styles.Separator} />;
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

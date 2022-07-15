import {React} from 'react'
import { StyleSheet, Text, View } from 'react-native';

export default function TopHead() {
    return (
      <View style={styles.container}>
        <Text></Text>
       
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
        position:'absolute',
        top:0,
        height:60,
     width:'100%',
    backgroundColor: 'red',

    },
  });
  
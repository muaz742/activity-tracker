import {React} from 'react'
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native';
export default function BottomNav() {
    return (
      <View style={styles.containerParent}>
        
          <View style={styles.topRound}>        
 <Text style={styles.buttonsTrnd}>  </Text>
<Text style={styles.buttonsTrnd}>  </Text>
<Text style={styles.buttonsTrndMenu}>  </Text>
<Text style={styles.buttonsTrnd}>  </Text>
<Text style={styles.buttonsTrnd}>  </Text>
</View>



      <View style={styles.container}>

        
          
        <Text style={styles.buttons}> news </Text>
        <Text style={styles.buttons}> news </Text>
        <Text style={styles.buttonsMenu}> Menu </Text>
        <Text style={styles.buttons}> news </Text>
        <Text style={styles.buttons}> news </Text>
       
        
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({

    containerParent:{
flex:1,
flexDirection:'column',
width:'100%',
position:'absolute',
bottom:0
  
    },
    container: {
      width:'100%',
      backgroundColor:'red',
      position:'relative',
      bottom:0,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      left:0,
    },
    buttons:{
      width:'20%',
      paddingVertical:20,
      
      color:'#d4d4d4',
      fontSize:15,
      textAlign:'center',
      borderRightColor:'white',
      backgroundColor:'red',
      borderRightWidth:0.5

  
      

    },
    buttonsMenu:{
      width:'20%',
      paddingVertical:20,
      backgroundColor:'red',
   fontWeight:'bold',

 color:'white',
      fontSize:15,
      textAlign:'center',
      borderRightColor:'white',
      borderLeftColor:'white',
      borderRightWidth:0.5,

      
    },
    buttonsTrnd:{
      width:'20%',
      paddingVertical:10,
      backgroundColor:'white',
      borderTopLeftRadius:45,
      borderTopRightRadius:45,

 color:'white',
      fontSize:15,
      textAlign:'center',
      borderRightColor:'white',
      borderRightWidth:0.5,
    },
    buttonsTrndMenu:{
      width:'20%',
      paddingVertical:25,
      backgroundColor:'red',
      borderTopLeftRadius:45,
      borderTopRightRadius:45,

 color:'white',
      fontSize:15,
      textAlign:'center',
      borderRightColor:'white',
      borderRightWidth:0.5,
    },
    topRound:{
      width:'100%',
      flexDirection:'row',
      height:10,
      position:'relative',
      left:0,
      bottom:10
    }
  });
  
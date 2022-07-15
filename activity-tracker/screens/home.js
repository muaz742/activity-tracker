import {React} from 'react'
import { StyleSheet, Text, View , Image} from 'react-native';
import BottomNav from '../components/bottomNav';
import TopHead from '../components/TopHead';
import TopSlider from '../components/topSlider';
export default function Home() {
    return (
      <View style={styles.container}>
        <TopHead />
<View style={styles.accountRegister}> 
<View><Text style={{color:'white', paddingVertical:20, paddingLeft:10,}}>Still Not Registered ? get an account !</Text></View>
<View>

<Image source={{uri: 'https://reactjs.org/logo-og.png'}}
   style={{width: 80, height: 80, borderRadius:100,marginTop:-10, marginRight:-14}} />
  </View>
</View>


<View> 
<TopSlider />
</View>

 <BottomNav />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
 
    accountRegister: {
width:'90%',
position:'absolute',
top:50,

flexDirection:'row',
justifyContent:'space-between',
marginLeft:'10%',
backgroundColor:'blue',
height:60,

    }, 
     tinyLogo: {
      width: 50,
      height: 50,
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
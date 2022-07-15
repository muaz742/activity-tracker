import React from "react";
import { Text, TouchableOpacity, View, ImageBackground, StyleSheet } from "react-native";
import Swiper from "react-native-web-swiper";

export default class TopSlider extends React.Component {




  render() {
    return (
      <View style={{ flex: 1, maxHeight: 210 }}>

        <View style={{ flex: 1 }}>
          <Swiper
            vertical
          
            loop
            timeout={-4.5}
            controlsProps={{
              prevTitle: '',
             nextTitle: '',
              dotActiveStyle: { backgroundColor: 'red' },
              cellsContent: {
                'bottom-left': (<Text></Text>),

              },
              gesturesEnabled: ()=>{return false}
            
            }}
          >
           
              <View style={{ width:'100%', flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "rgba(20,20,200,0.3)" }}>
                <Text></Text>
              </View>   
            


                 
                
              <View style={{ width:'100%',flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "rgba(20,20,200,0.3)" }}>
                <Text></Text>
              </View>   
            


                
              <View style={{width:'100%', flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "rgba(20,20,200,0.3)" }}>
                <Text></Text>
              </View>   
            



          </Swiper>
        </View>
      </View>
    )
  }
}




const styles = StyleSheet.create({

  image: {
    flex: 1,
    textAlign: "center"

  }

})
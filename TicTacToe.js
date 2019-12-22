import React, { Component } from 'react';
import { View,
    Image,
    Button,
    Text,
    StyleSheet,
    renderNavigationView,
    Alert,
    TextInput,
    AsyncStorage,
    TouchableOpacity,
   

} from 'react-native';
export default class TicTacToe extends Component{
    constructor(props){
        
    this.state={
        num:1,
        RedColor:'#ff0000',
        YellowColor:'#ffff00',
        ColorCheck:true,
     
}

}



    render(){
        return(
            <View style={{flex:1,flexDirection:'column',padding:10 ,}}>
     
  

<View style={{flex:60,backgroundColor:'white'}}>
<Text>mintu</Text>
<View style={{width:90,height:20,backgroundColor:'red'}}></View>
</View>




<View style={{flex:40,backgroundColor:'black',flexDirection:'row'}}>
<View style={{ ref,borderRadius:10,borderWidth:5,borderColor:'white',borderStyle:'dotted',margin:20}}></View>
</View>
           </View>
        )
        }
}
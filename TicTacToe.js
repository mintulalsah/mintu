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
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
 class TicTacToe extends Component{
    constructor(props){
        super(props)
    this.state={
        num:1,
        RedColor:'#ff0000',
        YellowColor:'#ffff00',
        EmptyForYellow:'yellow Won',
        EmptyForRed:'Red Won',
        EmptyForDraw:'Match Draw',
        yellowWonStatus:false,
        redWonStatus:false,
        drawStatus:false,

        Disabled11:false,
        Disabled12:false,
        Disabled13:false,
        Disabled21:false,
        Disabled22:false,
        Disabled23:false,
        Disabled31:false,
        Disabled32:false,
        Disabled33:false,
        ColorCheck:true,

            r11:'',
            r12:'',
            r13:'',
            r21:'',
            r22:'',
            r23:'',
            r31:'',
            r32:'',
            r33:'',

            r11Color:'#ffffff',
            r12Color:'#ffffff',
            r13Color:'#ffffff',
            r21Color:'#ffffff',
            r22Color:'#ffffff',
            r23Color:'#ffffff',
            r31Color:'#ffffff',
            r32Color:'#ffffff',
            r33Color:'#ffffff',
     
}

}

                vallidate=()=>{
                    console.log("r11 color is #ffff00 or not  : "+this.state.r11Color)
                    if((this.state.r11Color==this.state.YellowColor)&&
                    (this.state.r12Color==this.state.YellowColor)&&
                    (this.state.r13Color==this.state.YellowColor)){
               // alert("yellow won the match in 11,12,13")
               this.setState({yellowWonStatus:this.state.yellowWonStatus=true})
               this.setState({redWonStatus:this.state.redWonStatus=false})
            this.setState({Disabled11:this.state.Disabled11=true,Disabled12:this.state.Disabled12=true,
                Disabled13:this.state.Disabled13=true,Disabled21:this.state.Disabled21=true,
                Disabled22:this.state.Disabled22=true,Disabled23:this.state.Disabled23=true,
                Disabled31:this.state.Disabled31=true,Disabled32:this.state.Disabled32=true,
                Disabled33:this.state.Disabled33=true
            
            
            })   
               // this.props.navigation.replace('restartgame')

                    }
                    if((this.state.r21Color==this.state.YellowColor)&&
                    (this.state.r22Color==this.state.YellowColor)&&
                    (this.state.r23Color==this.state.YellowColor)){
                 //alert("yellow won the match in 21,22,23")
                this.setState({yellowWonStatus:this.state.yellowWonStatus=true})
                this.setState({redWonStatus:this.state.redWonStatus=false})
                this.setState({Disabled11:this.state.Disabled11=true,Disabled12:this.state.Disabled12=true,
                    Disabled13:this.state.Disabled13=true,Disabled21:this.state.Disabled21=true,
                    Disabled22:this.state.Disabled22=true,Disabled23:this.state.Disabled23=true,
                    Disabled31:this.state.Disabled31=true,Disabled32:this.state.Disabled32=true,
                    Disabled33:this.state.Disabled33=true
                
                
                })   
               // this.props.navigation.replace('restartgame')
                    }
                    if((this.state.r31Color==this.state.YellowColor)&&
                    (this.state.r32Color==this.state.YellowColor)&&
                    (this.state.r33Color==this.state.YellowColor)){
               // alert("yellow won the match in 31,32,33")
               this.setState({yellowWonStatus:this.state.yellowWonStatus=true})
               this.setState({redWonStatus:this.state.redWonStatus=false})
               this.setState({Disabled11:this.state.Disabled11=true,Disabled12:this.state.Disabled12=true,
                Disabled13:this.state.Disabled13=true,Disabled21:this.state.Disabled21=true,
                Disabled22:this.state.Disabled22=true,Disabled23:this.state.Disabled23=true,
                Disabled31:this.state.Disabled31=true,Disabled32:this.state.Disabled32=true,
                Disabled33:this.state.Disabled33=true
            
            
            })   
               // this.props.navigation.replace('restartgame')
                    }

                    //coloum checking
                    if((this.state.r11Color==this.state.YellowColor)&&
                    (this.state.r21Color==this.state.YellowColor)&&
                    (this.state.r31Color==this.state.YellowColor)){
                //alert("yellow won the match in 11,21,31")
                this.setState({yellowWonStatus:this.state.yellowWonStatus=true})
                this.setState({redWonStatus:this.state.redWonStatus=false})
                this.setState({Disabled11:this.state.Disabled11=true,Disabled12:this.state.Disabled12=true,
                    Disabled13:this.state.Disabled13=true,Disabled21:this.state.Disabled21=true,
                    Disabled22:this.state.Disabled22=true,Disabled23:this.state.Disabled23=true,
                    Disabled31:this.state.Disabled31=true,Disabled32:this.state.Disabled32=true,
                    Disabled33:this.state.Disabled33=true
                
                
                })   
               // this.props.navigation.replace('restartgame')
                    }
                    if((this.state.r12Color==this.state.YellowColor)&&
                    (this.state.r22Color==this.state.YellowColor)&&
                    (this.state.r32Color==this.state.YellowColor)){
               // alert("yellow won the match in 12,22,32")
               this.setState({yellowWonStatus:this.state.yellowWonStatus=true})
               this.setState({redWonStatus:this.state.redWonStatus=false})
               this.setState({Disabled11:this.state.Disabled11=true,Disabled12:this.state.Disabled12=true,
                Disabled13:this.state.Disabled13=true,Disabled21:this.state.Disabled21=true,
                Disabled22:this.state.Disabled22=true,Disabled23:this.state.Disabled23=true,
                Disabled31:this.state.Disabled31=true,Disabled32:this.state.Disabled32=true,
                Disabled33:this.state.Disabled33=true
            
            
            })   
               // this.props.navigation.replace('restartgame')
                    }
                    if((this.state.r13Color==this.state.YellowColor)&&
                    (this.state.r23Color==this.state.YellowColor)&&
                    (this.state.r33Color==this.state.YellowColor)){
                //alert("yellow won the match in 12,22,32")
                this.setState({yellowWonStatus:this.state.yellowWonStatus=true})
                this.setState({redWonStatus:this.state.redWonStatus=false})
                this.setState({Disabled11:this.state.Disabled11=true,Disabled12:this.state.Disabled12=true,
                    Disabled13:this.state.Disabled13=true,Disabled21:this.state.Disabled21=true,
                    Disabled22:this.state.Disabled22=true,Disabled23:this.state.Disabled23=true,
                    Disabled31:this.state.Disabled31=true,Disabled32:this.state.Disabled32=true,
                    Disabled33:this.state.Disabled33=true
                
                
                })   
               // this.props.navigation.replace('restartgame')
                    }


                    //for red color
                    if((this.state.r11Color==this.state.RedColor)&&
                    (this.state.r12Color==this.state.RedColor)&&
                    (this.state.r13Color==this.state.RedColor)){
               // alert("red won the match in 11,12,13")
               this.setState({yellowWonStatus:this.state.yellowWonStatus=false})
               this.setState({redWonStatus:this.state.redWonStatus=true})
               this.setState({Disabled11:this.state.Disabled11=true,Disabled12:this.state.Disabled12=true,
                Disabled13:this.state.Disabled13=true,Disabled21:this.state.Disabled21=true,
                Disabled22:this.state.Disabled22=true,Disabled23:this.state.Disabled23=true,
                Disabled31:this.state.Disabled31=true,Disabled32:this.state.Disabled32=true,
                Disabled33:this.state.Disabled33=true
            
            
            })   
                //this.props.navigation.replace('restartgame')
                    }
                    if((this.state.r21Color==this.state.RedColor)&&
                    (this.state.r22Color==this.state.RedColor)&&
                    (this.state.r23Color==this.state.RedColor)){
                //alert("red won the match in 21,22,23")
                this.setState({yellowWonStatus:this.state.yellowWonStatus=false})
                this.setState({redWonStatus:this.state.redWonStatus=true})
                this.setState({Disabled11:this.state.Disabled11=true,Disabled12:this.state.Disabled12=true,
                    Disabled13:this.state.Disabled13=true,Disabled21:this.state.Disabled21=true,
                    Disabled22:this.state.Disabled22=true,Disabled23:this.state.Disabled23=true,
                    Disabled31:this.state.Disabled31=true,Disabled32:this.state.Disabled32=true,
                    Disabled33:this.state.Disabled33=true
                
                
                })   
               // this.props.navigation.replace('restartgame')
                    }
                    if((this.state.r31Color==this.state.RedColor)&&
                    (this.state.r32Color==this.state.RedColor)&&
                    (this.state.r33Color==this.state.RedColor)){
                //alert("red won the match in 31,32,33")
                this.setState({yellowWonStatus:this.state.yellowWonStatus=false})
                this.setState({redWonStatus:this.state.redWonStatus=true})
                this.setState({Disabled11:this.state.Disabled11=true,Disabled12:this.state.Disabled12=true,
                    Disabled13:this.state.Disabled13=true,Disabled21:this.state.Disabled21=true,
                    Disabled22:this.state.Disabled22=true,Disabled23:this.state.Disabled23=true,
                    Disabled31:this.state.Disabled31=true,Disabled32:this.state.Disabled32=true,
                    Disabled33:this.state.Disabled33=true
                
                
                })   
               // this.props.navigation.replace('restartgame')
                    }

                    //coloum checking
                    if((this.state.r11Color==this.state.RedColor)&&
                    (this.state.r21Color==this.state.RedColor)&&
                    (this.state.r31Color==this.state.RedColor)){
               // alert("red won the match in 11,21,31")
               this.setState({yellowWonStatus:this.state.yellowWonStatus=false})
               this.setState({redWonStatus:this.state.redWonStatus=true})
               this.setState({Disabled11:this.state.Disabled11=true,Disabled12:this.state.Disabled12=true,
                Disabled13:this.state.Disabled13=true,Disabled21:this.state.Disabled21=true,
                Disabled22:this.state.Disabled22=true,Disabled23:this.state.Disabled23=true,
                Disabled31:this.state.Disabled31=true,Disabled32:this.state.Disabled32=true,
                Disabled33:this.state.Disabled33=true
            
            
            })   
               // this.props.navigation.replace('restartgame')
                    }
                    if((this.state.r12Color==this.state.RedColor)&&
                    (this.state.r22Color==this.state.RedColor)&&
                    (this.state.r32Color==this.state.RedColor)){
                //alert("red won the match in 12,22,32")
                this.setState({yellowWonStatus:this.state.yellowWonStatus=false})
                this.setState({redWonStatus:this.state.redWonStatus=true})
                this.setState({Disabled11:this.state.Disabled11=true,Disabled12:this.state.Disabled12=true,
                    Disabled13:this.state.Disabled13=true,Disabled21:this.state.Disabled21=true,
                    Disabled22:this.state.Disabled22=true,Disabled23:this.state.Disabled23=true,
                    Disabled31:this.state.Disabled31=true,Disabled32:this.state.Disabled32=true,
                    Disabled33:this.state.Disabled33=true
                
                
                })   
               // this.props.navigation.replace('restartgame')
                    }
                    if((this.state.r13Color==this.state.RedColor)&&
                    (this.state.r23Color==this.state.RedColor)&&
                    (this.state.r33Color==this.state.RedColor)){
                //alert("red won the match in 12,22,32")
                this.setState({yellowWonStatus:this.state.yellowWonStatus=false})
                this.setState({redWonStatus:this.state.redWonStatus=true})
                this.setState({Disabled11:this.state.Disabled11=true,Disabled12:this.state.Disabled12=true,
                    Disabled13:this.state.Disabled13=true,Disabled21:this.state.Disabled21=true,
                    Disabled22:this.state.Disabled22=true,Disabled23:this.state.Disabled23=true,
                    Disabled31:this.state.Disabled31=true,Disabled32:this.state.Disabled32=true,
                    Disabled33:this.state.Disabled33=true
                
                
                })   
               // this.props.navigation.replace('restartgame')
                    }



                    // two corner for red
                    if((this.state.r11Color==this.state.RedColor)&&
                    (this.state.r22Color==this.state.RedColor)&&
                    (this.state.r33Color==this.state.RedColor)){
                //alert("red won the match in 11,22,33")
                this.setState({yellowWonStatus:this.state.yellowWonStatus=false})
                this.setState({redWonStatus:this.state.redWonStatus=true})
                this.setState({Disabled11:this.state.Disabled11=true,Disabled12:this.state.Disabled12=true,
                    Disabled13:this.state.Disabled13=true,Disabled21:this.state.Disabled21=true,
                    Disabled22:this.state.Disabled22=true,Disabled23:this.state.Disabled23=true,
                    Disabled31:this.state.Disabled31=true,Disabled32:this.state.Disabled32=true,
                    Disabled33:this.state.Disabled33=true
                
                
                })   
                //this.props.navigation.replace('restartgame')
                    }
                    if((this.state.r13Color==this.state.RedColor)&&
                    (this.state.r22Color==this.state.RedColor)&&
                    (this.state.r31Color==this.state.RedColor)){
                //alert("red won the match in 13,22,31")
                this.setState({yellowWonStatus:this.state.yellowWonStatus=false})
                this.setState({redWonStatus:this.state.redWonStatus=true})
                this.setState({Disabled11:this.state.Disabled11=true,Disabled12:this.state.Disabled12=true,
                    Disabled13:this.state.Disabled13=true,Disabled21:this.state.Disabled21=true,
                    Disabled22:this.state.Disabled22=true,Disabled23:this.state.Disabled23=true,
                    Disabled31:this.state.Disabled31=true,Disabled32:this.state.Disabled32=true,
                    Disabled33:this.state.Disabled33=true
                
                
                })   
                //this.props.navigation.replace('restartgame')
                    }
                    // two corner for yellow
                    if((this.state.r11Color==this.state.YellowColor)&&
                    (this.state.r22Color==this.state.YellowColor)&&
                    (this.state.r33Color==this.state.YellowColor)){
               // alert("yellow won the match in 11,22,33")
                this.setState({yellowWonStatus:this.state.yellowWonStatus=true})
                this.setState({redWonStatus:this.state.redWonStatus=false})
                this.setState({Disabled11:this.state.Disabled11=true,Disabled12:this.state.Disabled12=true,
                    Disabled13:this.state.Disabled13=true,Disabled21:this.state.Disabled21=true,
                    Disabled22:this.state.Disabled22=true,Disabled23:this.state.Disabled23=true,
                    Disabled31:this.state.Disabled31=true,Disabled32:this.state.Disabled32=true,
                    Disabled33:this.state.Disabled33=true
                
                
                })   
                //this.props.navigation.replace('restartgame')
                    }
                    if((this.state.r13Color==this.state.YellowColor)&&
                    (this.state.r22Color==this.state.YellowColor)&&
                    (this.state.r31Color==this.state.YellowColor)){
               // alert("yellow won the match in 13,22,31")
               this.setState({yellowWonStatus:this.state.yellowWonStatus=true})
               this.setState({redWonStatus:this.state.redWonStatus=false})
               this.setState({Disabled11:this.state.Disabled11=true,Disabled12:this.state.Disabled12=true,
                Disabled13:this.state.Disabled13=true,Disabled21:this.state.Disabled21=true,
                Disabled22:this.state.Disabled22=true,Disabled23:this.state.Disabled23=true,
                Disabled31:this.state.Disabled31=true,Disabled32:this.state.Disabled32=true,
                Disabled33:this.state.Disabled33=true
            
            
            })   


//select color for user code
                    redSelected=()=>{
                    alert("redslected")
                    }
                    yellowSelected=()=>{
                        alert('yellow Selected')
                    }







               // this.props.navigation.replace('restartgame')
                    }


                    else{
                        if(this.state.num==10&&(this.state.redWonStatus==false)&&(this.state.yellowWonStatus==false)){
                              // alert("draw")
                              this.setState({drawStatus:this.state.drawStatus=true})
                        }
                        // draw match
                       
                    }
                }

                //restatrt game
                restart=async()=>{
                   await this.props.navigation.replace('restartgame')
                // code for reset
                }



//11
            r11Click=async()=>{
            this.state.num++;
            console.log("r11 color before  : "+this.state.r11Color)
                if(this.state.num%2==0){

               await this.setState({r11Color:'#ffff00'}) 
               
                }
                else{
                  await  this.setState({r11Color:this.state.RedColor})   
                }
               
            this.vallidate();
            await this.setState({Disabled11:this.state.Disabled11=true})
                console.log("--------------------------------------------------")
            }
//12            
            r12Click=async()=>{
                this.state.num++;
            if(this.state.num%2==0){
               await this.setState({r11:11,r12Color:this.state.YellowColor}) 
            }
            else{
               await this.setState({r12Color:this.state.RedColor})   
            }
            this.vallidate();
            await this.setState({Disabled12:this.state.Disabled12=true})
            }


//13
            r13Click=async()=>{
                this.state.num++;
            if(this.state.num%2==0){
               await this.setState({r11:11,r13Color:this.state.YellowColor}) 
            }
            else{
               await this.setState({r13Color:this.state.RedColor})   
            }
            this.vallidate();
            await this.setState({Disabled13:this.state.Disabled13=true})
            }
    
    
 //21 
           r21Click=async()=>{
           
            this.state.num++;
            if(this.state.num%2==0){
              await  this.setState({r11:11,r21Color:this.state.YellowColor}) 
            }
            else{
               await this.setState({r21Color:this.state.RedColor})   
            }
            this.vallidate();
            await this.setState({Disabled21:this.state.Disabled21=true})
        }
 
 //22
            r22Click=async()=>{
                this.state.num++;
            if(this.state.num%2==0){
               await this.setState({r11:11,r22Color:this.state.YellowColor}) 
            }
            else{
               await this.setState({r22Color:this.state.RedColor})   
            }
            this.vallidate();
            await this.setState({Disabled22:this.state.Disabled22=true})
            }
     
 //23    
            r23Click=async()=>{
                this.state.num++;
            if(this.state.num%2==0){
               await this.setState({r11:11,r23Color:this.state.YellowColor}) 
            }
            else{
              await  this.setState({r23Color:this.state.RedColor})   
            }
            this.vallidate();
            await this.setState({Disabled23:this.state.Disabled23=true})
            }
     
     
 //31    
            r31Click=async()=>{
                this.state.num++;
            if(this.state.num%2==0){
              await  this.setState({r11:11,r31Color:this.state.YellowColor}) 
            }
            else{
               await this.setState({r31Color:this.state.RedColor})   
            }
            this.vallidate();
            await this.setState({Disabled31:this.state.Disabled31=true})

            }
     
 //32    
            r32Click=async()=>{
                this.state.num++;
            if(this.state.num%2==0){
              await  this.setState({r11:11,r32Color:this.state.YellowColor}) 
            }
            else{
              await  this.setState({r32Color:this.state.RedColor})   
            }
            this.vallidate();
            await this.setState({Disabled32:this.state.Disabled32=true})

            }
     
 //33    
            r33Click=async()=>{
                this.state.num++;
            if(this.state.num%2==0){
              await  this.setState({r11:11,r33Color:this.state.YellowColor}) 
            }
            else{
               await this.setState({r33Color:this.state.RedColor})   
            }
            this.vallidate();
            await this.setState({Disabled33:this.state.Disabled33=true})
            }


    render(){
        return(
            <View style={{flex:1,flexDirection:'column',padding:10 ,}}>
      
       <View style={{flex:10,flexDirection:'row',padding:10,}}>
        <TouchableOpacity style={{backgroundColor:this.state.RedColor,flex:10 ,}} onPress={()=>this.redSelected()}>
        </TouchableOpacity>
         <TouchableOpacity  style={{backgroundColor:this.state.YellowColor,flex:10 }} onPress={()=>this.redSelected()}>
          </TouchableOpacity>
       </View>
       <View style={{ flex:10,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
      {this.state.yellowWonStatus ? <Text style= {{fontSize:25,fontWeight:"bold",color:'red'}}> {this.state.EmptyForYellow} </Text> : null}
       {this.state.redWonStatus ? <Text style= {{fontSize:25,fontWeight:"bold",color:'red'}}> {this.state.EmptyForRed} </Text> : null}
       {this.state.drawStatus ? <Text style= {{fontSize:25,fontWeight:"bold",color:'red'}}> {this.state.EmptyForDraw} </Text> : null}
       </View>
      
   <View style={{flex:60}} >
            <View style={{flex:20,flexDirection:'row'}}>       
                       
                        <TouchableOpacity disabled={this.state.Disabled11} style={{backgroundColor:this.state.r11Color,flex:10,borderColor:'black',borderWidth:3, }} onPress={()=>this.r11Click()}>
                        </TouchableOpacity>
                        
                        <TouchableOpacity disabled={this.state.Disabled12} style={{backgroundColor:this.state.r12Color,flex:10 ,borderColor:'black',borderWidth:3}} onPress={()=>this.r12Click()}>
                        </TouchableOpacity>
                        <TouchableOpacity disabled={this.state.Disabled13} style={{backgroundColor:this.state.r13Color,flex:10 ,borderColor:'black',borderWidth:3}} onPress={()=>this.r13Click()}>
                        </TouchableOpacity>
                    
          </View>
        



<View style={{flex:20,flexDirection:'row'}}>       
                            <TouchableOpacity disabled={this.state.Disabled21}  style={{backgroundColor:this.state.r21Color,flex:10 ,borderColor:'black',borderWidth:3}} onPress={()=>this.r21Click()}>
                            </TouchableOpacity>
                            <TouchableOpacity disabled={this.state.Disabled22} style={{backgroundColor:this.state.r22Color,flex:10 ,borderColor:'black',borderWidth:3}} onPress={()=>this.r22Click()}>
                            </TouchableOpacity>
                            <TouchableOpacity disabled={this.state.Disabled23} style={{backgroundColor:this.state.r23Color,flex:10 ,borderColor:'black',borderWidth:3}} onPress={()=>this.r23Click()}>
                            </TouchableOpacity>
                    
          </View>
             
            
         <View style={{flex:20,flexDirection:'row'}}>       
                        <TouchableOpacity disabled={this.state.Disabled31} style={{backgroundColor:this.state.r31Color,flex:10 ,borderColor:'black',borderWidth:3}} onPress={()=>this.r31Click()}>
                        </TouchableOpacity>
                        <TouchableOpacity disabled={this.state.Disabled32} style={{backgroundColor:this.state.r32Color,flex:10 ,borderColor:'black',borderWidth:3}} onPress={()=>this.r32Click()}>
                        </TouchableOpacity>
                        <TouchableOpacity disabled={this.state.Disabled33} style={{backgroundColor:this.state.r33Color,flex:10 ,borderColor:'black',borderWidth:3}} onPress={()=>this.r33Click()}>
                        </TouchableOpacity>
                    
          </View>
        
          </View>

            

            

          


            <View style={{flex:10,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity onPress={()=>this.restart()}>
                <Text style={{fontSize:25,color:'blue',fontStyle:"italic",fontWeight:"bold"}}>RESTATRT GAME</Text>
            </TouchableOpacity>
            </View>
           </View>
        )
    }
}

const AppNavigator = createStackNavigator(
    {
    
     restartgame:{
      screen:TicTacToe,
      navigationOptions:  {
       headerLeft: null,
         header:null
     
    }

    },
},
    
    
   
  {
    initialRouteName:'restartgame'
  }
   
  );
  
  export default createAppContainer(AppNavigator);

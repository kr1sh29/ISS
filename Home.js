import React,{Component}from "react"
import {
        Text,
        View,
StyleSheet,
TouchableOpacity,
Platform,
StatusBar,
ImageBackground,
Image,

} from  "react-native"

export default class HomeScreen extends Component{
                render(){
                        return(

                <View style = {styles.container}>
                <SafeAreaView style ={styles.DroidSafeArea}/>
                <ImageBackground Source ={require("../assets/bg.png")} style = {styles.backgroundImage}>
                <View style = {styles.titleBar}>
                <Text style = {styles.titleText}>I.S.S tracker app</Text>
                </View>    


                <TouchableOpacity style = {styles.routeCard} onpress = {() =>{
                this.props.navigation.navigate("I.S.S location")
                }}>
                <Text style = {styles.routeText}>I.S.S location</Text>
                <Text style = {styles.knowMore }>{"Know More .....>"}</Text>
                <Text style = {styles.bgDigit}>1</Text>
                <Image source = {require("../assets/iss_icon.png")}style={styles.iconImage}>

                </Image>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.routeCard} onPress = {() => {
                this.props.navigation.navigate("Meteor")
                }}>
                <Text style = {styles.routeText}>I.S.S location</Text>
                <Text style = {styles.knowMore }>{"Know More .....>"}</Text>
                <Text style = {styles.bgDigit}>2</Text>
                <Image source = {require("../assets/iss_icon.png")}style={styles.iconImage}>

                </Image>


                </TouchableOpacity>
                </ImageBackground>

                                
                </View>    
                )
        }
}

const styles = StyleSheet.create({
container:{
flex:1
},
backgroundImage:{
flex:1,
resizeMode:"cover"
},
routeCard:{
flex:0.25,
marginLeft:50,
marginRight:50,
marginTop:50,
backgroundRadius:30,
backgroundColor:"white"
},
titleBar:{
flex:0.15,
justifyContent:"center",
alignItems:"center"
},
titleText:{
fontSize:40,
fontWeight:"bold",
color:"white"
},
routeText:{
fontSize:35,
fontWeight:"bold",
color:"black",
marginTop:75,
paddingLeft:30,
},
knowMore:{
paddingLeft:30,
color:"green",
fontSize:15
},
bgDigit :{
        psoition :"absolute ",
        color:"red",
        fontSize:24,
        right:20,
        bottom :-16,
        zIndex:1
},
iconImage :{
        position:"absolute ",
        height:200,
        weight:200,
        resizeMode:"contain ",
        right :20,
        top:-40
}
}) 


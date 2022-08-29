import REcat , {Component } from  "react "
import {
    View , 
    Text ,
    StyleSheet , 
    Alert 
} from "react-native "
import axios from "axios "

export default class IssLocationScreen extends Component{
constructor(props){
super(props)
this.state = {
location:{}
}
}

componentDidMount(){
this.getISSLocation()
try{
setInterva(async()=>{
this.getISSLocation()
},5000)   
}
catch(e){
console.log(e)  
}
}
getIssLocation = () => {
    axios
        .get("https://api.wheretheiss.at/v1/satellites/25544")
        .then(response => {
            this.setState({ location: response.data })
        })
        .catch(error => {
            Alert.alert(error.message)
        })
}
render(){
if(Object.keys(this.state.location).length===0){
return(
<View
style ={{
flex:1,
justifyConten:"center",
alignItems:"center",
  
}}>
<Text>loading</Text>
    
</View>
)
}
else{
return(
<View style = {styles.infoContainer }>
<Text style = {styles.infoText}>latitude:{this.state.location.latitude}</Text>
<Text style = {styles.infoText}>longitude:{this.state.location.longitude}</Text>
<Text style = {styles.infoText}>altitude:{this.state.location.altitude}</Text>
<Text style = {styles.infoText}>velocity:{this.state.location.velocity}</Text>
</View>
)
}

}

}

const styles=StyleSheet .create ({
    infoContainer :{
        flex:0.3,
        backgroundColor :"white ",
        marginTop :10,
        borderLeftRadius :10,
        borderRightRadius :10,
        padding :10
    },
    infoText :{
        fontSize:10,
        color:"black ",
        fontWeight :"bold "
    }
})











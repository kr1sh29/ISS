import React,{Component}from "react"
import {
        Text,
        View,
        StyelSheet ,
        ImageBackground,
        Image ,
        SafeAreaView,
        Alert , 
        Platform

} from  "react-native"
import MapView ,{Mraker } from "react -native-maps"
import axios from "axios "

export default class HomeScreen extends Component{
        constructor (props){
                super(props)
                this.state ={
                        loaction :{}
                }
        }

        componentDidMount(){
                this.getIssLoaction ()
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

    render() {
        if (Object.keys(this.state.location).length === 0) {
            return (
                <View   
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                    <Text>Loading</Text>
                </View>
            )
        } 
        else{
                return (
                        <View style ={styles . container }>
                                <SafeAreaView style ={styles .droidSafeArea}/>
                                <ImageBackgroun d source ={require ("../assets/bg.png")} style ={styles.bgImage }>
                                        <View style ={styles .titleContainer }>
                                                <Text style ={styles . titleText }>Iss Loaction </Text>
                                                </View>
                                                <View style ={styles.mapContainer }>
                                                        <MapView
                                                        style ={styles.mapContainer }
                                                        region ={{
                                                                latitude :this.state.location.latitude ,
                                                                longitude :this.state.location.longitude ,
                                                               altitude:this.state.location.altitude ,
                                                              velocity :this.state.location.velocity ,
                                                              latitudeDelta :100,
                                                              longitudeDelta :100
                                                        }}
                                                        >
                                                                <Marker 
                                                                coordinate={{latitude :this.state.location .latitude , longitude :this.state.location.longitude}}
                                                                >

                                                                </Marker>
                                                        </MapView>
                                                </View>
                                                <View style={styles.infoContainer}>
                            <Text style={styles.infoText}>Latitude: {this.state.location.latitude}</Text>
                            <Text style={styles.infoText}>Longitude: {this.state.location.longitude}</Text>
                            <Text style={styles.infoText}>Altitude (KM): {this.state.location.altitude}</Text>
                            <Text style={styles.infoText}>Velocity (KM/H): {this.state.location.velocity}</Text>
                        </View>
                                </ImageBackgroun>
                        </View>
                )
        }
}
}

const styles = styleSheet.create({
container:{
flex:1
},
backgroundImage:{
flex:1,
resizeMode:"cover",
},
titleContainer:{
flex:0.1,
justifyContent:"center",
alignItems:"end"
},
titleText:{
fontSize:20,
fontWieght:"bold",
alignedItem:"center",
color:"white"
},
mapContainer:{
flex:0.7
},
map:{
width:100,
hieght:100
},
infoContainer:{
flex:0.2,
backgroundColor:"white",
marginTop:30,
borderTopLeftRadius:30,
borderTopRightRadius:30
},
infoText:{
fontSize:15,
color:"black",
fontWieght:"bold"
}
})





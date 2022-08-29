import "react-native-gesture-handler "
import * as React from "react "
import {NavigationContainer } from "@react-navigation/native "
import {createStackNavigator } from "@react-navigation/stack"

import HomeScreen  from "./screens/Meteor"
import IssLocationScreen from "./screens/IssLocation "
import MeteorScreen from "./screens/Meteors"

const Stack =createStackNavigator()

function App(){
  return (
    <NavigationContainer>
      <Staxck.Navigator initialRouteName = "Home " sceeenOptions ={{
        headerShown :false 
      }}>
        <Stack.Navigator name ="Home " component ={HomeScreen }/>
        <Stack.Navigator name ="IssLocationScreen " component ={IssLocation  }/>
        <Stack.Navigator name ="Meteors " component ={MeteorsScreen }/>
      </Staxck.Navigator>
    </NavigationContainer>
  )
}

export default App ; 
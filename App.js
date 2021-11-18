import { response } from "express";
import React, {useState} from "react";
import { StyleSheet, Text, View, SafeAreaView, Pressable } from "react-native";
import Return from "./components/profileReturns/index";



export default function App() {
const [data, setData] = useState();

const requestData = async () => {
 
 
  

}

console.log(data)
  return (
    <SafeAreaView>
      <Return></Return>
      <Pressable style={{ padding: 30, backgroundColor: "#151515", borderRadius: 100,}} onPress={()=> {requestData()}}>
        <Text style={{color: "white",fontSize: 28, width: 100, textAlign: "center"}}>Request</Text>
      </Pressable>
    </SafeAreaView>
  
  );
}



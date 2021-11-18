import React, {useState} from "react";
import { StyleSheet, Text, View, SafeAreaView, Pressable } from "react-native";
import Return from "./components/profileReturns/index";



export default function App() {
const [data, setData] = useState();
const [loading, setLoading] = useState(true);
const requestData = async () => {
  try {
    console.log("PRESS")
    const response = await fetch('https://api.propublica.org/congress/v1/117/senate/members.json', {
      method: 'GET',
      headers: {
        "X-Api-Key": "boSbGSKgKnoMtdwEjxT0a8Bymy6LaOIaJGWAX0dY "
      }
    })
    const json = await response.json();
    setData(json)
  } catch(error) {
    console.log("Nothing In Return")
  } finally {
    setLoading(false);
  }
 
  

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



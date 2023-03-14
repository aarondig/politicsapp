import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect, useReducer, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Pressable,
  TextInput,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
  LayoutAnimation,
  ActivityIndicator,
} from "react-native";
import { TabBarItem } from "react-native-tab-view";
import FeatherIcon from "react-native-vector-icons/Feather";
import Loading from "../../../loading/index.js";

import styles from "./styles.js";

const Home = ({ route, navigation }) => {
  const { i, index, d, bio, loading } = route.params;
  const [isOpen, setIsOpen] = useState(false);

  // const Issues = () => {
  //   Object.keys(d.bills.issues).map((item, key) => {

  //     return <View style={styles.issue} key={key}>
  //       <View style={styles.iHeaderC}>
  //       <Text style={styles.iHeaderST}>{d.bills.issues[key]}</Text>
  //       <Text style={styles.iHeaderT}>{d.bills.issues[key]}</Text>
  //       </View>
  //     </View>
  //   })
  // }

  return (
    <View style={styles.wrapper}>
      {loading ? (
        <Loading />
      ) : (
        <View style={styles.innerWrapper}>
          {/* <Pressable style={styles.section} onPress={() => {
              navigation.navigate("Bio", {
                i: i,
                index: index,
                bio: bio,
                d: d,
              });
            }}>
            <View style={styles.column}>
            <Text style={styles.title}>Read Bio</Text>
            <Text style={styles.subtitle}>{bio.slice(0,24) + "..."}</Text>
            </View>
            <FeatherIcon
      // style={styles.rightnavicon}
      name="arrow-right"
      size={24}
      color="#111315"
    />
          </Pressable> */}
          <View style={styles.section}>
            <View style={styles.column}>
              {/* <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={{
                  // 450x550
                  uri: `https://theunitedstates.io/images/congress/225x275/${i.id}.jpg`,
                }}
              />
            </View> */}
              <Text style={styles.subtitle}>About</Text>
              {/* <Text style={styles.subtitle}>This Term</Text> */}

              <Text style={styles.text}>{bio}</Text>
            </View>
          </View>
          <View style={styles.section}>
            <View style={styles.column}>
              <Text style={styles.title}>Next Election</Text>
              <Text style={styles.subtitle}>
                In Office Since {d.about.served_since}
              </Text>
            </View>
            <Text style={styles.title}>{i.next_election}</Text>
          </View>
          {/* <View style={styles.about}>
            <Text style={styles.header}>About</Text>
            <Text style={styles.p}>{bio}</Text>
          </View> */}
          {/* <View style={styles.section}>
            <View style={styles.column}>
              {d.bills.issues.map((el, i)=>{

              })}
            </View>  
            </View> */}
          {/* <View style={styles.issues}>
            <TouchableOpacity style={styles.acc} onPress={() => {}}>
              <Text style={styles.header}>Sponsored Issues</Text>
     
              <Text style={styles.accTitle}>Personal</Text>
            </TouchableOpacity>
          </View> */}
        </View>
      )}
    </View>
  );
};
export default Home;

{
  /* <View style={styles.}> */
}
{
  /* <Pressable style={styles.follow} onPress={() => {}}>
            <Text style={styles.followText}>do something</Text>
          </Pressable> */
}
{
  /* </View> */
}

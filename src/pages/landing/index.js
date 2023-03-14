import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, Pressable } from "react-native";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";
import styles from "./styles.js";
import mgcenter from "../../../assets/svgs/mgcenter.svg";
import { animated, useSprings } from "react-spring";

const SvgComponent = (props) => (
  <Svg
    width={280}
    height={400}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M20 139.75C20 73.614 73.614 20 139.75 20S259.5 73.614 259.5 139.75 205.886 259.5 139.75 259.5 20 205.886 20 139.75Z"
      stroke="url(#a)"
      strokeWidth={39.917}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M20 259.5c0-66.136 53.614-119.75 119.75-119.75S259.5 193.364 259.5 259.5s-53.614 119.75-119.75 119.75S20 325.636 20 259.5Z"
      stroke="url(#b)"
      strokeWidth={39.917}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={139.75}
        y1={0.042}
        x2={139.75}
        y2={279.458}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopOpacity={0} />
        <Stop offset={1} stopColor="#fff" />
        <Stop offset={1} stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={139.75}
        y1={129.771}
        x2={139.75}
        y2={399.208}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopOpacity={0} />
      </LinearGradient>
    </Defs>
  </Svg>
);

const Landing = ({navigation}) => {
  const [start, toggleStart] = useState(false);

  useEffect(() => {
    toggleStart(true);
  }, []);



  // const AnimatedSvg = animated(SvgComponent);
  const AnimatedView = animated(View);

  let springs = [0, 1, 2];
  const startsprings = useSprings(
    springs.length,
    springs.map((el, i) =>
      start
        ? {
            from: {
              // postition: "absolute",
              opacity: 0,
              transform: "scale: 0",
            },
            to: {
              opacity: 1,
              transform: "scale: 1",
            },

            delay: (i + 2) * 100 + 600,
            config: {
              duration: 1250,
            },
          }
        : {
            from: {
              opacity: 1,
              transform: "scale: 1",
            },
            to: {
              opacity: 0,
              transform: "scale: 0",
            },

            delay: 800 / (i + 2) + 200,
            config: {
              duration: 1250,
            },
            // onResolve: () => setStartpage(true),
          }
    )
  );

  return (
    <SafeAreaView style={styles.landing}>
      <View style={styles.graphic}>
        <AnimatedView style={{flex: 1, display: "flex", flexDirection: "row", justifyContent: "center",  ...startsprings[0]}}>
        <SvgComponent style={styles.svg}/>
      </AnimatedView>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Middleground</Text>
        <Text style={styles.subtitle}>
          Mending the barrier between government action and constituents.
        </Text>
      </View>
      {/* <AnimatedView style={{...startsprings[1]}}> */}
      <Pressable
        style={styles.mainbutton}
        onPress={() => {
          navigation.navigate("Search", {});
        }}
      >
        <Text style={styles.buttontext}>Get Started</Text>
      </Pressable>
      {/* </AnimatedView> */}
    </SafeAreaView>
  );
};
export default Landing;

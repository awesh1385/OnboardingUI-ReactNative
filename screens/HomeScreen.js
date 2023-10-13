import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import Lottie from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
import { removeItem } from "../utils/asyncStorage";
const { height, width } = Dimensions.get("window");
export default function HomeScreen() {
  const navigation = useNavigation();
  const handleReset=()=>{
   removeItem('onboarded' );
   navigation.navigate('Onboarding');

  }
  return (
    <SafeAreaView style={style.container}>
      <View style={style.lottie}>
        <Lottie
          source={require("../assets/animations/celibration.json")}
          autoPlay
          loop
        />
      </View>
      <Text style={style.text}>Home Page</Text>
      <TouchableOpacity onPress={handleReset} style={style.reset}>
        <Text>Reset</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
  },
  lottie: {
    height: width,
    width: width * 0.9,
  },
  text: {
    fontSize: width * 0.09,
    marginBottom: 20,
  },
  reset:{
    backgroundColor:'#34d399',
    padding:10,
    borderRadius:10,
  }
});

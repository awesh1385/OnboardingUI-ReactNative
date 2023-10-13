import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import Lottie from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
import { setItem } from "../utils/asyncStorage";

const { height, width } = Dimensions.get("window");
export default function OnboardingScreen() {
  const navigation = useNavigation();
  const handleDone = () => {
    navigation.navigate("Home");
    setItem('onboarded','1');
  };
  const doneButton = ({ ...props }) => {
    return (
      <TouchableOpacity style={style.doneButton} {...props}>
        <Text>Done</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={style.container}>
      <Onboarding
        onDone={handleDone}
        onSkip={handleDone}
        bottomBarHighlight={false}
        DoneButtonComponent={doneButton}
        containerStyles={{ paddingHorizontal: 15 }}
        pages={[
          {
            backgroundColor: "#a78bfa",
            image: (
              <View style={style.lottie}>
                <Lottie
                  source={require("../assets/animations/boost.json")}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: "Boost Productivity",
            subtitle: "Be consistent in what you are doing",
          },
          {
            backgroundColor: "#fef3c7",
            image: (
              <View style={style.lottie}>
                <Lottie
                  source={require("../assets/animations/work.json")}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: "Work Seamlessly",
            subtitle: "Get your work done seamlessly without interruuption",
          },
          {
            backgroundColor: "#a7f3d0",
            image: (
              <View style={style.lottie}>
                <Lottie
                  source={require("../assets/animations/achieve.json")}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: "Achieve Higher Goals",
            subtitle:
              "By boosting your productivity we help you to achieve higher goals",
          },
        ]}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  lottie: {
    height: width,
    width: width * 0.9,
  },
  doneButton: {
    padding: 20,
   
    
  },
});

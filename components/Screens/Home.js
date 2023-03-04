import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomBar from "../BottomBar";

const Home = () => {
  return (
    <>
      <SafeAreaView>
        <View>
          <Text>Home</Text>
        </View>
      </SafeAreaView>
      <BottomBar />
    </>
  );
};

export default Home;

const styles = StyleSheet.create({});

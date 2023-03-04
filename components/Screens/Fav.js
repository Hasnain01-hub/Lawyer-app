import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BottomBar from "../BottomBar";
import { SafeAreaView } from "react-native-safe-area-context";

const Fav = () => {
  return (
    <>
      <SafeAreaView>
        <View>
          <Text>Favourites</Text>
        </View>
      </SafeAreaView>
      <BottomBar />
    </>
  );
};

export default Fav;

const styles = StyleSheet.create({});

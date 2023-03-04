import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Heart, Cube, House, MapPin, ArchiveBox } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";

const BottomBar = () => {
  const navigator = useNavigation();

  return (
    <View style={styles.Nav}>
      <View style={styles.NavBar}>
        <TouchableOpacity
          onPress={() => {
            navigator.navigate("Home");
          }}
        >
          <Text>
            <House color="#fff" weight="fill" size={26} />
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text>
            <Cube color="#fff" weight="fill" size={26} />
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            position: "relative",
            bottom: "10%",
            backgroundColor: "#de64d1",
            padding: 15,
            borderRadius: 50,
          }}
          onPress={() => {
            navigator.navigate("Map");
          }}
        >
          <MapPin color="#fff" weight="fill" size={26} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigator.navigate("Fav");
          }}
        >
          <Heart color="#fff" weight="fill" size={26} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Text>
            <ArchiveBox color="#fff" weight="fill" size={26} />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomBar;

const styles = StyleSheet.create({
  Nav: {
    position: "absolute",
    alignItems: "center",
    bottom: 0,
    zIndex: 1,
    width: "100%",
    padding: 10,
  },
  NavBar: {
    flexDirection: "row",
    backgroundColor: "#000000",
    width: "100%",
    justifyContent: "space-around",
    borderRadius: 10,
    alignItems: "center",
    padding: 5,
  },
});

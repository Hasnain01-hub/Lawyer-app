import {
  StyleSheet,
  View,
  Image,
  Platform,
  PermissionsAndroid,
} from "react-native";
import React, { useEffect, useState } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import BottomBar from "./BottomBar";
import mapStyle from "./MapStyle";
import { DotIndicator } from "react-native-indicators";
// import { PERMISSIONS, check, request } from "react-native-permissions";
import Geolocation from "react-native-geolocation-service";

const Map = () => {
  const [loading, setLoading] = useState(true);
  // const requestLocationPermission = async () => {
  //   try {
  //     if (Platform.OS === "ios") {
  //       const result = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
  //       if (result === RESULTS.GRANTED) {
  //         setCameraGranted(true);
  //         return true;
  //       } else if (result === RESULTS.DENIED) {
  //         setLoading(false);
  //         return false;
  //       }
  //       return false;
  //     } else {
  //       const granted = await PermissionsAndroid.request(
  //         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  //         {
  //           title: "Geolocation Permission",
  //           message: "Can we access your location?",
  //           buttonNeutral: "Ask Me Later",
  //           buttonNegative: "Cancel",
  //           buttonPositive: "OK",
  //         }
  //       );

  //       console.log("granted", granted);
  //       if (granted === "granted") {
  //         console.log("You can use Geolocation");
  //         return true;
  //       } else {
  //         console.log("You cannot use Geolocation");
  //         return false;
  //       }
  //     }
  //   } catch (err) {
  //     return false;
  //   }
  // };
  const [location, setLocation] = useState({
    latitude: 0,
    longitude: 0,
  });

  useEffect(() => {
    Geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        setLoading(false);
      },
      (error) => {
        console.log(error.code, error.message);
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
      }
    );

    // Watch the location
    const watchId = Geolocation.watchPosition(
      (position) => {
        console.log(position);
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        console.log(error.code, error.message);
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
        distanceFilter: 10,
      }
    );

    // Clear the watch
    return () => {
      Geolocation.clearWatch(watchId);
    };
    // setTimeout(() => {

    // }, 2000);
  }, [watchId]);

  const data = [
    {
      image:
        "https://sdk.bitmoji.com/render/panel/49490f4e-eabb-4cab-bcb6-69f361d66706-b04e0b03-724c-49a0-aed6-acaaa095e117-v1.png?transparent=1&palette=1",
      id: "1",
      latitude: "22.0760",
      longitude: "74.877426",
      name: "sujan",
    },
    {
      image:
        "https://sdk.bitmoji.com/render/panel/49490f4e-eabb-4cab-bcb6-69f361d66706-349ae33a-71ac-4e93-aa23-6fea888cbce8-v1.png?transparent=1&palette=1",
      id: "2",
      latitude: "14.1155",
      longitude: "79.6070",
      name: "suhas",
    },
    {
      image:
        "https://sdk.bitmoji.com/render/panel/49490f4e-eabb-4cab-bcb6-69f361d66706-36c5b152-0741-4b18-9b2d-2172a549e359-v1.png?transparent=1&palette=1",
      id: "3",
      latitude: "16.0977",
      longitude: "74.5839",
      name: "ashish",
    },
    {
      image:
        "https://sdk.bitmoji.com/render/panel/5ec9454b-e321-4007-a4fb-e1b511ef9e1d-38316d96-fa28-4778-a8a6-ba912e79183c-v1.png?transparent=1&palette=1",
      id: "4",
      latitude: "11.0490",
      longitude: "78.5936",
      name: "abhi",
    },

    {
      image:
        "https://sdk.bitmoji.com/render/panel/be347acc-bb01-4f7a-9dd4-2b72d1a9d8c7-a854125f-f81a-4b79-a80c-30d522cbb799-v1.png?transparent=1&palette=1",
      id: "8",
      latitude: "19.1042",
      longitude: "74.5713",
      name: "Keerthi",
    },
    {
      image:
        "https://sdk.bitmoji.com/render/panel/be347acc-bb01-4f7a-9dd4-2b72d1a9d8c7-37498be4-7dec-4bcd-8c46-f04e0229ef0a-v1.png?transparent=1&palette=1",
      id: "9",
      latitude: "12.0811",
      longitude: "79.5562",
      name: "Deepthi",
    },
    {
      image:
        "https://sdk.bitmoji.com/render/panel/be347acc-bb01-4f7a-9dd4-2b72d1a9d8c7-c4234bcc-b963-4277-9878-39f5088de39e-v1.png?transparent=1&palette=1",
      id: "10",
      latitude: "19.1222",
      longitude: "78.6306",
      name: "Priya",
    },
    {
      image:
        "https://sdk.bitmoji.com/render/panel/49490f4e-eabb-4cab-bcb6-69f361d66706-00b2b490-1f1a-4e1e-bfc7-764d868e876d-v1.png?transparent=1&palette=1",
      id: "11",
      latitude: "12.9716",
      longitude: "77.5946",
      name: "Shreya",
    },
  ];
  return (
    <>
      <View
        style={{
          marginTop: 30,
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        {loading === true ? (
          <>
            <DotIndicator color="black" />
          </>
        ) : (
          <>
            <MapView
              showsUserLocation={true}
              showsCompass={false}
              showsPointsOfInterest={false}
              zoomEnabled={true}
              customMapStyle={mapStyle}
              provider={PROVIDER_GOOGLE}
              style={{ width: "100%", height: "100%" }}
              initialRegion={{
                latitude: location.latitude,
                longitude: location.longitude,
                latitudeDelta: 1.0922,
                longitudeDelta: 1.0421,
              }}
            >
              {/* {data.map((emoji, i) => (
          <Marker
            key={i}
            coordinate={{
              latitude: emoji.latitude,
              longitude: emoji.longitude,
            }}
            title="Snap Map"
            description={emoji.name}
            identifer="origin"
          >
            <Image source={{ uri: emoji.image }} />
          </Marker>
        ))} */}
              {data.map((emoji, i) => (
                <Marker
                  key={i}
                  title={emoji.name}
                  description={"city"}
                  coordinate={{
                    latitude: parseFloat(emoji.latitude),
                    longitude: parseFloat(emoji.longitude),
                  }}
                >
                  <Image
                    source={{ uri: emoji.image }}
                    style={{ width: 50, height: 50 }}
                    resizeMode="contain"
                  />
                </Marker>
              ))}
            </MapView>
          </>
        )}
      </View>
      <BottomBar />
    </>
  );
};

export default Map;

const styles = StyleSheet.create({});

import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import Text from "../components/Text/Text";
import PlanetHeader from "../components/PlanetHeader";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";

export default function Details({ route }) {
  const planet = route.params.planet;

  const renderImage = (name) => {
    switch (name) {
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader backBtn={true} />
      <ScrollView>
        <View style={styles.imageView}>
          <Text>{planet.name}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  imageView: {
    padding: spacing[5],
    alignItems: "center",
    justifyContent: "center",
  },
});

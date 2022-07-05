import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Linking,
} from "react-native";
import React from "react";
import Text from "../components/Text/Text";
import PlanetHeader from "../components/PlanetHeader";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";
import {
  EarthSvg,
  JupiterSvg,
  MarsSvg,
  MercurySvg,
  NeptuneSvg,
  SaturnSvg,
  UranusSvg,
  VenusSvg,
} from "../svg";

const PlanetSection = ({ title, value }) => {
  return (
    <View style={styles.PlanetSection}>
      <Text preset="small" style={{ textTransform: "uppercase" }}>
        {title}
      </Text>
      <Text preset="h2">{value}</Text>
    </View>
  );
};

export default function Details({ route }) {
  const planet = route.params.planet;
  const {
    name,
    description,
    rotationTime,
    revolutionTime,
    radius,
    avgTemp,
    wikiLink,
  } = planet;

  const renderImage = () => {
    switch (name) {
      case "mercury":
        return <MercurySvg />;
      case "earth":
        return <EarthSvg />;
      case "jupiter":
        return <JupiterSvg />;
      case "mars":
        return <MarsSvg />;
      case "neptune":
        return <NeptuneSvg />;
      case "saturn":
        return <SaturnSvg />;
      case "uranus":
        return <UranusSvg />;
      case "venus":
        return <VenusSvg />;
    }
  };

  const onPressLink = () => {
    Linking.openURL(wikiLink);
  };

  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader backBtn={true} />
      <ScrollView>
        <View style={styles.imageView}>{renderImage()}</View>
        <View style={styles.detailsView}>
          <Text preset="h1" style={styles.name}>
            {name}
          </Text>
          <Text style={styles.description}>{description}</Text>
          <Pressable onPress={onPressLink} style={styles.source}>
            <Text>Source : </Text>
            <Text preset="h4" style={styles.wiki}>
              Wikipedia
            </Text>
          </Pressable>
        </View>
        <View style={{ paddingBottom: spacing[6], paddingTop: spacing[2] }}>
          <PlanetSection title="ROTATION TIME" value={rotationTime} />
          <PlanetSection title="REVOLUTION TIME" value={revolutionTime} />
          <PlanetSection title="RADIUS" value={radius} />
          <PlanetSection title="AVERAGE TEMP" value={avgTemp} />
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
    marginVertical: spacing[8],
    alignItems: "center",
    justifyContent: "center",
  },
  detailsView: {
    marginHorizontal: spacing[6],
    alignItems: "center",
  },
  name: {
    textTransform: "uppercase",
    textAlign: "center",
    marginBottom: spacing[5],
  },
  description: {
    textAlign: "center",
    lineHeight: 21,
  },
  source: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: spacing[5],
  },
  wiki: {
    textDecorationLine: "underline",
  },
  PlanetSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: spacing[5],
    paddingVertical: spacing[4],
    borderWidth: 1,
    borderColor: colors.grey,
    marginHorizontal: spacing[6],
    marginBottom: spacing[4],
  },
});

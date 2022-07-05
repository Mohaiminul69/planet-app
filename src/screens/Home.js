import {
  View,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Pressable,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import Text from "../components/Text/Text";
import PlanetHeader from "../components/PlanetHeader";
import { colors } from "../theme/colors";
import { PLANET_LIST } from "../data/PlanetList";
import { spacing } from "../theme/spacing";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const PlanetItem = ({ item, index }) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => {
        navigation.navigate("Details", { planet: item });
      }}
      style={styles.item}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text preset="h4">{index + 1}</Text>
        <View style={[styles.circle, { backgroundColor: item.color }]} />
        <Text preset="h4" style={styles.itemName}>
          {item.name}
        </Text>
      </View>
      <AntDesign name="right" size={18} color="white" />
    </Pressable>
  );
};

export default function Home() {
  const [list, setList] = useState(PLANET_LIST);
  const renderItem = ({ item, index }) => {
    return <PlanetItem item={item} index={index} />;
  };

  const searchFilter = (text) => {
    const filteredList = PLANET_LIST.filter((planet) => {
      const planetName = planet.name.toLowerCase();
      const userTypedText = text.toLowerCase();
      return planetName.includes(userTypedText);
    });
    setList(filteredList);
  };

  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader />
      <TextInput
        placeholder="Type the planet name..."
        placeholderTextColor={colors.white}
        autoCorrect={false}
        style={styles.searchInput}
        onChangeText={(text) => searchFilter(text)}
      />
      <FlatList
        contentContainerStyle={styles.list}
        keyExtractor={(item) => item.name}
        data={list}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: spacing[4],
  },
  itemName: { textTransform: "uppercase" },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginHorizontal: spacing[4],
  },
  list: {
    padding: spacing[4],
  },
  separator: {
    borderWidth: 0.5,
    borderBottomColor: colors.white,
  },
  searchInput: {
    padding: spacing[4],
    color: colors.white,
    borderBottomColor: colors.white,
    borderBottomWidth: 1,
    margin: spacing[5],
  },
});

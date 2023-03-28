import React from "react";
import { TouchableOpacity, Text, Image, View } from "react-native";
import styles from "./style";

export default function index(props) {
  const {
    title,
    platform,
    category,
    thumbnail,
    registre,
    release_date,
    short_description,
    ...rest
  } = props;
  return (
    <View
      style={[{ backgroundColor: "#0091C3" }, styles.container]}
      activeOpacity={0.7}
    >
      <View style={styles.cardLeft}>
        <Image
          source={thumbnail}
          style={{ height: "100%", width: "100%", borderRadius: 10 }}
        />
      </View>
      <View style={styles.cardRight}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.descText}>{short_description}</Text>

        <View
          style={{
            height: 50,
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          {platform === "PC (Windows)" ? (
            <Image
              source={require("../../../assets/pc.png")}
              style={{ height: 20, width: 20 }}
            />
          ) : platform === "Web Browser" ? (
            <Image
              source={require("../../../assets/browser.png")}
              style={{ height: 20, width: 20 }}
            />
          ) : (
            <>
              <Image
                source={require("../../../assets/pc.png")}
                style={{ height: 20, width: 20 }}
              />
              <Image
                source={require("../../../assets/browser.png")}
                style={{ height: 20, width: 20 }}
              />
            </>
          )}
          <Text style={styles.footerText}>{category}</Text>
          <Text style={styles.footerText}>{release_date}</Text>
        </View>
      </View>
    </View>
  );
}

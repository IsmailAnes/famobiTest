import React, { useState, useEffect } from "react";
import {
  Text,
  Image,
  View,
  Dimensions,
  Platform,
  TouchableOpacity,
} from "react-native";
import { Modalize } from "react-native-modalize";
import { useDispatch, useSelector } from "react-redux";
import styles from "./style";

const platform = [
  {
    platform: "pc",
  },
  {
    platform: "browser",
  },
  {
    platform: "all",
  },
];

const genre = [
  {
    genre: "shooter",
  },
  {
    genre: "strategy",
  },
  {
    genre: "action",
  },
  {
    genre: "racing",
  },
  {
    genre: "sports",
  },
  {
    genre: "mmo",
  },
  {
    genre: "survival",
  },
];
export function Filter(props) {
  const { onOpen, modalizeRef, onClose, ...rest } = props;
  const height = Dimensions.get("screen").height;
  const dispatch = useDispatch();
  const [selectedFilter, setselectedFilter] = useState("all");
  const [selectedGenre, setselectedGenre] = useState(null);
  const onCancel = () => {
    setselectedFilter("all");
    setselectedGenre(null);
    onClose("all");
  };
  const applyFilter = () => {
    onClose(selectedFilter, selectedGenre);

  };
  return (
    <Modalize
      withHandle={true}
      ref={modalizeRef}
      handlePosition="inside"
      handleStyle={styles.handle}
      modalStyle={styles.modal}
      adjustToContentHeight
      scrollViewProps={{
        showsVerticalScrollIndicator: false,
        showsHorizontalScrollIndicator: false,
        keyboardShouldPersistTaps: "handled",
      }}
      FooterComponent={() => (
        <View
          style={{
            marginTop: 20,
            marginBottom: 30,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <TouchableOpacity
            style={{
              width: "40%",
              height: 50,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "white",
              borderRadius: 10,
            }}
            onPress={() => onCancel()}
          >
            <Text style={{ color: "#323232" }}>Reset</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: "40%",
              height: 50,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#0091C3",
              borderRadius: 10,
            }}
            onPress={() => applyFilter()}
          >
            <Text style={{ color: "#323232" }}>Apply</Text>
          </TouchableOpacity>
        </View>
      )}
      HeaderComponent={() => (
        <View style={styles.modalHeader}>
          <Text style={styles.modalHeaderTitleModal}>Shorten your list</Text>
        </View>
      )}
    >
      <View style={styles.modalContainer}>
        <Text style={styles.modalSectionTitle}>Platform</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            width: "100%",
          }}
        >
          {platform?.map((item, index) => (
            <TouchableOpacity
              style={
                item?.platform === selectedFilter
                  ? styles.platformContainer
                  : styles.platformContainerUnselected
              }
              onPress={() => setselectedFilter(item.platform)}
            >
              <Text style={styles?.modalHeaderTitle}>{item?.platform}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.modalSectionTitle}>Genre</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
            width: "100%",
          }}
        >
          {genre?.map((item, index) => (
            <TouchableOpacity
              style={
                item?.genre === selectedGenre
                  ? styles.genreContainerSelected
                  : styles.genreContainer
              }
              onPress={() => setselectedGenre(item.genre)}
            >
              <Text style={styles?.modalHeaderTitle}>{item?.genre}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </Modalize>
  );
}

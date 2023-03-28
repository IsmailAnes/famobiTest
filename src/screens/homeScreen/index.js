import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  RefreshControl,
} from "react-native";
import { PacmanIndicator } from "react-native-indicators";
import { useEffect, useState, useRef } from "react";
import GameCard from "../../components/gameCard";
import Header from "../../components/header";
import styles from "./style";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListGames } from "../../store/actions/post";
import { Filter } from "./filter";

export default function HomeScreen({ navigation }) {
  const dispatch = useDispatch();
  const modalizeRef = useRef();
  const [refreshing, setRefreshing] = useState(false);
  const { games } = useSelector((state) => state.postReducer);
  const { updating } = useSelector((state) => state.postReducer);
  useEffect(() => {
    dispatch(getListGames("all", 'racing'));
  }, []);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  const onClose = (platform, genre) => {
    dispatch(getListGames(platform, genre));
    modalizeRef.current?.close();
  };

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(getListGames("all")).then(() => {
      setRefreshing(false);
    });
  };

  return (
    <View style={styles.container}>
      <Header>
        <Text style={styles.headerText}>Free Games</Text>
        <View style={styles.headerFilters}>
          <TouchableOpacity onPress={() => onOpen()}>
            <Image
              source={require("../../../assets/filter.png")}
              style={styles.headerIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => null}>
            <Image
              source={require("../../../assets/sort.png")}
              style={styles.headerIcon}
            />
          </TouchableOpacity>
        </View>
      </Header>
      {updating ? (
        <PacmanIndicator color="#EF8119" size={80} />
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={games}
          renderItem={({ item }) => (
            <GameCard
              thumbnail={{ uri: item?.thumbnail }}
              title={item?.title}
              platform={item?.platform}
              category={item?.genre}
              release_date={item?.release_date}
              short_description={item?.short_description}
            />
          )}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          keyExtractor={(item, index) => index.toString()}
        />
      )}

      <Filter
        modalizeRef={modalizeRef}
        onOpen={() => onOpen()}
        onClose={(value) => onClose(value)}
      />
    </View>
  );
}

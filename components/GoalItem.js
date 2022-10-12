import { StyleSheet, Text, View, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    fontSize: 32,
    fontWeight: "bold",
    margin: 8,
    borderRadius: 6,
    backgroundColor: "orange",
  },
  goalText: {
    color: "Blue",
  },
});

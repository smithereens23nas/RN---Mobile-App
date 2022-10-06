import { StyleSheet, Text, View } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{props.text}</Text>
    </View>
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

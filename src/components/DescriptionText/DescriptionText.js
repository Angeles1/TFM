import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";

const onPressTitle = () => {
  console.log("title pressed");
};

const DescriptionText = (props) => {
  const bodyText = props.text;

  return (
    <Text style={styles.baseText}>
      <Text numberOfLines={5}>{bodyText}</Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  baseText: {
    margin:22,
    marginTop: 5,
},
});

export default DescriptionText;
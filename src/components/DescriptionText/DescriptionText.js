import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";

const onPressTitle = () => {
  console.log("title pressed");
};

const DescriptionText = (props) => {
  const bodyText = props.text;

  return (
      <Text style={styles.baseText} numberOfLines={5}>{bodyText}</Text>
  );
};

const styles = StyleSheet.create({
  baseText: {
    margin:20,
    marginTop: 5,
},
});

export default DescriptionText;
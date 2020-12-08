import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";


const PINK = 'rgba(213,0,249 ,1)';
const SWEETPINK = 'rgba(234,128,252 ,1)';

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
    color: PINK,
    fontWeight: 'bold',
},
});

export default DescriptionText;
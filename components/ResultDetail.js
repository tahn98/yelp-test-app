import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const ResultDetail = ({ result }) => {
  return <View style = {styles.container}>
    <Image style={styles.image} source={{ uri: result.image_url }} />
    <Text style={styles.name}>{result.name}</Text>
    <Text>
      {result.rating} Stars, {result.review_count} Reviews 
    </Text>
  </View>
}

const styles = StyleSheet.create({
  container : {
    marginLeft : 10,
  },
  image: {
    marginBottom : 4,
    width: 250,
    height: 180,
    borderRadius: 5,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  }
})

export default ResultDetail
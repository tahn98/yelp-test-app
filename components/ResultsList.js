import React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native'
import {withNavigation} from 'react-navigation';
import ResultDetail from '../components/ResultDetail'

const ResultsList = ({ results, title, navigation }) => {
  return <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <FlatList
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      data={results}
      keyExtractor={result => result.id}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity onPress = {() => navigation.navigate('ResultsShow', {id : item.id})}>
            <ResultDetail result={item} />
          </TouchableOpacity>
        )
      }}>

    </FlatList>
  </View>
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10
  },
  title: {
    marginLeft: 10,
    marginBottom: 8,
    fontSize: 18,
    fontWeight: 'bold',
  }
});

export default withNavigation(ResultsList);
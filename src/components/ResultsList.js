import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'
import ResultsDetail from './ResultsDetail'

const ResultsList = ({ title, results, navigation }) => {
    return <View>
        <Text style={styles.titleStyle}>{title}</Text>
        <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            data={results}
            keyExtractor={(result) => result.id}
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity>
                        <ResultsDetail 
                            result={item} 
                            onPress={() => navigation=navigation('ResultsShow', { id: item.id })} 
                        />
                    </TouchableOpacity>
                );
            }}
        />
        <Text>Results: {results.length}</Text>
    </View>
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    container: {
        marginBottom: 15
    }
});

export default withNavigation(ResultsList);
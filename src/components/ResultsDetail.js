import React from 'react'
import { View, Text, StyleSheets, FlatList } from 'react-native'

const ResultsDetail = ({ result }) => {
    return <View>
        <Text>Results: {results.name}</Text>
    </View>
}

const styles = StyleSheet.create({
    
});

export default ResultsDetail;

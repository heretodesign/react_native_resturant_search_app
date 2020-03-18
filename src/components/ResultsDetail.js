import React from 'react'
import { View, Image, Text, StyleSheets } from 'react-native'

const ResultsDetail = ({ result }) => {
        return (
        <View style={styles.container}>
            <Image 
                style={styles.image} 
                source={{ uri: result.image_url }} 
            />
            <Text style={styles.name}>Results: {results.name}</Text>
            <Text>{result.rating} Stars, {results.review_count}</Text>
        </View>
        )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 15
    },
    image: {
        width: 250,
        borderRadius: 4,
        height: 120,
        marginBottom: 5
    },
    name: {
        fontWeight: 'bold',
        // fontSize: 16
    }
});

export default ResultsDetail;

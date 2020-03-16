import React from 'react';
import { View, Text, styleSheets } from 'react-native'
import SearchBar from '../components/SearchBar'

const SearchScreen = () => {
    return (
        <View>
            <SearchBar />
            <Text> Search Screen</Text>
        </View>
    );
}

const styles = styleSheets.create({});

export default SearchScreen;

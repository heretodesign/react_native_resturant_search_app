import React from 'react';
import { View, TextInput, styleSheets } from 'react-native'
import { Feature } from '@expo/vector-icons'

const SearchBar = () => {
    return (
        <View style={styles.backgroundStyle}>
            <Feature name="search" 
                style={styles.iconStyle}
            />
            <TextInput 
                placeholder="Search" 
                style={styles.inputStyle}
            />
        </View>
    );
}

const styles = styleSheets.create({
    backgroundStyle: {
        backgroundColor: 'F0EEEE',
        height: 50,
        marginTop: 10,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row'
    },
    inputStyle: {
        // borderColor: 'black',
        // borderWidth: 1,
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
});

export default SearchBar;

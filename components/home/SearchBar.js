import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import {StyleSheet} from 'react-native';

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = React.useState('');   
    const onChangeSearch = query => setSearchQuery(query);  
    return (
    <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style = {styles.searchBar}
    />
    );
};

export default SearchBar;

const styles = StyleSheet.create({

    searchBar: {
        display: 'flex',
        borderRadius: 20,
    },
})
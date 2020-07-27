import React, { Component } from 'react';
import { StyleSheet, FlatList, Text, View, ActivityIndicator} from 'react-native';
export default class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            page: 1,
            isLoading: false
        }
    }

    componentDidMount() {
        this.setState({ isLoading: true }, this.getData);
    }

    getData = () => {
        const url = "https://randomuser.me/api/?seed=1&results=10&page=" + this.state.page
        fetch(url).then((res) => res.json())
            .then((response) => {
                this.setState({
                    data: this.state.data.concat(response.results)
                })
            })
    }

    renderRow = ({ item }) => {
        return (
            <View style={styles.item}>
                <Text style={styles.itemText}>Name: {`${item.name.first} ${item.name.last}`}</Text>
                <Text style={styles.itemText}>Email: {item.email}</Text>
                <Text style={styles.itemText}>Age: {item.dob.age}</Text>
                <Text style={styles.itemText}>DOB: {item.dob.date}</Text>
                <Text style={styles.itemText}>City: {item.location.city}, State: {item.location.state}, Country: {item.location.country}</Text>
            </View>
        )
    }

    handleLoadMore = () => {
        this.setState(
            { page: this.state.page + 1, isLoading: true },
            this.getData
        )
    }

    renderFooter = () => {
        if (!this.state.loading) return null;
            return (
            <View style={styles.loader}>
                <ActivityIndicator size="large" />
            </View>
        );
    };
    render() {
        return (
            <FlatList
                style={styles.container}
                data={this.state.data}
                renderItem={this.renderRow}
                keyExtractor={(item, index) => index.toString()}
                onEndReached={this.handleLoadMore}
                onEndReachedThreshold={50}
                ListFooterComponent={this.renderFooter}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        backgroundColor: '#F5FCFF'
    },
    loader: {
        paddingVertical: 20,
        borderTopWidth: 1,
        borderColor: "#00FF00"
    },
    item: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom: 10
    },
    itemText: {
        fontSize: 16,
        padding: 5
    }
})
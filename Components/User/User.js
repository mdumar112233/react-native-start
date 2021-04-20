import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function User({user}) {
    return (
        <View style={styles.container}>
            <Text>{user.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        borderWidth: 3,
        borderColor: 'green',
        margin: '5px',
        padding: '3px'
    }
})

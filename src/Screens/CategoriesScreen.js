import { Button, StyleSheet, Text, View } from 'react-native'

import React from 'react'

const CategoriesScreen = ({ navigation }) => { //se lo inyecta directamente a los hijos
    return (
        <View style={styles.screen}>
            <Text>CategoriesScreen</Text>
            <Button title="Ir a Products" onPress={() => { 
                navigation.navigate('Products') // products tiene que ser el mismo nombre de stacks
                }} />
        </View>
    )
}

export default CategoriesScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
import { FlatList } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import GridsItem from '../Components/GridsItem'

const CategoriesScreen = ({ navigation }) => { //se lo inyecta directamente a los hijos
    const onSelectGridItem = (item) => {
        navigation.navigate('Products', {
            categoryId: item.id,
            categoryName: item.title
            //parametros que le pasamos a la proxima pantalla
        })
    }
// asi los recibimos de la otra pantalla
    const renderGridItem = ({ item }) = (<GridItem item={item} onSelect={onSelectGridItem}/>)
    

    
    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={renderGridItem}
            numColumns={2}
        />
    )
}

export default CategoriesScreen

const styles = StyleSheet.create({
})
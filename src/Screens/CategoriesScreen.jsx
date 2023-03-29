import { useDispatch, useSelector } from 'react-redux'

import { FlatList } from 'react-native'
import GridItem from '../components/GridItem'
import React from 'react'
import { selectCategory } from '../store/actions/category.action'

const CategoriesScreen = ({ navigation }) => { //se lo inyecta directamente a los hijos

    const categories = useSelector(state=>state.categories.categories)
    const dispatch = useDispatch()

    
    const onHandleSelectedCategory = (item) => {
        dispatch(selectCategory(item.id))
    /*const onSelectGridItem = (item) => {
        navigation.navigate('Products', {
            categoryId: item.id,
            categoryName: item.title
            //parametros que le pasamos a la proxima pantalla
        })*/
    navigation.push("Breads",{name:item.title})
    }
// asi los recibimos de la otra pantalla
    const renderGridItem = ({item}) =>{
        return(
            <GridItem item={item} onSelected={onHandleSelectedCategory} />
        )
    }
    

    
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


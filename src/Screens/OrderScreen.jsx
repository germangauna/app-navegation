import { FlatList, StyleSheet, Text, View } from 'react-native'

import { ORDERS } from '../data/orders'
import OrderItem from '../components/OrderItem'
import React from 'react'

const OrdersScreen = () => {

    const onHandleDeleteOrder = ()=>console.log("Elimina órden")

    const renderOrdersItem = ({item}) =>(
        <OrderItem
            item={item}
            onDelete={onHandleDeleteOrder}
        />
    )

  return (
    <View style={styles.container}>
      <FlatList 
        data={ORDERS}
        renderItem={renderOrdersItem}
        keyExtractor={(item)=>item.id}
      />
    </View>
  )
}

export default OrdersScreen

const styles = StyleSheet.create({})
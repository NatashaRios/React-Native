//La pantalla que se ve al cargar la app, donde estan todos los productos
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import ProductItem from '../../components/shop/ProductItem';

const ProductsOverviewScreen = ({ navigation }) => {
  const products = useSelector(state => state.products.availableProducts);
  return(
    <FlatList 
      data={products} 
      keyExtractor={item => item.id} 
      renderItem={itemData =>
         <ProductItem 
            image={itemData.item.imageUrl}
            title={itemData.item.title}
            price={itemData.item.price}
            onViewDetail={() => {
              navigation.navigate('ProductDetail', { 
                productId:  itemData.item.id,
                productTitle: itemData.item.title
              });
            }}
            onAddCart={() => {}}
          />
      }/>
  )
};

ProductsOverviewScreen.navigationOptions = {
  headerTitle: 'All Products'
};


const styles = StyleSheet.create({

});

export default ProductsOverviewScreen;
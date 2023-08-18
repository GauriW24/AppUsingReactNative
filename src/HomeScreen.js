import { useLinkBuilder } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, Linking, Dimensions, Alert } from 'react-native';
// import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
import { Ionicons } from '@expo/vector-icons'; // Make sure to install expo/vector-icons if not already installed
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

const HomeScreen = () => {

  const [products, setProducts] = useState([]);
  useEffect(()=>{
    const products = [
      {id: 1, title: 'product 1', price: 2500, image: 'https://tjcuk.sirv.com/Products/70/2/7021498/Diamond-Wishbone-Ring-in-18K-Vermeil-Yellow-Gold-Over-Sterling-Silver_7021498_1.jpg?w=400&h=0&scale.option=fill&cw=100.0000%25&ch=100.0000%25',link:'www.google.com'},
      {id: 2, title: 'product 2', price: 2800, image: 'https://i.pinimg.com/originals/91/48/8b/91488b5fc64e24e0de49a0b6921e1eaa.jpg',link:'www.google.com'},
      {id: 3, title: 'product 3', price: 2960, image: 'https://i.etsystatic.com/26983247/c/1562/1241/273/447/il/378b1c/5092969200/il_340x270.5092969200_eloj.jpg',link:'www.google.com'},
      {id: 4, title: 'product 4', price: 7911, image: 'https://assets.ajio.com/medias/sys_master/root/20220721/o3kJ/62d96be6aeb26921af8c8ea4/shining_diva_rose_gold-toned_%26_white_vg9992b_rose_gold-studded_crystal-studded_link_bracelet.jpg',link:'www.google.com'},
      {id: 5, title: 'product 5', price: 5630, image: 'https://cdn.shopify.com/s/files/1/2436/4429/files/1_2b77e655-32fb-443e-bb33-9543ae1cc2ad_400x.jpg?v=1687498394',link:'www.google.com'},
      {id: 6, title: 'product 6', price: 7955, image: 'https://ae01.alicdn.com/kf/HTB1dn_ToMMPMeJjy1Xcq6xpppXas/LUOTEEMI-Fashion-Elegant-White-Gold-Color-AAA-Cubic-Zirconia-Stone-Necklace-for-Wedding-Women-Bride-Jewelry.jpg_q50.jpg',link:'www.google.com'},
      {id: 7, title: 'product 7', price: 9688, image: 'https://i.pinimg.com/474x/89/94/5c/89945c7e76a4b79beecfca2b42f81a41--diamond-flower-flower-necklace.jpg',link:'www.google.com'},
      {id: 8, title: 'product 8', price: 6500, image: 'https://i.pinimg.com/550x/70/65/9e/70659eecbd49fc4d5a4795a11122ab2e.jpg',link:'www.google.com'},
      {id: 9, title: 'product 9', price: 4800, image: 'https://kinclimg3.bluestone.com/f_jpg,c_scale,w_828,q_80,b_rgb:f0f0f0/giproduct/BIPO0778R20_YAA18DIG6XXXXXXXX_ABCD00-PICS-00001-1024-56076.png',link:'www.google.com'},
    ];
    const productJsonString = JSON.stringify(products);


    const parsedProductList = JSON.parse(productJsonString);

    setProducts(parsedProductList);
  },[]);

  const handleProductPress = (link)=>{
    Alert.alert('product pressed',`You pressed product. Link: ${link}`);
  };

  const handleSignOutPress = ()=>{
  };

  const handleCartPress = ()=>{
  };

  const renderProduct = ({ item }) => (
    <TouchableOpacity onPress={() => handleProductPress(item)} style={styles.productContainer}>
      <View style={styles.productImageContainer}>
        <Image source={{ uri: item.image }} style={styles.productImage} />
      </View>
      <Text style={styles.productName}>{item.title}</Text>
      <Text style={styles.productPrice}>₹{item.price}</Text>
      
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.iconContainer}> 
        <Text style={styles.title}>Welcome to Amazon Shopping</Text>
        <TouchableOpacity style={styles.icon} onPress={handleSignOutPress}>
          <Ionicons name='log-out-outline' size={24} color="black"/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon} onPress={handleCartPress}>
          <Ionicons name='cart-outline' size={24} color="black"/>
        </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.productList}
        numColumns={2}
      />
    </View>
  );
};
const windowWidth = Dimensions.get('window').width;
const itemWidth = (windowWidth-40)/2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 20,
    backgroundColor: '#F8F8F8',
  },
  header:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 20,
  },
  iconContainer: {
    flexDirection: 'row',
    marginLeft: 'auto',
  },
  icon: {
    marginLeft: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  productList: {
    paddingBottom: 20,
  },
  productContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    marginBottom: 20,
    padding: 15,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    flex: 0.5,
    marginHorizontal: 5,
  },
  productImageContainer: {
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 4,
    overflow: 'hidden',
  },
  productImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  productPrice: {
    fontSize: 14,
    color: '#888888',
    marginTop: 5,
  },
  addToCartButton: {
    backgroundColor: '#FF9900',
    borderRadius: 4,
    marginTop: 10,
    paddingVertical: 5,
    alignItems: 'center',
  },
  addToCartButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default HomeScreen;


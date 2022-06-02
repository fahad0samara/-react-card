import Item from './card/Item/Item';
import Cart from './card/Cart/Cart';
import { useEffect, useState } from "react";
import axios from 'axios';
import Drawer from '@material-ui/core/Drawer';
import {AiOutlineShoppingCart }from  'react-icons/ai';

import Grid from '@material-ui/core/Grid';
import Badge from '@material-ui/core/Badge'




export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

 

const frist = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);
const[data, Setdata] = useState([] as any);


  

useEffect(() => {
  axios.get('https://fakestoreapi.com/products').then(function (response) {
  
    Setdata(response.data);
  }).catch(function (error) {
    console.error(error);
  });


},[])
  const getTotalItems = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount, 0);

  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems(prev => {
      // 1. Is the item already added in the cart?
      const isItemInCart = prev.find(item => item.id === clickedItem.id);

      if (isItemInCart) {
        return prev.map(item =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
      // First time the item is added
      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems(prev =>
      prev.reduce((ack, item) => {
        if (item.id === id) {
          if (item.amount === 1) return ack;
          return [...ack, { ...item, amount: item.amount - 1 }];
        } else {
          return [...ack, item];
        }
      }, [] as CartItemType[])
    );
  };





  return (
    <>
     
      <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart
          cartItems={cartItems}
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
        />
      </Drawer>
      
   
      <div></div>
      <button  onClick={() => setCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color='error'>
          <AiOutlineShoppingCart size={50} color='green' />
          
        </Badge>
        
      </button>
      
      <Grid container spacing={4}>
        {data?.map(item => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </>
     
    
   
  );
};

export default frist;

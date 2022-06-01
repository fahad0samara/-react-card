import Item from './Item/Item';
import Cart from './Cart/Cart';
import { useEffect, useState } from "react";
import axios from 'axios';

// Types
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
  
  console.log(data);
useEffect(() => {
  axios.get('https://fakestoreapi.com/products').then(function (response) {
    console.log(response.data);
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
   
      <div className='h'>
      <button  onClick={() => setCartOpen(false)}>card</button>
        <Cart
          cartItems={cartItems}
         
         
        />
      </div>
      <div >
        <button onClick={() => setCartOpen(true)}></button>
      
      </div> 
     <div className="grid grid-cols-3 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data?.map(item => (
          <div  key={item.id} >
            <Item item={item} handleAddToCart={handleAddToCart} />
          </div>
        ))}
        
        </div>
      </>
    
   
  );
};

export default frist;

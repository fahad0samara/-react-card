
// Types
import { CartItemType } from '../Frist';
// Styles


type Props = {
  item: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => (
  <>
    <div className=''>

      <img className='w-32' src={item.image} alt={item.title} />
      <h3>{item.title}</h3>


      <p>Price: ${item.price}</p>
      <p>Total: ${(item.amount * item.price).toFixed(2)}</p>


      <button
        onClick={() => removeFromCart(item.id)}
      >
        -
      </button>
      <p>{item.amount}</p>
      <button

        onClick={() => addToCart(item)}
      >
        +
      </button>

    </div>

  </>
);

export default CartItem;

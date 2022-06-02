
// Types
import { CartItemType } from '../../Home';
// Styles


type Props = {
  item: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const CartItem: React.FC<Props> = ({ item }) => (
  <>






    <div >


      <div className="   ">
        <img className='w-full  h-40 object-cover' src={item.image} alt={item.title} />
        <h1 className="text-2xl font-bold ">{item.title}</h1>

        <p className="mt-2 text-sm">Price: ${item.price}</p>

      </div>

    </div>



  </>
);

export default CartItem;

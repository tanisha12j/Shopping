import { FC } from "react";
import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

interface CartItemProps {
  item: {
    id: number;
    image: string;
    title: string;
    description: string;
    price: number;
  };
  itemIndex: number;
}

const CartItem: FC<CartItemProps> = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  };

  return (
    <div>
      <div>
        <div>
          <img src={item.image} alt="Item Image" />
        </div>
        <div>
          <h1>{item.title}</h1>
          <h1>{item.description}</h1>
          <div>
            <p>{item.price}</p>
            <div onClick={removeFromCart}>
              <FcDeleteDatabase />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

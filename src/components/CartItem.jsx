
import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div className="flex flex-row items-center justify-around p-6 pt-8 pb-8 gap-8 mt-10 ml-5 rounded-xl outline">
        <div className="flex items-center justify-center w-[200px] h-[220px]">
          <img src={item.image} className="h-full w-full"/>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-gray-700 font-semibold text-lg text-left truncate w-72 mt-1 mb-1">{item.title}</p>
          <p className="w-72 text-gray-400 font-normal text-[10px] text-left">{item.description}</p>
          <div className="flex justify-between gap-12 items-center w-full mt-4">
            <p className="text-orange-400 font-semibold">${item.price}</p>
            <div
            onClick={removeFromCart}>
              <FcDeleteDatabase/>
            </div>
          </div>
        </div>
    </div>
  );
};

export default CartItem;

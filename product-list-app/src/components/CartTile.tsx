import { CartItem, removeFromCart } from "../store/cart-slice";
import { useAppDispatch } from "../store/hooks";

type CartTileProps = {
    item: CartItem;
};

const CartTile = ({ item }: CartTileProps) => {
    const subTotal = (item.price * item.quantity).toFixed(2);
    const dispatch = useAppDispatch();

    return (
        <li>
            <div className="flex justify-between items-center">
                <div>
                    <p className="font-semibold text-[1.4rem] text-customRose-900">
                        {item.name}
                    </p>
                    <div className="flex gap-[0.8rem]">
                        <p className="font-semibold text-red text-[1.4rem]">
                            {item.quantity}x
                        </p>
                        <p className="text-[1.4rem] text-customRose-500">
                            @ ${item.price.toFixed(2)}
                        </p>
                        <p className="font-semibold text-[1.4rem] text-customRose-500">
                            ${subTotal}
                        </p>
                    </div>
                </div>
                <div>
                    <div
                        onClick={() => dispatch(removeFromCart(item.name))}
                        className="remove-cart-item-btn border-2 border-[#AD8A85] hover:border-customRose-900 rounded-full w-[2rem] h-[2rem] flex justify-center items-center cursor-pointer"
                    >
                        <img
                            src="/images/icon-remove-item.svg"
                            alt="Remove Cart Item Icon"
                        />
                    </div>
                </div>
            </div>
            <hr className=" my-[1.6rem]" />
        </li>
    );
};

export default CartTile;

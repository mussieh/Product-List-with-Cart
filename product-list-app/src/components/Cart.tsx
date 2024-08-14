import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setIsOpen } from "../store/modal-slice";
import CartTile from "./CartTile";
import OrderButton from "./OrderButton";

const Cart = () => {
    const cartItems = useAppSelector((state) => state.cart.items);
    const dispatch = useAppDispatch();

    const totalNumberOfItems = cartItems
        .map((cartItem) => cartItem.quantity)
        .reduce((total, currentQuantity) => total + currentQuantity, 0);

    const orderTotal = cartItems
        .reduce((val, item) => val + item.price * item.quantity, 0)
        .toFixed(2);

    return (
        <div className="bg-white p-[2.4rem] rounded-[1.2rem]">
            <h2 className="font-bold text-[2.4rem] text-red mb-[2.4rem]">
                Your Cart ({totalNumberOfItems})
            </h2>
            {cartItems.length === 0 && (
                <div className="flex flex-col justify-center items-center py-[1.6rem]">
                    <img
                        className="w-[12.8rem] h-[12.8rem]"
                        src="/images/illustration-empty-cart.svg"
                        alt="Empty Cart Illustration"
                    />
                    <p className="mt-[1.6rem] text-[1.4rem] font-semibold text-customRose-500">
                        Your added items will appear here
                    </p>
                </div>
            )}

            {cartItems.length > 0 && (
                <>
                    <ul className="max-h-[20.4rem] overflow-y-scroll">
                        {cartItems.map((item) => {
                            return <CartTile key={item.name} item={item} />;
                        })}
                    </ul>
                    {cartItems.length > 3 && (
                        <div className="flex justify-center animate-bounce">
                            <img
                                className="arrow-down-icon w-[2rem] h-[2rem]"
                                src="/images/arrow-down-circle-outline.svg"
                                alt="Arrow Down Icon"
                            />
                        </div>
                    )}
                    <div className="flex justify-between items-center mb-[2.4rem]">
                        <p className="text-[1.4rem] text-customRose-900">
                            Order Total
                        </p>
                        <p className="font-bold text-[2.4rem] text-customRose-900">
                            ${orderTotal}
                        </p>
                    </div>
                    <div className="p-[1.6rem] bg-customRose-50 rounded-[0.8rem] flex justify-center items-center gap-[0.8rem]">
                        <img
                            className="w-[2rem] h-[2rem]"
                            src="/images/icon-carbon-neutral.svg"
                            alt="Carbon Neutral Icon"
                        />
                        <p className="text-[1.4rem]">
                            This is a{" "}
                            <span className="font-semibold">
                                carbon-neutral
                            </span>{" "}
                            delivery
                        </p>
                    </div>
                    <OrderButton
                        onButtonClick={() => dispatch(setIsOpen(true))}
                    >
                        Confirm Order
                    </OrderButton>
                </>
            )}
        </div>
    );
};

export default Cart;

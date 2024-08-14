import { clearCart } from "../store/cart-slice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setIsOpen } from "../store/modal-slice";
import ConfirmedOrderItem from "./ConfirmedOrderItem";
import OrderButton from "./OrderButton";

const ConfirmationModal = () => {
    const modalIsOpen = useAppSelector((state) => state.modal.isOpen);
    const dispatch = useAppDispatch();
    const cartItems = useAppSelector((state) => state.cart.items);

    const orderTotal = cartItems
        .reduce((val, item) => val + item.price * item.quantity, 0)
        .toFixed(2);

    const modalBackdropStyle = modalIsOpen ? "" : "fade-out-effect";

    const handleNewOrderClick = () => {
        dispatch(clearCart());
        dispatch(setIsOpen(false));
    };

    return (
        <>
            <div
                className={`${modalBackdropStyle} z-50 fixed top-0 left-0 bg-black bg-opacity-65 w-full h-screen flex items-center`}
            >
                <dialog
                    className={`${modalBackdropStyle} order-confirmation-modal bg-white mx-auto p-[4rem] w-[59.2rem] max-h-[68.5rem] sm:w-full sm:fixed sm:bottom-0 sm:rounded-b-none rounded-[1.2rem]`}
                    open={modalIsOpen}
                >
                    <div className="w-[4.8rem] h-[4.8rem] mb-[2.4rem]">
                        <img
                            src="/images/icon-order-confirmed.svg"
                            alt="Order Confirmed Icon"
                        />
                    </div>
                    <h2 className="font-bold text-[4rem] leading-[120%] text-customRose-900">
                        Order Confirmed
                    </h2>
                    <p className="text-[1.6rem] text-customRose-500 mb-[3.2rem]">
                        We hope you enjoy your food!
                    </p>
                    <div className="p-[2.4rem] bg-customRose-50 rounded-[0.8rem] mb-[0.8rem]">
                        <ul className="max-h-[21rem] overflow-y-scroll">
                            {cartItems.map((item) => (
                                <ConfirmedOrderItem
                                    key={item.name}
                                    item={item}
                                />
                            ))}
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
                        <div className="mt-[2.4rem] flex justify-between items-center">
                            <p className="text-[1.4rem] text-customRose-900">
                                Order Total
                            </p>
                            <p className="font-bold text-[2.4rem] text-customRose-900">
                                ${orderTotal}
                            </p>
                        </div>
                    </div>
                    <OrderButton onButtonClick={handleNewOrderClick}>
                        Start New Order
                    </OrderButton>
                </dialog>
            </div>
        </>
    );
};

export default ConfirmationModal;

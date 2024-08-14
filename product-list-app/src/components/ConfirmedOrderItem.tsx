import { CartItem } from "../store/cart-slice";

type ConfirmedOrderItemProps = {
    item: CartItem;
};

const ConfirmedOrderItem = ({ item }: ConfirmedOrderItemProps) => {
    const subTotal = (item.quantity * item.price).toFixed(2);

    return (
        <>
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-[1.6rem]">
                    <img
                        className="w-[4.8rem] h-[4.8rem] rounded-[0.4rem]"
                        src={item.image.thumbnail}
                        alt="Cart Item Thumbnail"
                    />
                    <div>
                        <p className="text-[1.4rem] font-semibold text-customRose-900">
                            {item.name}
                        </p>
                        <div className="flex items-center gap-[0.8rem]">
                            <p className="text-red text-[1.4rem] font-semibold">
                                {item.quantity}x
                            </p>
                            <p className="text-[1.4rem] text-customRose-500">
                                @ ${item.price.toFixed(2)}
                            </p>
                        </div>
                    </div>
                </div>
                <p className="text-[1.6rem] font-semibold text-customRose-900">
                    ${subTotal}
                </p>
            </div>
            <hr className="border-customRose-100 my-[1.6rem]" />
        </>
    );
};

export default ConfirmedOrderItem;

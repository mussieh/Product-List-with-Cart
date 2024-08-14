import { Operation } from "../shared/types/Direction";

type QuantityButtonProps = {
    quantity: number;
    onQuantityChange: (operation: Operation) => void;
};

const QuantityButton = ({
    quantity,
    onQuantityChange,
}: QuantityButtonProps) => {
    return (
        <div className="flex justify-center max-w-full w-[25rem] md:w-[21.3rem] sm:w-full">
            <div className="z-10 bg-red p-[1.2rem] border-none rounded-full flex items-center gap-[4.3rem] max-w-[16rem] relative bottom-[2.2rem]">
                <div
                    onClick={() => onQuantityChange(Operation.Decrement)}
                    className="quantity-btn border border-white hover:bg-white rounded-full w-[2rem] h-[2rem] flex justify-center items-center cursor-pointer"
                >
                    <img
                        src="/images/icon-decrement-quantity.svg"
                        alt="Decrement Quantity Icon"
                    />
                </div>
                <p className="text-white font-semibold text-[1.4rem]">
                    {quantity}
                </p>
                <div
                    onClick={() => onQuantityChange(Operation.Increment)}
                    className="quantity-btn border border-white hover:bg-white rounded-full w-[2rem] h-[2rem] flex justify-center items-center cursor-pointer"
                >
                    <img
                        src="/images/icon-increment-quantity.svg"
                        alt="Increment Quantity Icon"
                    />
                </div>
            </div>
        </div>
    );
};

export default QuantityButton;

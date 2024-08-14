import { ReactNode } from "react";

type OrderButtonProps = {
    onButtonClick?: () => void;
    children: ReactNode;
};

const OrderButton = ({ onButtonClick, children }: OrderButtonProps) => {
    return (
        <div
            onClick={onButtonClick}
            className="rounded-full bg-red hover:bg-[#952C0A] px-[2.4rem] py-[1.6rem] flex justify-center items-center mt-[2.4rem] cursor-pointer"
        >
            <p className="font-semibold text-[1.6rem] text-white">{children}</p>
        </div>
    );
};

export default OrderButton;

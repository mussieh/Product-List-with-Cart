type AddToCartButtonProps = {
    onClick: () => void;
};

const AddToCartButton = ({ onClick }: AddToCartButtonProps) => {
    return (
        <div className="flex justify-center max-w-full w-[25rem] md:w-[21.3rem] sm:w-full">
            <div
                onClick={onClick}
                className="z-10 bg-white p-[1.2rem] border border-customRose-400 hover:border-red rounded-full cursor-pointer flex justify-center items-center gap-[0.8rem] max-w-[16rem] relative bottom-[2.2rem] flex-1 group"
            >
                <img
                    src="/images/icon-add-to-cart.svg"
                    alt="Add to Cart Icon"
                />
                <p className="text-customRose-900 font-semibold text-[1.4rem] group-hover:text-red">
                    Add to Cart
                </p>
            </div>
        </div>
    );
};

export default AddToCartButton;

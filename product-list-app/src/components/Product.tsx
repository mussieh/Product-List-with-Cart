import { useEffect, useState } from "react";
import AddToCartButton from "./AddToCartButton";
import QuantityButton from "./QuantityButton";
import { Operation } from "../shared/types/Direction";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { addToCart, reduceCartQuantity } from "../store/cart-slice";

type ProductProps = {
    name: string;
    category: string;
    price: number;
    image: {
        thumbnail: string;
        mobile: string;
        tablet: string;
        desktop: string;
    };
};

const Product = ({ name, category, price, image }: ProductProps) => {
    const [quantity, setQuantity] = useState(0);
    const dispatch = useAppDispatch();
    const cartItems = useAppSelector((state) => state.cart.items);

    const borderStyle = quantity > 0 ? "border-2 border-red" : "";

    useEffect(() => {
        const cartItem = cartItems.find((item) => item.name === name);
        if (!cartItem) {
            setQuantity(0);
        }
    }, [cartItems, name]);

    const handleAddToCart = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
        dispatch(addToCart({ name, category, price, quantity, image }));
    };

    const handleQuantityChange = (operation: Operation) => {
        switch (operation) {
            case Operation.Increment:
                setQuantity((prevQuantity) => prevQuantity + 1);
                dispatch(addToCart({ name, category, price, quantity, image }));
                break;
            case Operation.Decrement:
                setQuantity((prevQuantity) => prevQuantity - 1);
                dispatch(reduceCartQuantity(name));
                break;
            default:
                console.log("Invalid operation");
        }
    };

    return (
        <article>
            <picture className="z-0">
                <source media="(min-width:1024px)" srcSet={image.desktop} />
                <source media="(min-width:768px)" srcSet={image.tablet} />
                <source media="(max-width:425px)" srcSet={image.mobile} />
                <img
                    className={`${borderStyle} rounded-[0.8rem] w-[25rem] h-[24rem] md:w-[21.3rem] md:h-[21.2rem] sm:w-full`}
                    src={image.desktop}
                    alt={name}
                />
            </picture>
            {quantity > 0 ? (
                <QuantityButton
                    quantity={quantity}
                    onQuantityChange={handleQuantityChange}
                />
            ) : (
                <AddToCartButton onClick={handleAddToCart} />
            )}
            <div>
                <p className="text-[1.4rem] text-customRose-500">{category}</p>
                <p className="text-[1.6rem] text-customRose-900 font-semibold">
                    {name}
                </p>
                <p className="text-red text-[1.6rem] font-semibold">
                    ${price.toFixed(2)}
                </p>
            </div>
        </article>
    );
};

export default Product;

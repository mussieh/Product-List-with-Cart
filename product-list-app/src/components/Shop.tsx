import { ReactNode } from "react";
import Cart from "./Cart";

type ShopProps = {
    children: ReactNode;
};

const Shop = ({ children }: ShopProps) => {
    return (
        <main>
            <section className="mx-auto flex gap-[3.2rem] xls:flex-col max-w-[121.6rem]">
                <div>
                    <h1 className="font-bold leading-[120%] text-[4rem] mb-[3.2rem]">
                        Desserts
                    </h1>
                    <ul className="grid grid-cols-3 mds:grid-cols-2 sm:grid-cols-1 gap-x-[2.4rem] gap-y-[3.2rem]">
                        {children}
                    </ul>
                </div>
                <div className="flex-1">
                    <Cart />
                </div>
            </section>
        </main>
    );
};

export default Shop;

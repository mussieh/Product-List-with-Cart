import { Provider } from "react-redux";
import { store } from "./store/store";
import CART_DATA from "./data.json";
import Shop from "./components/Shop";
import Product from "./components/Product";
import ConfirmationModal from "./components/OrderConfirmationModal";

const App = () => {
    return (
        <Provider store={store}>
            <ConfirmationModal />
            <Shop>
                {CART_DATA.map((product) => (
                    <li key={product.name}>
                        <Product {...product} />
                    </li>
                ))}
            </Shop>
        </Provider>
    );
};

export default App;

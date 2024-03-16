import { useEffect } from "react";
import { useState } from "react";
import Cart from "../Cart/Cart";

const Carts = () => {

    const [carts, setCarts] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCarts(data))
    }, [])

    return (
        <div className="lg:w-3/5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {
                    carts.map((cart, idx) => <Cart
                        key={idx}
                        cart={cart}></Cart>)
                }
            </div>
        </div>
    );
};

export default Carts;
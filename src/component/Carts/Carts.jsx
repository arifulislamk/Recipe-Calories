import { useEffect } from "react";
import { useState } from "react";
import Cart from "../Cart/Cart";
import PropTypes from 'prop-types';

const Carts = ({handleCookBtn}) => {

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
                        handleCookBtn={handleCookBtn}
                        cart={cart}></Cart>)
                }
            </div>
        </div>
    );
};
Carts.propTypes = {
    handleCookBtn: PropTypes.func
}

export default Carts;
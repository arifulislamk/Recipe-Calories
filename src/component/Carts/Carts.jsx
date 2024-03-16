import { useEffect } from "react";
import { useState } from "react";

const Carts = () => {

    const [carts, setCarts] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCarts(data))
    }, [])

    return (
        <div>
            <h3>Carts : {carts.length}</h3>
        </div>
    );
};

export default Carts;
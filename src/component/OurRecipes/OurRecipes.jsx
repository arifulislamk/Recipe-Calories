import { useState } from "react";
import Carts from "../Carts/Carts";
import TableContainer from "../TableContainer/TableContainer";
import { toast } from 'react-toastify';

const OurRecipes = () => {

    const [cart1, setCart] = useState([])
    const handleCookBtn = cart => {
        const isExist = cart1.find(c => c.recipe_id === cart.recipe_id)
        if (!isExist) {
            const newCart = [...cart1, cart]
            setCart(newCart);
            toast('Cook Add')
        }

        else {
            toast('Already Exist')
        }
    }


    const [tables, settable] = useState([])
    const [times, settimes] = useState(0)
    const [calories, setcalories] = useState(0)

    const handlePrepareBtn = (table, id, time, calorie) => {
        const newTable = [...tables, table];
        settable(newTable)

        const remeningCart = cart1.filter(cart => cart.recipe_id !== id);
        setCart(remeningCart)

        const timeInteger = parseInt(time)
        const newTime = times + timeInteger;
        settimes(newTime);

        const caloriesInteger = parseInt(calorie);
        const newCalories = calories + caloriesInteger;
        setcalories(newCalories);
    }
    // console.log(times)

    return (
        <div className="mx-2 lg:mx-14 ">
            <div className="text-center mt-4 lg:mt-20">
                <h2 className=" mb-4 text-[40px] font-semibold text-[#150B2B] ">Our Recipes</h2>
                <p className="text-[#150B2B99]"> There are so many Popular recipe item us. People come our restaurent from all Dhaka city . Here some most popular example our recipe :
                </p>
            </div>

            <div className="mt-10 flex flex-col lg:flex-row gap-3">

                <Carts handleCookBtn={handleCookBtn} >
                </Carts>

                <TableContainer
                    tables={tables}
                    handlePrepareBtn={handlePrepareBtn}
                    times={times}
                    calories={calories}
                    cart1={cart1}>

                </TableContainer>
            </div>
        </div>
    );
};


export default OurRecipes;
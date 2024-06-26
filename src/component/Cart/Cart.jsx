import PropTypes from 'prop-types';
import { AiOutlineFire } from "react-icons/ai";
import { IoTimeOutline } from "react-icons/io5";
import Ingredient from "../Ingredient/Ingredient"
const Cart = ({ cart, handleCookBtn }) => {
    // console.log(cart)
    const { recipe_image, recipe_name, short_description,
        preparing_time, calories, ingredients } = cart;
    // console.log(ingredients)

    return (
        <div className="grid justify-center lg:py-6  border-2 border-stone-400 shadow-xl rounded-2xl">
            <div className=''><img className="mb-3 lg:mb-8 lg:w-[340px] lg:h-[200px] rounded-lg border-1 " src={recipe_image} alt="" /></div>
            <div className='lg:w-[340px] space-y-3 lg:space-y-6'>
                <div>
                    <h3 className='text-xl font-semibold text-[#282828] mb-2'>{recipe_name}</h3>
                    <p className='text-[#878787] text-wrap'>{short_description}</p>
                </div>

                <div>
                    <p className='text-[#282828] font-medium text-[16px} mb-2'>Ingredients : {ingredients.length}</p>
                    <ul>
                        {
                            ingredients.map((ingred, idx) => <Ingredient
                                key={idx}
                                ingred={ingred}></Ingredient>)
                        }
                    </ul>
                </div>
                <div className='lg:flex gap-10 text-[#282828CC]'>
                    <p className='flex items-center gap-2'><IoTimeOutline />{preparing_time}</p>
                    <p className='flex items-center gap-2'><AiOutlineFire></AiOutlineFire>{calories}</p>
                </div>
                <button onClick={() => handleCookBtn(cart)} className='btn text-[#150B2B] bg-[#0BE58A] rounded-lg p-3'>Want to Cook</button>
            </div>
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.object,
    handleCookBtn: PropTypes.func
}

export default Cart;
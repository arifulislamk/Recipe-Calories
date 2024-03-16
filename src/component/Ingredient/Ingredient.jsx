import { GoDot } from "react-icons/go";
import PropTypes from 'prop-types';

const Ingredient = ({ ingred }) => {
    return (
        <>
            <li className="flex gap-2 items-center"><GoDot /> {ingred}</li>
        </>
    )
};
Ingredient.propTypes = {
    ingred: PropTypes.string
}
export default Ingredient;
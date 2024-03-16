import { GoDot } from "react-icons/go";

const Ingredient = ({ ingred }) => {
    return (
        <>
            <li className="flex gap-2 items-center"><GoDot /> {ingred}</li>
        </>
    )
};

export default Ingredient;
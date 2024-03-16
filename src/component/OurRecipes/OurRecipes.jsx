import Carts from "../Carts/Carts";
import WantCook from "../WantCook/WantCook";

const OurRecipes = () => {
    

    return (
        <div className="mx-2 lg:mx-14 ">
            <div className="text-center mt-4 lg:mt-20">
                <h2 className=" mb-4 text-[40px] font-semibold text-[#150B2B] ">Our Recipes</h2>
                <p className="text-[#150B2B99]">Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus.
                    Eget urna volutpat curabitur elementum mauris aenean neque. </p>
            </div>
            <div className="mt-10 flex flex-col lg:flex-row">
                <Carts></Carts>
                <WantCook></WantCook>
            </div>
        </div>
    );
};

export default OurRecipes;
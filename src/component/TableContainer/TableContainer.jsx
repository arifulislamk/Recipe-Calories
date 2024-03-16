import TopTable from "../TopTable/TopTable";
import PropTypes from 'prop-types';

const TableContainer = ({ cart1 }) => {
    return (
        <div className="border-2 border-stone-400 lg:w-2/5 flex items-center flex-col">

            <div className=" space-y-4 ">
                <h2 className="mb-4 lg:text-2xl font-semibold text-[#282828] text-center">Want to cook: {cart1.length}</h2>
                {
                    cart1.map(table => <TopTable key={table.recipe_id
                    } table={table}></TopTable>)
                }

            </div>

            <div className="mt-6 space-y-4 ">
                <h2 className="mb-3 lg:text-2xl font-semibold text-[#282828] text-center">Currently cooking: 02</h2>
                <div>
                    <table className="">
                        <thead className="text-[#878787] font-medium">
                            <tr className="flex lg:space-x-10">
                                <th></th>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Calories</th>
                            </tr>
                        </thead>
                        <tbody >

                            <tr className="flex lg:space-x-10" >
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                            </tr>
                        </tbody>

                    </table>

                </div>
            </div>

        </div>
    );
};
TableContainer.propTypes = {
    cart1: PropTypes.array
}

export default TableContainer;
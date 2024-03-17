import TopTable from "../TopTable/TopTable";
import PropTypes from 'prop-types';
import BottomTable from "../BottomTable/BottomTable";

const TableContainer = ({ cart1,handlePrepareBtn,tables }) => {
    return (
        <div className="border-2 border-stone-400 lg:w-2/5 flex items-center flex-col">

            <div className=" space-y-4 ">
                <h2 className="mb-4 lg:text-2xl font-semibold text-[#282828] text-center">Want to cook: {cart1.length}</h2>
                <table className="table-auto">
                    <thead className="text-[#878787] font-medium">
                        <tr className="flex lg:space-x-10 ">
                            <th> </th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                    </thead>

                    <tbody >
                        {
                            cart1.map((table, inx) => <TopTable
                                handlePrepareBtn={handlePrepareBtn}
                                key={inx}
                                inx={inx}
                                table={table}
                            ></TopTable>)
                        }
                    </tbody>
                </table>

            </div>

            <div className="mt-6 space-y-4 ">
                <h2 className="mb-3 lg:text-2xl font-semibold text-[#282828] text-center">Currently cooking: {tables.length}</h2>
                <table className="table-auto">
                    <thead className="text-[#878787] font-medium">
                        <tr className="flex lg:space-x-10">
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            tables.map((table, inx) => <BottomTable
                                key={inx}
                                inx={inx}
                                table={table}
                            ></BottomTable>)
                        }
                    </tbody>

                </table>
            </div>

        </div >
    );
};
TableContainer.propTypes = {
    cart1: PropTypes.array,
    handlePrepareBtn: PropTypes.func,
    tables: PropTypes.array,
}

export default TableContainer;
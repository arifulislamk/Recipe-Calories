import TopTable from "../TopTable/TopTable";
import PropTypes from 'prop-types';
import BottomTable from "../BottomTable/BottomTable";

const TableContainer = ({ cart1, handlePrepareBtn, tables, times, calories }) => {
    return (
        <div className=" lg:w-2/5 flex items-center flex-col">

            {/* first Table  */}
            <div className=" space-y-4 ">
                <h2 className="mb-4 lg:text-2xl font-semibold text-[#282828] text-center">Want to cook: {cart1.length}</h2>
                <table className="table-auto border-6 ">
                    <thead className="text-[#878787] font-medium">
                        <tr className="flex space-x-6 lg:space-x-20 ">
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

            {/* Second Table  */}
            <div className="mt-10 w-full grid justify-center space-y-4 ">
                <h2 className="mb-4 lg:text-2xl font-semibold text-[#282828] text-center">Currently cooking: {tables.length}</h2>
                <table className="table-auto">
                    <thead className="text-[#878787] font-medium">
                        <tr className="flex space-x-6 lg:space-x-20">
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

                <div className="flex justify-end items-center gap-5">
                    <p>Total time=<br /> {times} minits</p>
                    <p>Total Calories=  {calories} <br /> calories</p>
                </div>

            </div>



        </div >
    );
};
TableContainer.propTypes = {
    cart1: PropTypes.array,
    handlePrepareBtn: PropTypes.func,
    tables: PropTypes.array,
    times: PropTypes.number,
    calories: PropTypes.number,
}

export default TableContainer;
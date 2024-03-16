import { useState } from "react";
import TopTable from "../TopTable/TopTable";
import PropTypes from 'prop-types';
import BottomTable from "../BottomTable/BottomTable";

const TableContainer = ({ cart1}) => {

    const [tables,settable] = useState([])
    const handlePrepareBtn = table =>{
        // console.log('click by prepare',table)
        const newTable = [...tables, table] ;
        settable(newTable)
    }
    console.log(tables)

    return (
        <div className="border-2 border-stone-400 lg:w-2/5 flex items-center flex-col">

            <div className=" space-y-4 ">
                <h2 className="mb-4 lg:text-2xl font-semibold text-[#282828] text-center">Want to cook: {cart1.length}</h2>
                {
                    cart1.map((table,inx) => <TopTable
                        handlePrepareBtn={handlePrepareBtn}
                        key={table.recipe_id}
                        inx={inx}
                        table={table}
                    ></TopTable>)
                }

            </div>

            <div className="mt-6 space-y-4 ">
                <h2 className="mb-3 lg:text-2xl font-semibold text-[#282828] text-center">Currently cooking: {tables.length}</h2>
                {
                    tables.map((table,inx) => <BottomTable 
                        key={table.recipe_id}
                        inx={inx}
                        table={table}
                        ></BottomTable>)
                }
            </div>

        </div>
    );
};
TableContainer.propTypes = {
    cart1: PropTypes.array
}

export default TableContainer;
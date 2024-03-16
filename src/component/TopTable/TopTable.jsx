import PropTypes from 'prop-types';
const TopTable = ({ table, handlePrepareBtn, inx }) => {
    // console.log(table);
    const { recipe_name, preparing_time, calories
    } = table;
    return (
        <div>
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

                    <tr className="flex lg:space-x-10" >
                        <th>{inx + 1}</th>
                        <td>{recipe_name}</td>
                        <td>{preparing_time}</td>
                        <td>{calories}</td>
                        <td><button onClick={() => handlePrepareBtn(table)} className="btn text-[#150B2B] font-semibold rounded-2xl bg-[#0BE58A] ">
                            Preparing</button></td>
                    </tr>
                </tbody>

            </table>


        </div>
    );
};
TopTable.propTypes = {
    table: PropTypes.object
}

export default TopTable;
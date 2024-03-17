import PropTypes from 'prop-types';
const TopTable = ({ table, handlePrepareBtn, inx }) => {
    // console.log(table);
    const { recipe_name,recipe_id, preparing_time, calories
    } = table;
    return (
        <>
            <tr className="flex lg:space-x-10" >
                <th>{inx + 1}</th>
                <td>{recipe_name}</td>
                <td>{preparing_time}</td>
                <td>{calories}</td>
                <td><button onClick={() => handlePrepareBtn(table,recipe_id)} className="btn text-[#150B2B] font-semibold rounded-2xl bg-[#0BE58A] ">
                    Preparing</button></td>
            </tr>
        </>
    );
};
TopTable.propTypes = {
    table: PropTypes.object,
    handlePrepareBtn: PropTypes.func,
    inx: PropTypes.number,
}

export default TopTable;
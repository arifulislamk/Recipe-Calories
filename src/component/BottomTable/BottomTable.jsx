import PropTypes from 'prop-types';
const BottomTable = ({ table, inx }) => {
    const { recipe_name, preparing_time, calories
    } = table;
    return (
        <>
            <tr className="flex lg:space-x-16 bg-stone-200 rounded-md p-2" >
                <th>{inx + 1}</th>
                <td>{recipe_name}</td>
                <td>{preparing_time}</td>
                <td>{calories}</td>
            </tr>
        </>
    );
};
BottomTable.propTypes = {
    table: PropTypes.object,
    inx: PropTypes.number,
}


export default BottomTable;
const BottomTable = ({ table,inx }) => {
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
                        <th>{inx+1}</th>
                        <td>{recipe_name}</td>
                        <td>{preparing_time}</td>
                        <td>{calories}</td>
                    </tr>
                </tbody>

            </table>
        </div>
    );
};

export default BottomTable;
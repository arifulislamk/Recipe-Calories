const WantCook = () => {
    return (
        <div className="w-2/5">
            <h2 className="text-2xl font-semibold text-[#282828] text-center">Want to cook: 01</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                            <td><button className="btn  text-[#150B2B] 
            font-semibold rounded-2xl bg-[#0BE58A] ">Preparing</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default WantCook;
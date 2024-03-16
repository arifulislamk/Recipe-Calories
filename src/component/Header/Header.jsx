import profile from '../../assets/images/profile-icon.png'
const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown lg:hidden">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Home</a></li>
                            <li><a>Recipes</a></li>
                            <li><a>About</a></li>
                            <li><a>Search</a></li>
                        </ul>
                    </div>
                    <h2 className=' hidden lg:flex text-xl lg:text-3xl font-bold text-[#150B2B] '>Recipe Calories</h2>
                </div>

                <div className="navbar-center  ">
                    <h2 className=' lg:hidden text-xl lg:text-3xl font-bold text-[#150B2B] '>Recipe Calories</h2>
                    <ul className='hidden lg:flex gap-14 text-[16px] text-[#150B2BB3]'>
                        <a href=""><li>Home</li></a>
                        <a href=""><li>Recipes</li></a>
                        <a href=""><li>About</li></a>
                        <a href=""><li>Search</li></a>
                    </ul>
                </div>
                <div className="navbar-end lg:gap-4">
                    <div className='hidden lg:flex items-center pr-4 bg-stone-100  rounded-full'>
                        <button className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                        <input className='rounded-full bg-slate-100 outline-none' type="text" placeholder='Search' />
                    </div>
                    <button className="btn btn-ghost btn-circle">
                        <img src={profile} alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;
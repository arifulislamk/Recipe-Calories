const Banner = () => {
    return (
        <div>
            <div className="mt-4 lg:mt-6 hero min-h-screen rounded-2xl" style={{ backgroundImage: 'url(https://i.ibb.co/PxKPH90/banner.png)' }}>
                <div className="text-center text-neutral-content lg:space-y-14 p-6">

                    <h1 className="mb-5 text-2xl lg:text-5xl font-bold">Discover an exceptional cooking <br />
                        class tailored for you!</h1>
                    <p className="mb-5">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding <br />
                        problems to become an exceptionally well world-class Programmer.</p>
                    <div className="flex flex-col lg:flex-row gap-4 justify-center">
                        <button className="btn px-8  text-[#150B2B] text-xl font-semibold rounded-full bg-[#0BE58A] ">Explore Now</button>
                        <a className=" text-xl font-semibold border-2 rounded-full p-2 ">Our Feedback</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
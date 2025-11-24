
function Navbar() {
    return (
        <div className="navbar px-8 lg:px-[100px] py-8">
            <div className="navbar-start">
                <a href="" className="font-primary text-2xl font-extrabold tracking-widest">PANIC</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <div className="px-6 py-2 rounded-full bg-blue-950 text-white font-semibold">
                    Panic Mentions Today : <span className="text-green-400 font-extrabold">7,842 on X</span>
                </div>
            </div>
            <div className="navbar-end">
                <button className="btn py-2 btn-primary rounded-full">
                    <a href="">Buy $PANIC</a>
                </button>
            </div>

        </div>
    )
}

export default Navbar
function NavBar() {

    return (
        <nav className="text-blue-500 hover:text-blue-700 text-xl">
            <a href={"/"}> Home </a>
            <a href={"/login"}> Login </a>
            <a href={"/register"}> Register </a>
        </nav>
    )
}

export default NavBar;
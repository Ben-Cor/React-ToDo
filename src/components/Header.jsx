import NavBar from "./NavBar.jsx";

function Header() {
    return (
        <header className="flex items-center justify-between bg-gray-800 text-white p-4">
            <h1>TASKS</h1>
            <NavBar />
        </header>
    )
}

export default Header;
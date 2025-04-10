import NavBar from "./NavBar.jsx";

function Header() {
    return (
        // TODO: Add dynamic formatting
        <header className="flex items-center justify-between gap-2 px-8 bg-gray-800 text-white p-4">
            <h1>TASKS</h1>
            <NavBar />
        </header>
    )
}

export default Header;
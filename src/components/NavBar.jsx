import {useLocation} from "react-router-dom";

function NavBar() {

        const location = useLocation();
        // The links to be displayed in the navbar - add new links here
        // TODO: Add dynamic formatting
        const links = [
            { path: "/", label: "Home" },
            { path: "/login", label: "Login" },
            { path: "/register", label: "Register" }
        ];

    return (
        <nav className="text-xl flex items-center justify-between gap-4 w-[300px]">
            {links
                .filter(link => link.path !== location.pathname)
                .map(link => (
                    <a className="text-blue-200 hover:text-blue-500"  key={link.path} href={link.path}>
                        {link.label}
                    </a>
                ))}
        </nav>
    )
}

export default NavBar;
import React from "react";
import { NavLink } from "react-router-dom";

interface NavItemProps {
    label: string;
    to: string;
}

const NavItem: React.FC<NavItemProps> = ({ label, to }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `px-4 py-3 font-semibold ${
                    isActive
                        ? "border-b-2 border-blue-500 text-blue-500"
                        : "rounded-lg text-gray-400 hover:bg-gray-600"
                }`
            }
            end
        >
            {label}
        </NavLink>
    );
};

const Navbar: React.FC = () => {
    const navItems = [
        { label: "Home", to: "/portfolio" },
        { label: "About", to: "/portfolio/about" },
        { label: "Projects", to: "/portfolio/projects" },
        // { label: "Contact", to: "/portfolio/contact" },
    ];

    return (
        <nav className="flex pt-2">
            {navItems.map((item) => (
                <NavItem key={item.to} label={item.label} to={item.to} />
            ))}
        </nav>
    );
};

export default Navbar;

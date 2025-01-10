import React, { useState } from "react";

interface NavItemProps {
    label: string;
    active: boolean;
    onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ label, active, onClick }) => {
    return (
        <button
            className={`px-4 py-3 font-semibold ${
                active
                    ? "border-b-2 border-blue-500 text-blue-500"
                    : "rounded-lg text-gray-400 hover:bg-gray-600"
            }`}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

const Navbar: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0); // Track the active button index

    const navItems = ["Posts", "About", "Projects", "Contact"];

    return (
        <nav className="flex pt-2">
            {navItems.map((label, index) => (
                <NavItem
                    key={index}
                    label={label}
                    active={index === activeIndex}
                    onClick={() => setActiveIndex(index)} // Update the active index
                />
            ))}
        </nav>
    );
};

export default Navbar;

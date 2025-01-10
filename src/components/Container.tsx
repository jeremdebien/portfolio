import React from "react";

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

const Container = ({ children, className = "" }: ContainerProps) => {
    return (
        <div className={`${className} rounded-lg bg-gray-800 p-4`}>
            {children}
        </div>
    );
};

export default Container;

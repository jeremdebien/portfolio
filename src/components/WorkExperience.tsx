import React from "react";
import ImageBox from "./ImageBox";

interface WorkExperienceProps {
    company: string;
    position: string;
    duration: string;
    responsibilities: string[];
    logoUrl?: string;
}

const WorkExperience: React.FC<WorkExperienceProps> = ({
    company,
    position,
    duration,
    responsibilities,
    logoUrl = "",
}) => {
    return (
        <>
            <div className="p-2">
                {/* Company and Position */}
                <div className="mb-2 flex items-center px-2">
                    <ImageBox
                        src={logoUrl}
                        alt={company}
                        className="mr-4 h-20 w-20 rounded-lg object-contain"
                    />
                    <div>
                        <h3 className="text-lg font-semibold text-white">
                            {position}
                        </h3>
                        <p className="text-md text-gray-200">{company}</p>
                        <p className="text-sm text-gray-300">{duration}</p>
                    </div>
                </div>

                {/* Responsibilities */}
                <ul className="ml-20 list-disc space-y-2 pl-6 text-justify">
                    {responsibilities.map((task, idx) => (
                        <li key={idx} className="text-gray-400">
                            {task}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default WorkExperience;

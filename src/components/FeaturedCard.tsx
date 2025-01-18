import React, { useState } from "react";
import { motion } from "framer-motion";

interface ImageTextPair {
    image: string;
    text: string;
}

interface CardProps {
    imageUrls: string[];
    title: string;
    description: string;
    technologies?: ImageTextPair[];
    className?: string;
    coverImage?: string;
    isShortenDescription?: boolean;
    isShowTech?: boolean;
}

const FeaturedCard: React.FC<CardProps> = ({
    imageUrls,
    title,
    description,
    technologies,
    className = "",
    coverImage,
    isShortenDescription,
    isShowTech,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isAccordionOpen, setIsAccordionOpen] = useState(true);

    const backdropVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    const goToNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    };

    const goToPrevImage = () => {
        setCurrentImageIndex(
            (prevIndex) =>
                (prevIndex - 1 + imageUrls.length) % imageUrls.length,
        );
    };

    const selectImage = (index: number) => {
        setCurrentImageIndex(index);
    };

    return (
        <>
            {/* Card */}
            <div
                className={`${className} relative h-auto w-full cursor-pointer overflow-hidden rounded-lg shadow-lg`}
                onClick={() => setIsOpen(true)}
            >
                {/* Image */}
                <motion.img
                    src={coverImage || imageUrls[currentImageIndex]}
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-opacity-50 bg-gradient-to-t from-gray-950 via-transparent"></div>

                {/* Hover Overlay */}
                <motion.div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white opacity-0 transition-opacity duration-300 hover:opacity-100">
                    <h2 className="text-lg font-bold">{title}</h2>
                    <p className="mt-2 px-4 text-center text-sm">
                        {isShortenDescription
                            ? `${description.slice(0, 100)}...`
                            : description}
                    </p>
                </motion.div>

                {/* Technology Thumbnails Overlay */}
                {technologies && isShowTech && (
                    <div className="absolute bottom-4 right-4 flex gap-2">
                        {technologies.slice(0, 3).map((tech, index) => (
                            <div
                                key={index}
                                className="group relative flex flex-col items-center"
                            >
                                {/* Tech Image */}
                                <img
                                    src={tech.image}
                                    alt={tech.text}
                                    className="h-10 rounded-md object-contain shadow-sm"
                                />
                                {/* Tooltip */}
                                <div className="absolute -top-9 left-1/2 w-max -translate-x-1/2 scale-0 rounded bg-gray-800 px-2 py-1 text-sm text-white opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                                    {tech.text}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Modal */}
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
                    variants={backdropVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    onClick={() => setIsOpen(false)}
                >
                    {/* Modal Content */}
                    <motion.div
                        className="relative grid h-[90vh] w-full max-w-6xl grid-cols-1 gap-4 overflow-hidden rounded-lg bg-white shadow-lg md:h-4/5 md:grid-cols-3"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            className="absolute right-4 top-4 text-3xl text-gray-600 hover:text-black"
                            onClick={() => setIsOpen(false)}
                        >
                            &times;
                        </button>

                        {/* Image Column (Responsive 70% on larger screens) */}
                        <div className="relative col-span-2 h-full md:h-full">
                            <motion.img
                                key={currentImageIndex}
                                src={imageUrls[currentImageIndex]}
                                alt={title}
                                className="h-full w-full object-contain"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                            />

                            {/* Carousel Controls */}
                            <div className="absolute left-0 right-0 top-1/2 flex justify-between px-4">
                                <button
                                    className="rounded-full bg-black bg-opacity-50 p-2 text-3xl font-bold text-white hover:bg-opacity-75"
                                    onClick={goToPrevImage}
                                >
                                    &lt;
                                </button>
                                <button
                                    className="rounded-full bg-black bg-opacity-50 p-2 text-3xl font-bold text-white hover:bg-opacity-75"
                                    onClick={goToNextImage}
                                >
                                    &gt;
                                </button>
                            </div>
                        </div>

                        {/* Text Column (Responsive 30% on larger screens) */}
                        <div className="col-span-1 flex h-full flex-col justify-start overflow-y-auto p-6 md:h-auto md:pt-14">
                            <h2 className="mb-4 text-2xl font-bold text-gray-900">
                                {title}
                            </h2>
                            <p className="mb-6 text-gray-700">{description}</p>

                            {/* Technologies Section */}
                            <div>
                                {technologies && (
                                    <h3 className="mb-2 text-lg font-medium text-gray-800">
                                        Technologies Used:
                                    </h3>
                                )}
                                <div className="flex flex-wrap gap-2">
                                    {technologies &&
                                        technologies.map((tech, index) => (
                                            <div
                                                key={index}
                                                className="group relative flex flex-col items-center"
                                            >
                                                {/* Tech Image */}
                                                <img
                                                    src={tech.image}
                                                    alt={tech.text}
                                                    className="h-12 w-12 object-contain"
                                                />
                                                {/* Tooltip */}
                                                <div className="absolute left-1/2 top-14 w-max -translate-x-1/2 scale-0 rounded bg-gray-800 px-2 py-1 text-sm text-white opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                                                    {tech.text}
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            </div>

                            {/* Accordion */}
                            <div className="mt-6">
                                <button
                                    className="flex w-full items-center justify-between rounded px-4 py-2 text-left text-lg font-medium text-gray-700 hover:bg-gray-200"
                                    onClick={() =>
                                        setIsAccordionOpen(!isAccordionOpen)
                                    }
                                >
                                    Gallery
                                    <span className="ml-2">
                                        {isAccordionOpen ? "-" : "+"}
                                    </span>
                                </button>

                                {isAccordionOpen && (
                                    <div className="mt-4 grid grid-cols-3 gap-2 px-4">
                                        {imageUrls.map((url, index) => (
                                            <div
                                                key={index}
                                                onClick={() =>
                                                    selectImage(index)
                                                }
                                                className={`cursor-pointer overflow-hidden rounded border ${
                                                    index === currentImageIndex
                                                        ? "border-blue-500"
                                                        : "border-gray-300"
                                                }`}
                                            >
                                                <img
                                                    src={url}
                                                    alt={`Thumbnail ${index + 1}`}
                                                    className="h-16 w-full object-cover"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </>
    );
};

export default FeaturedCard;

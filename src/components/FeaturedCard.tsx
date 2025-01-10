import React, { useState } from "react";
import { motion } from "framer-motion";

interface CardProps {
    imageUrls: string[]; // List of image URLs
    title: string;
    description: string;
    modalText: string;
    className?: string;
}

const FeaturedCard: React.FC<CardProps> = ({
    imageUrls,
    title,
    description,
    modalText,
    className = "",
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Backdrop Animation
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

    return (
        <>
            {/* Card */}
            <div
                className={`${className} relative h-auto w-full cursor-pointer overflow-hidden rounded-lg shadow-lg`}
                onClick={() => setIsOpen(true)}
            >
                {/* Image */}
                <motion.img
                    src={imageUrls[currentImageIndex]}
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />

                {/* Overlay */}
                <motion.div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white opacity-0 transition-opacity duration-300 hover:opacity-100">
                    <h2 className="text-lg font-bold">{title}</h2>
                    <p className="mt-2 px-4 text-center text-sm">
                        {description}
                    </p>
                </motion.div>
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
                    {/* Modal Content with Grid Layout */}
                    <motion.div
                        className="relative grid w-full max-w-6xl grid-cols-3 gap-4 overflow-hidden rounded-lg bg-white shadow-lg"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            className="absolute right-4 top-4 text-3xl text-gray-600 hover:text-black"
                            onClick={() => setIsOpen(false)}
                        >
                            &times;
                        </button>

                        {/* 70% Column (Image) */}
                        <div className="relative col-span-2 h-full">
                            <motion.img
                                key={currentImageIndex}
                                src={imageUrls[currentImageIndex]}
                                alt={title}
                                className="h-full w-full object-cover"
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

                        {/* 30% Column (Text) */}
                        <div className="col-span-1 flex flex-col justify-center p-6">
                            <h2 className="mb-4 text-2xl font-bold">{title}</h2>
                            <p className="text-gray-700">{modalText}</p>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </>
    );
};

export default FeaturedCard;

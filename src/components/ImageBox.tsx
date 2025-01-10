import React, { useState } from "react";
import { motion } from "framer-motion";

interface ImageBoxProps {
    src: string;
    alt: string;
    className?: string;
    y_offset?: number;
}

const ImageBox: React.FC<ImageBoxProps> = ({
    src,
    alt,
    className = "",
    y_offset = 0,
}) => {
    const [isOpen, setIsOpen] = useState(false);

    // Animation Variants
    const backdrop = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    const modal = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: { scale: 1, opacity: 1 },
    };

    return (
        <>
            {/* Thumbnail Container */}
            <div
                className="relative cursor-pointer"
                onClick={() => setIsOpen(true)}
            >
                {/* Image */}
                <img
                    src={src}
                    alt={alt}
                    className={`${className} object-cover shadow-lg transition hover:shadow-xl`}
                />

                {/* Overlay */}
                <motion.div
                    className={`${className} absolute inset-0 bg-black bg-opacity-30`}
                    initial={{ opacity: 0, y: `${y_offset}%` }}
                    whileHover={{ opacity: 1, y: `${y_offset}%` }}
                    transition={{ duration: 0.3, y: `${y_offset}%` }}
                />
            </div>

            {/* Dialog */}
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
                    variants={backdrop}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    onClick={() => setIsOpen(false)}
                >
                    <motion.div
                        className="relative w-full max-w-6xl overflow-hidden rounded-lg bg-white shadow-lg"
                        variants={modal}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            className="absolute right-2 top-2 -translate-y-2 transform text-6xl text-gray-600 hover:text-black"
                            onClick={() => setIsOpen(false)}
                        >
                            &times;
                        </button>

                        {/* Large Image */}
                        <motion.img
                            src={src}
                            alt={alt}
                            className="h-auto w-full object-contain"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.div>
                </motion.div>
            )}
        </>
    );
};

export default ImageBox;

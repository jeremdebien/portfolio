import { useState, useRef } from "react";
import Container from "./Container";
import { TfiComment } from "react-icons/tfi";
import { FiThumbsUp } from "react-icons/fi";

import profile_picture from "../assets/images/profile.jpg";
import like from "../assets/images/like.png";
import love from "../assets/images/love.png";
import care from "../assets/images/care.png";
import wow from "../assets/images/wow.png";
import haha from "../assets/images/haha.png";
import sad from "../assets/images/sad.png";
import angry from "../assets/images/angry.png";

interface PostProps {
    children: React.ReactNode;
    date: string;
    className?: string;
}

type ReactionType = "like" | "love" | "care" | "wow" | "haha" | "sad" | "angry";

const Post = ({ children, date, className = "" }: PostProps) => {
    const [showReactions, setShowReactions] = useState(false);
    const [selectedReaction, setSelectedReaction] =
        useState<ReactionType | null>(null);
    const hoverTimerRef = useRef<NodeJS.Timeout | null>(null);
    const hideTimerRef = useRef<NodeJS.Timeout | null>(null);

    const reactions: Record<ReactionType, { icon: string; text: string }> = {
        like: { icon: like, text: "Like" },
        love: { icon: love, text: "Love" },
        care: { icon: care, text: "Care" },
        wow: { icon: wow, text: "Wow" },
        haha: { icon: haha, text: "Haha" },
        sad: { icon: sad, text: "Sad" },
        angry: { icon: angry, text: "Angry" },
    };

    const reactionColors: Record<ReactionType, string> = {
        like: "text-blue-500",
        love: "text-red-500",
        care: "text-yellow-500",
        wow: "text-yellow-500",
        haha: "text-yellow-500",
        sad: "text-yellow-500",
        angry: "text-orange-500",
    };

    const handleMouseEnter = () => {
        if (hideTimerRef.current) {
            clearTimeout(hideTimerRef.current);
            hideTimerRef.current = null;
        }

        hoverTimerRef.current = setTimeout(() => {
            setShowReactions(true);
        }, 500);
    };

    const handleMouseLeave = () => {
        if (hoverTimerRef.current) {
            clearTimeout(hoverTimerRef.current);
            hoverTimerRef.current = null;
        }

        hideTimerRef.current = setTimeout(() => {
            setShowReactions(false);
        }, 800);
    };

    const handleReactionClick = (reaction: ReactionType) => {
        if (selectedReaction === reaction) {
            setSelectedReaction(null);
        } else {
            setSelectedReaction(reaction);
        }

        setShowReactions(false);
    };

    return (
        <Container className={`${className} mt-4`}>
            <div className="mb-4 flex items-center">
                <img
                    src={profile_picture}
                    alt="Profile Picture"
                    className="w-10 rounded-full"
                />
                <div className="ml-2">
                    <p className="font-bold">Jeremiah de Bien</p>
                    <p className="text-xs text-gray-400">{date}</p>
                </div>
            </div>
            {/* Content */}
            {children}

            {/* Likes & Comment Counts */}
            <div className="my-3 flex items-center text-gray-400 hover:underline">
                <img src={love} alt={love} className="h-6 w-6 object-contain" />
                <span>You and 10 more</span>
            </div>
            {/* Actions */}
            <div className="border-y border-gray-600">
                <ul className="grid grid-cols-2 py-1 text-center">
                    <li
                        className="relative flex items-center justify-center rounded-md py-1 hover:bg-gray-600"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => {
                            if (selectedReaction) {
                                setSelectedReaction(null);
                            } else {
                                setSelectedReaction("like");
                            }
                        }}
                    >
                        {/* Use the selected reaction or default to like */}
                        {selectedReaction ? (
                            <img
                                src={reactions[selectedReaction]?.icon}
                                alt={reactions[selectedReaction]?.text}
                                className="mr-2 h-6 w-6"
                            />
                        ) : (
                            <FiThumbsUp className="mr-2" />
                        )}
                        <span
                            className={`${selectedReaction ? reactionColors[selectedReaction] : "text-gray-400"}`}
                        >
                            {/* Use the selected reaction text or default to Like */}
                            {selectedReaction
                                ? reactions[selectedReaction]?.text
                                : "Like"}
                            {/* Reactions Menu */}
                            {showReactions && (
                                <div className="absolute bottom-full left-1/2 mb-2 flex -translate-x-1/2 transform rounded-full bg-gray-800">
                                    {Object.entries(reactions).map(
                                        ([key, { icon, text }]) => (
                                            <div
                                                key={key}
                                                onClick={(e) => {
                                                    e.stopPropagation(); // Prevent triggering the span's onClick
                                                    handleReactionClick(
                                                        key as ReactionType,
                                                    );
                                                }}
                                                className="w-10 cursor-pointer"
                                            >
                                                <img
                                                    src={icon}
                                                    alt={text}
                                                    className="h-10 w-10 object-contain"
                                                />
                                            </div>
                                        ),
                                    )}
                                </div>
                            )}
                        </span>
                    </li>
                    <li className="flex items-center justify-center rounded-md py-1 hover:bg-gray-600">
                        <TfiComment className="mr-2" /> Comment
                    </li>
                </ul>
            </div>
        </Container>
    );
};

export default Post;

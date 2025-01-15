import profile_picture from "../assets/images/profile.jpg";
import cover_photo from "../assets/images/cover.jpg";

import Navbar from "../components/Navbar";
import ImageBox from "../components/ImageBox";

interface HeaderProps {
    children: React.ReactNode;
    className?: string;
}

const Header = ({ children, className }: HeaderProps) => {
    return (
        <div className="min-h-screen bg-gray-900 text-gray-300">
            {/* Cover Photo */}
            <div className="bg-gray-800">
                {/* Cover Photo */}
                <div className="relative mx-auto max-w-screen-xl">
                    <ImageBox
                        src={cover_photo}
                        alt="Cover"
                        className="h-48 w-full rounded-bl-lg rounded-br-lg object-cover sm:h-96"
                    />
                    {/* Profile Picture */}
                    <ImageBox
                        src={profile_picture}
                        alt="Profile"
                        className="absolute bottom-0 left-1/2 h-48 w-48 -translate-x-1/2 translate-y-3/4 transform rounded-full border-4 border-gray-800 sm:left-8 sm:translate-x-0"
                        y_offset={-25}
                    />
                </div>

                {/* Profile Info and Navigation */}
                <div className="mx-auto mt-40 max-w-screen-xl px-8 sm:mt-24">
                    <div className="relative flex items-center justify-between sm:justify-end">
                        <div className="sm:absolute sm:left-52 sm:-translate-y-16 sm:transform">
                            <h1 className="text-3xl font-bold">
                                Jeremiah de Bien
                            </h1>
                            <p className="text-sm text-gray-400">929 friends</p>
                        </div>
                        <button className="ml-2 rounded-md bg-blue-600 px-4 py-2 font-medium hover:bg-blue-500">
                            Message
                        </button>
                    </div>

                    <hr className="mt-6 border-t border-gray-700" />

                    <Navbar />
                </div>
            </div>

            {/* Profile Photo */}

            {/* Main Content */}
            <div
                className={`${className} mx-auto mb-8 mt-6 grid max-w-screen-xl`}
            >
                {children}
            </div>
        </div>
    );
};

export default Header;

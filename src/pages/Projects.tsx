import ImageBox from "../components/ImageBox";

import profile_picture from "../assets/images/profile.jpg";
import Navbar from "../components/Navbar";

const Projects = () => {
    return (
        <>
            <div className="min-h-screen bg-gray-900 text-gray-300">
                {/* Cover Photo */}
                <div className="bg-gray-800">
                    {/* Cover Photo */}
                    <div className="relative mx-auto max-w-screen-xl">
                        <ImageBox
                            src="https://scontent.fmnl17-6.fna.fbcdn.net/v/t39.30808-6/277101168_5161424857255454_1514321299478499819_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=109&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=XKOWYZW3AoIQ7kNvgGil4MP&_nc_oc=AdjlGDe8D6PNl1WirCK5oQNpxDD-HXnzjYxeLdKyQvq_ylsDOdfv-b0AQAlT9V6k7P8&_nc_zt=23&_nc_ht=scontent.fmnl17-6.fna&_nc_gid=AZ0ljDAgudmIIR_fxokODbL&oh=00_AYD1SRDxk9Io07Dss4ukWc3ETRP_hL1hrCybrvWLgXnRBw&oe=6784F5FF"
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
                                <p className="text-sm text-gray-400">
                                    929 friends
                                </p>
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
                <div className="mx-auto mt-6 grid max-w-screen-xl grid-cols-1 gap-6 px-8 md:grid-cols-5">
                    <h1>Projects</h1>
                </div>
            </div>
        </>
    );
};

export default Projects;

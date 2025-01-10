import profile_picture from "../assets/images/profile.jpg";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import {
    FaEnvelope,
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaLinkedin,
} from "react-icons/fa";

const Home = () => {
    return (
        <>
            <div className="min-h-screen bg-gray-900 text-gray-300">
                {/* Cover Photo */}
                <div className="bg-gray-800">
                    {/* Cover Photo */}
                    <div className="relative mx-auto max-w-screen-xl">
                        <img
                            src="https://scontent.fmnl17-6.fna.fbcdn.net/v/t39.30808-6/277101168_5161424857255454_1514321299478499819_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=109&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=XKOWYZW3AoIQ7kNvgGil4MP&_nc_oc=AdjlGDe8D6PNl1WirCK5oQNpxDD-HXnzjYxeLdKyQvq_ylsDOdfv-b0AQAlT9V6k7P8&_nc_zt=23&_nc_ht=scontent.fmnl17-6.fna&_nc_gid=AZ0ljDAgudmIIR_fxokODbL&oh=00_AYD1SRDxk9Io07Dss4ukWc3ETRP_hL1hrCybrvWLgXnRBw&oe=6784F5FF"
                            alt="Cover"
                            className="h-48 w-full rounded-bl-lg rounded-br-lg object-cover sm:h-96"
                        />
                        {/* Profile Picture */}
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-3/4 transform sm:left-8 sm:translate-x-0">
                            <img
                                src={profile_picture}
                                alt="Profile"
                                className="h-w-48 w-48 rounded-full border-4 border-gray-800"
                            />
                        </div>
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
                            <button className="rounded-md bg-blue-600 px-4 py-2 font-medium hover:bg-blue-500">
                                Add Friend
                            </button>
                        </div>

                        <hr className="mt-6 border-t border-gray-700" />
                        <Navbar />
                    </div>
                </div>

                {/* Profile Photo */}

                {/* Main Content */}
                <div className="mx-auto mt-6 grid max-w-screen-xl grid-cols-1 gap-6 px-8 md:grid-cols-3">
                    {/* Left Column (Intro Section) */}
                    <div className="md:col-span-1">
                        <Container>
                            <h2 className="mb-3 text-lg font-bold">Intro</h2>
                            <ul className="space-y-3">
                                <li className="flex items-center space-x-2">
                                    <FaEnvelope className="mr-2" />
                                    <a href="mailto:jeremiahdebien@gmail.com">
                                        jeremiahdebien@gmail.com
                                    </a>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <FaPhoneAlt className="mr-2" />
                                    <a href="tel:+639760116080">
                                        +(63) 976 011 6080
                                    </a>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <FaMapMarkerAlt className="mr-4" />
                                    San Jose City, Nueva Ecija
                                </li>
                                <li className="flex items-center space-x-2">
                                    <FaLinkedin className="mr-2" />
                                    <a
                                        href="https://www.linkedin.com/in/jeremiah-de-bien/"
                                        className="underline"
                                    >
                                        Jeremiah de Bien
                                    </a>
                                </li>
                            </ul>
                        </Container>
                        {/* Projects */}
                        <Container className="mt-4">
                            <h2 className="mb-3 text-lg font-bold">Projects</h2>
                            <div className="grid grid-cols-3 gap-2">
                                <img
                                    src="https://via.placeholder.com/80"
                                    alt="Photo 1"
                                    className="h-20 w-full rounded object-cover"
                                />
                                <img
                                    src="https://via.placeholder.com/80"
                                    alt="Photo 2"
                                    className="h-20 w-full rounded object-cover"
                                />
                                <img
                                    src="https://via.placeholder.com/80"
                                    alt="Photo 3"
                                    className="h-20 w-full rounded object-cover"
                                />
                            </div>
                        </Container>
                        <Container className="mt-4">
                            <h2 className="mb-3 text-lg font-bold">Photos</h2>
                            <div className="grid grid-cols-3 gap-2">
                                <img
                                    src="https://via.placeholder.com/80"
                                    alt="Photo 1"
                                    className="h-20 w-full rounded object-cover"
                                />
                                <img
                                    src="https://via.placeholder.com/80"
                                    alt="Photo 2"
                                    className="h-20 w-full rounded object-cover"
                                />
                                <img
                                    src="https://via.placeholder.com/80"
                                    alt="Photo 3"
                                    className="h-20 w-full rounded object-cover"
                                />
                            </div>
                        </Container>
                    </div>

                    {/* Main Column (Posts Section) */}
                    <div className="md:col-span-2">
                        {/* <Container>
                            <h2 className="mb-3 text-lg font-bold">Posts</h2>
                            <div className="space-y-4">
                                <div className="rounded-lg bg-gray-700 p-4">
                                    <h3 className="font-semibold">
                                        ACER PREDATOR HELIOS 300 (144Hz)
                                    </h3>
                                    <p className="text-sm text-gray-400">
                                        December 5, 2024
                                    </p>
                                    <p className="mt-2">PHP41,999.00</p>
                                </div>
                                <div className="rounded-lg bg-gray-700 p-4">
                                    <h3 className="font-semibold">
                                        Family Outing Photos
                                    </h3>
                                    <p className="text-sm text-gray-400">
                                        September 29, 2024
                                    </p>
                                </div>
                            </div>
                        </Container> */}
                        <Container>Post</Container>
                        <Container className="mt-4">Hello</Container>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;

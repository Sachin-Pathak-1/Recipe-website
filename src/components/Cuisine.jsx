import { Globe } from "lucide-react";
import { Link } from "react-router-dom";


export function Cuisine() {

    const featuredAreas = [
        "United States",
        "British",
        "India",
        "Canada",
        "China",
        "Italy",
        "Mexican",
        "Russian",
        "Thai"
    ]
    const filterType = "a";

    return (
        <>
            <div className="sticky top-16 z-10 backdrop-blur-2xl bg-gray-900/80 border-b border-y-gray-800 shadow-inner shadow-black/20 max-w-8xl mx-auto px-4 lg:px-8 overflow-x-auto scrollbar-hide flex">
                <div className="flex text-center items-center text-sm sm:text-lg font-bold text-yellow-400 pr-3 whitespace-nowrap p-2">
                    <Globe className="mr-2 sm:mr-3 w-5 h-5 sm:w-6 sm:h-6 shrink-0" />Global Cuisines :
                </div>
                <div className="flex py-3 ">
                    {featuredAreas.map((country, i) =>
                                <Link to={`/select/${filterType}/${country}`}
                                    key={i}
                                    className="mx-2 flex text-center items-center cursor-pointer text-gray-200 text-sm whitespace-nowrap font-medium hover:text-white transition duration-200 py-1 px-4 rounded-full bg-gray-800 border-gray-700 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-800/50">
                                    {country}
                                </Link>
                    )}
                                <Link 
                                    to={`select/country`}
                                    className="bg-yellow-400 font-semibold rounded-xl py-1 px-4 text-black ml-3 flex text-center items-center whitespace-nowrap">
                                    See More...
                                </Link>
                </div>
            </div>
        </>
    );
}

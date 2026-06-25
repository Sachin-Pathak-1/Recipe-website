import { UtensilsCrossed } from "lucide-react";
import { Link } from "react-router-dom";
import { API_URL, useFetch } from "./useFetch";

export function CountrySelector() {
    const filterType = "a";
    const { data, loading, error } = useFetch(`${API_URL}list.php?a=list`);
    const countries = data?.meals;


    return (
        <section className="px-4 sm:px-6 lg:px-8 pb-8">
            <h2 className="sticky top-28 sm:top-30 min-h-16 backdrop-blur-2xl bg-gray-900/80 border-b border-y-gray-800 shadow-inner shadow-black/20 text-2xl sm:text-3xl font-extrabold text-gray-100 mb-6 tracking-tight border-l-4 border-yellow-400 pl-4 py-3 flex items-center">
                <UtensilsCrossed className="w-6 h-6 mr-3 text-blue-500 shrink-0" />
                Quick Filter By Country Names
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
                {countries?.map((cntry, i) =>
                    <Link to={`/select/${filterType}/${cntry.strCountry}`}
                        key={i}
                        className="cursor-pointer text-gray-200 text-sm sm:text-lg font-medium hover:text-white transition duration-200 rounded-md bg-gray-800 border-gray-700 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-800/50 text-center px-2 py-3 sm:py-4 break-words"
                    >
                        {cntry.strCountry}
                    </Link>
                )}
            </div>
        </section>
    )
}

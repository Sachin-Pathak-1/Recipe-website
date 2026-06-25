import { Link, useParams } from "react-router-dom";
import { useFetch, API_URL } from "./useFetch";
import { ChevronLeft, Loader } from "lucide-react";
import { RecipeCard } from "./RecipeCard";

export function SelectionView() {

    const { filterType, valueType } = useParams();
    const { data, loading, error } = useFetch(`${API_URL}filter.php?${filterType}=${valueType}`);

    const meals = data?.meals;

    // console.log(meals);
    { error && <div className="text-center py-8 text-red-400">Error: {error}</div> }



    return (
        <>
            {
                loading && <div className="text-center py-8 text-gray-400">
                    <Loader className="animate-spin inline-block mr-2 text-blue-400" />
                    Searching for recipes related to {valueType}
                </div>
            }
            {
                !loading && (<Link to={'/'} className="text-yellow-400 hover:text-yellow-300 flex items-center mx-4 sm:ml-8 my-4 font-medium transition text-lg group">
                    <ChevronLeft className="w-6 h-6 mr-1 transition group" />
                    Back to dashboard
                </Link>)
            }
            {!loading && meals &&
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-8 lg:gap-12 px-4 sm:px-6 lg:px-10 pb-10">
                    {meals.map((meal,i)=> 
                        <RecipeCard key={i} meal={meal}/>
                    )}
                </div>
            }
            {!loading && !meals &&
                <div className="text-center m-auto text-gray-400">
                    No recipes found related to"{valueType}"
                </div>
            }
        </>
    );
}

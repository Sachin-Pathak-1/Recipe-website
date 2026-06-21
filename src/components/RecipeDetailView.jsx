import { useParams, Link } from "react-router-dom";
import { useFetch, API_URL } from "./useFetch";
import { Loader, ChevronLeft, Utensils, BookOpen } from "lucide-react";

export function RecipeDetailView() {

    const { id } = useParams();
    const { data, loading, error } = useFetch(`${API_URL}lookup.php?i=${id}`);


    { error && <div className="text-center py-8 text-red-400">Error: {error}</div> }

    // console.log(data?.meals[0]);

    const meal = (data?.meals[0]);
    // console.log(meal)

    const ingredients = Array.from({ length: 20 }, (_, i) => {
        const n = i + 1;

        const ingredient = meal?.[`strIngredient${n}`]?.trim();
        const measure = meal?.[`strMeasure${n}`]?.trim();

        return ingredient ? { ingredient, measure: measure || "" } : null;
    }).filter(Boolean);

    const instructions = meal?.strInstructions.split(/\r?\n?\r?\./)?.slice(0,-1);
    // const desc = instructions?.[0];
    // const steps = instructions?.slice(1);
    console.log(instructions)

    return (
        <>
            {
                loading && <div className="text-center py-8 text-gray-400">
                    <Loader className="animate-spin inline-block mr-2 text-blue-400" />
                    Loading recipe details...
                </div>
            }
            <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                {
                    !loading && <Link to={'/'} className="text-yellow-400 hover:text-yellow-300 flex items-center mb-4 font-medium transition text-lg group">
                        <ChevronLeft className="w-6 h-6 mr-1 transition group" />
                        Back to dashboard
                    </Link>
                }
                {!loading && <div className="bg-gray-900 p-6 md:p-12 rounded-3xl shadow-2xl shadow-black/70 border border-gray-800">
                    <div className="lg:flex lg:space-x-12 ">
                        <div className="lg:w-1/2 mb-8 lg:mb-0 flex flex-col items-center gap-2">
                            <h1 className="text-2xl font-black text-gray-100 leading-tight">{meal?.strMeal.toUpperCase()}</h1>
                            <img src={meal?.strMealThumb} alt="meal-image" className="w-100 rounded-xl shadow-2xl shadow-black/50  object-cover border-4 border-gray-800 ring-2 ring-blue-500/50 my-5" />
                            {/* <p>{desc}</p> */}
                        </div>
                        <div className="lg:w-1/2 bg-gray-800 rounded-xl shadow-inner shadow-black/30 border border-gray-700 ">
                            <h2 className="m-auto w-[90%] text-3xl font-bold text-yellow-400 mb-6 flex items-center border-b border-gray-700 py-5">
                                <Utensils className="w-7 h-7 mr-3 text-blue-500 " />
                                Key Ingredients
                            </h2>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 list-none p-0 w-[90%] mx-auto">
                                {ingredients.map((item, i) =>
                                    <li
                                        key={i}
                                        className="flex items-start text-gray-300 text-base ">
                                        <span className="text-blue-400 text-lg font-extrabold mr-2 ml-2 shrink-0">{"›"}</span>
                                        <span className="font-semibold text-white mr-1">{item.measure}</span>
                                        <span>{item.ingredient.charAt(0).toUpperCase() + item.ingredient.slice(1)}</span>
                                    </li>
                                )}
                            </ul>
                            <div className="mt-8 pt-4 border-t border-gray-700 w-[90%] mx-auto">
                                <div className="text-lg text-gray-400 space-x-3 pb-6 flex flex-wrap gap-y-2">
                                    <span className="bg-blue-600 text-white space-x-3 ml-3 px-4 py-1.5 rounded-full font-semibold text-sm shadow-md">
                                        {meal?.strCategory}
                                    </span>
                                    <span className="bg-green-600 text-white space-x-3 ml-3 px-4 py-1.5 rounded-full font-semibold text-sm shadow-md">
                                        {meal?.strArea}
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="mt-14 pt-8 border-t border-gray-800 ">
                        <h2 className="text-3xl font-bold text-gray-100 flex items-center">
                            <BookOpen className="w-7 h-7 m-3 text-blue-500" />
                            Detailed Preparation Steps
                        </h2>
                        <ol className="space-y-6 mt-10 list-none text-gray-300 ">
                            {instructions?.map((step, i) =>
                                <li
                                    key={i}
                                    className="text-lg leading-relaxed bg-gray-800 px-5 py-3 rounded-xl border-l-6 border-blue-500 shadow-lg shadow-black-30 transition duration-300 hover:bg-gray-700/50  "
                                >
                                    <span className="font-extrabold text-yellow-400 mr-1 text-xl">{i + 1 + "."} </span>
                                    {step.trim()}
                                </li>
                            )}
                        </ol>
                    </div>
                </div>}
            </main>

        </>
    );
}
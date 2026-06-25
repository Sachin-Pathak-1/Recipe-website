import { Link } from "react-router-dom";

export const RecipeCard = ({ meal }) => {
    return (
        <Link to={`/recipe/${meal.idMeal}`} className="block w-full">
            <div className='group relative w-full bg-gray-900 rounded-xl shadow-black/50 overflow-hidden transform transition duration-500 cursor-pointer border border-gray-800 hover:shadow-blue-600/50'>
                <div className='absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-blue-500/80 transition duration-500'>
                </div>
                <div className='flex justify-center items-center p-5'>
                    <img src={meal?.strMealThumb} alt="img" className='aspect-square w-full max-w-60 rounded-xl border-yellow-400 border object-cover transition duration-500 group-hover:scale-105' />
                </div>
                <div className="p-2 text-center">
                    <h1 className="text-lg sm:text-xl pb-3 font-bold text-gray-100 group-hover:text-blue-400 transition duration-300 break-words">{meal?.strMeal}</h1>
                </div>
            </div>
        </Link>
    )
}

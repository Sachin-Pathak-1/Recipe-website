import { Link } from "react-router-dom";

export const RecipeCardMini = ({ meal }) => {
    return (
        <Link to={`/recipe/${meal.idMeal}`} className="block">
            <div key={meal.idMeal} className="px-2 sm:px-6 lg:px-10 flex justify-center">
                <div className='group relative bg-gray-900 rounded-xl shadow-black/50 overflow-hidden transform transition duration-500 cursor-pointer border border-gray-800 hover:shadow-blue-600/50 mb-5'>
                    <div className='absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-blue-500/80 transition duration-500'>
                    </div>
                    <div className='flex justify-center items-center p-5'>
                        <img src={meal?.strMealThumb} alt="img" className='aspect-square w-28 sm:w-30 rounded-xl border-yellow-400 border object-cover transition duration-500 group-hover:scale-105' />
                    </div>
                </div>
            </div>
        </Link>
    )
}

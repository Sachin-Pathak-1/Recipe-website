import { UtensilsCrossed } from "lucide-react"
import { Link } from "react-router-dom"

export const CategorySelection = () => {

  const featuredCategories = [
    "Vegetarian",
    "Dessert",
    "Chicken",
    "Seafood",
    "Breakfast",
    "Pasta",
    "Goat",
    "Pork",
    "Lamb",
  ]

  const filterType = "c";

  return (
    <section className="mt-4">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-100 mb-6 tracking-tight border-l-4 border-yellow-400 pl-4 flex items-center">
        <UtensilsCrossed className="w-6 h-6 mr-3 text-blue-500 shrink-0" />
        Quick Filter By Primary Ingredient
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-10 gap-3 sm:gap-4">
          {featuredCategories.map((cat,i)=> 
            <Link 
              to={`select/${filterType}/${cat}`}
              key={i}
              className="cursor-pointer text-gray-200 text-sm sm:text-base lg:text-lg font-medium hover:text-white transition duration-200 rounded-full bg-gray-800 border-gray-700 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-800/50 text-center px-2 py-3 sm:py-4 break-words"
              >
              {cat}
            </Link>
          )}
      </div>
    </section>
  )
}

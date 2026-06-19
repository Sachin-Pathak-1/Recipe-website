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
    <section>
      <h2 className="text-3xl font-extrabold text-gray-100 mb-6 tracking-tight border-l-4 border-yellow-400 pl-4 flex items-center">
        <UtensilsCrossed className="w-6 h-6 mr-3 text-blue-500" />
        Quick Filter By Primary Ingredient
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-10 gap-4">
          {featuredCategories.map((cat,i)=> 
            <Link 
              to={`select/${filterType}/${cat}`}
              key={i}
              className="mx-2 cursor-pointer text-gray-200 text-lg whitespace-nowrap font-medium hover:text-white transition duration-200 rounded-full bg-gray-800 border-gray-700 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-800/50 text-center py-4"
              >
              {cat}
            </Link>
          )}
      </div>
    </section>
  )
}

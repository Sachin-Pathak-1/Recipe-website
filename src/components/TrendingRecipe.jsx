import SlickSlider from "react-slick";
import { useFetch } from "./useFetch";
import { Clock, Loader } from "lucide-react";
import { RecipeCardMini } from "./RecipeCardMini";

const Slider = SlickSlider.default || SlickSlider;

export function TrendingRecipe({ title, fetchUrl }) {
    const { data, loading, error } = useFetch(fetchUrl);

    const meals = data?.meals || [];

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 600,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: -10,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: false,
        pauseOnDotsHover: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 1 }
            }
        ]
    };

    return (
        <section className="mt-2 mx-auto overflow-hidden">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-100 mb-6 tracking-tight border-l-4 border-yellow-400 pl-4 flex items-center">
                <Clock className="w-6 h-6 mr-3 text-blue-500 shrink-0" />
                {title}
            </h2>

            {loading && <div className="text-center py-8 text-gray-400">
                <Loader className="animate-spin inline-block mr-2 text-blue-400" />
                Loading {title}...
            </div>
            }
            {error && <div className="text-center py-8 text-red-400">Error: {error}</div>}

            {!loading && !error && meals.length > 0 && (
                <div className="w-full sm:w-11/12 mx-auto py-2.5">
                    <Slider {...settings}>
                        {meals.map((meal) => (
                            <RecipeCardMini key={meal.idMeal} meal={meal}/>
                        ))}
                    </Slider>
                </div>
            )}
        </section>
    );
}

import { useEffect } from "react";
import "./App.css";
import useAxios from "./hooks/useAxios";

function App() {

  const {fetchData, response}  = useAxios();
  const {strYoutube} = response;

  const youtubeUrl = strYoutube?.replace('watch?v=', 'embed/')
  useEffect(() => {
    fetchData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let ingredients = [];
    Object.keys(response).forEach((item, index) => {
      if(response[`strIngredient${index}`]){
        ingredients.push({
          "ingredients" : response[`strIngredient${index}`],
          "measure" : response[`strMeasure${index}`]
        })
      }
    })


  return (
    <div className="bg-slate-800">
      <div className="container mx-auto pt-10">
        <div className="text-center space-y-5 pb-8">
          <p className="text-3xl text-white">Generate a random meal!</p>
          <button
            className="inline-block p-[2px] rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:text-white active:text-opacity-75 focus:outline-none focus:ring"
            onClick={() => window.location.reload(false)}
          >
            <span className="block px-8 py-3 text-sm font-medium bg-white rounded-full hover:bg-transparent">
              Get New Meal!
            </span>
          </button>
        </div>
        <aside className="overflow-hidden bg-gray-900 sm:grid sm:grid-cols-2">
  <div className="p-8 md:p-12 lg:px-16 lg:py-24">
    <div className="max-w-xl mx-auto text-center sm:text-left">
      <h2 className="text-2xl font-bold text-white md:text-3xl">
      {response.strMeal}
      </h2>


      <ul className="list-disc text-gray-300 md:mt-4">
  {ingredients.map((xl) => (
    <li key={xl.ingredients} className="text-white">{xl.ingredients} <span>-</span> {xl.measure}</li>
  ))}
</ul>


      <div className="mt-4 md:mt-8">
      </div>
    </div>
  </div>

  <img
    alt="#"
    src={response.strMealThumb}
    className="object-cover w-full h-56 sm:h-full"
  />
</aside>
<div className="bg-gray-900 container px-12">
<h2 className="text-xl font-bold text-white md:text-3xl ">
      Instructions
      </h2>
 <p className="text-white text-xl py-4">
{response.strInstructions}
 </p>
</div>

<div className="pt-10">
<iframe className="w-full aspect-video" src={youtubeUrl} title={response.strMeal} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
</div>
      </div>
    </div>
  );
}

export default App;

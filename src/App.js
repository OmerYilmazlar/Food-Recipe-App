import "./App.css";
import React, { useEffect, useState } from "react";
import Recipe from "./Recipes.js";

const App = () => {
  
  const App_Id = "..."; //Your EDAMAME API ID
  const App_Key = "..."; //Your EDAMAME API key

  const [Recipes, setRecipes] = useState([]);
  const [Search, setSearch] = useState('asian');
  const [lookup, setLookup] = useState('');

  useEffect(() => {
    fetchRecipes();
  }, [lookup]);

  const fetchRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${lookup}&app_id=${App_Id}&app_key=${App_Key}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  const newSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setLookup(Search);
    setSearch('');
  }

  return (
    <div>
      <div className='recipes'>
      <form className="search-form" onSubmit={getSearch}>
        <input type="text" className="search-bar" value={Search} onChange={newSearch} />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      {Recipes.map((recipe) => (
        <Recipe
          name={recipe.recipe.label}
          calorie={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
      ))}
      </div>
    </div>
  );
};

export default App;

import './App.css';
import React, { useEffect, useState } from 'react';
import Recipe from './Components/Recipe';

const App = () => {
  const APP_ID = 'e1960397';
  const APP_KEY = '02368475fb2c00184388a8e48adf9670';
  // console.log(APP_ID);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    GetRecipes();
  }, []);

  const GetRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  return (
    <div className='App'>
      <form className='search-form'>
        <input className='search-bar' type='text' />
        <button className='search-button' type='submit'>
          Search
        </button>
      </form>
      {recipes.map((recipe) => (
        <Recipe
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
        />
      ))}
    </div>
  );
};

export default App;

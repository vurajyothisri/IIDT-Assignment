import React, { useState } from 'react';
import '../App.css'
const RecipeSearch = () => {
  const [recipeName, setRecipeName] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setRecipeName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://api.edamam.com/search?q=${recipeName}&app_id=8267a834&app_key=
        5e117dde1e923ebfc6ce5417079b6be7	
        `
      );
      if (!response.ok) {
        throw new Error('Failed to fetch recipes');
      }
      const data = await response.json();
      if (data.hits.length === 0) {
        throw new Error('No recipes found');
      }
      setRecipes(data.hits.map(hit => hit.recipe));
      setError(null);
    } catch (error) {
      console.error('Error:', error);
      setRecipes([]);
      setError('Failed to fetch recipe details. Please try again later.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter recipe name"
          value={recipeName}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
      {error && <p>{error}</p>}
      {recipes.length > 0 && (
        <div className='Recipe_Container'>
          {recipes.map(recipe => (
            <div key={recipe.uri} className='Recipe_Content'>
            <div>
              <h2>{recipe.label}</h2>
              <img src={recipe.image} alt={recipe.label}/>
            </div>
            <div>
              <h3>Ingredients:</h3>
              <ul>
                {recipe.ingredientLines.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
              <h3>Preparation:</h3>
              <p>
                For full preparation details, visit{' '}
                <a href={recipe.url} target="_blank" rel="noopener noreferrer">
                  {recipe.source}
                </a>
              </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecipeSearch;

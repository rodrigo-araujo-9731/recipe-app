import React from 'react';
import style from './recipe.module.css';

export default function Recipe({ title, calories, image, ingredients }) {
  return (
    <div className={style.recipe}>
      <img className={style.image} src={image} alt='' />
      <h1>{title}</h1>
      {/* <ul>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ul> */}
      <p>Calories: {calories}</p>
    </div>
  );
}

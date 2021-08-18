import React from "react";
import style from "./Recipes.module.css";

const Recipe = ({ name, calorie, image, ingredients }) => {
  return (
    <div className={style.Recipe}>
      <h1>{name}</h1>
      <ol>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p> <strong>calories:</strong> {calorie}</p>
      <img className={style.image} src={image} alt=""></img>
    </div>
  );
};

export default Recipe;

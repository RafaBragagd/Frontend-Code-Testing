import './IngredientList.css';
import React from 'react';

function IngredientList(props) {
    //criar a lista de itens usando map
    const ingredientListItems = props.ingredients.map((ingredient, index) => {
        return (
            //Retorna o html desejado para cada ingrediente
            <li key={index} className={ ingredient.prepared ? 'prepared' : '' }>
                { ingredient.name }
            </li>
        );
    });

    //Retorna o HTML para o componente
    //ingredientListItems sera renderizado em elementos <li>

    return (
        <ul>
            { ingredientListItems }
        </ul>
    );
}

export default IngredientList;
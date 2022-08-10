import './IngredientList.css';
import React from 'react';

function preparationRecipe(props) {
    //Cria a lista de passos para o preparo da receita
    const preparationSteps = props.preparation.map((step, index) =>{
        return (
            //Retorna o html desejado para cada passo da receita
            <li key={index} className={ step.prepared ? 'prepared' : '' }>
                { step.name }
            </li>
        );
    });

    //Retorna o HTML para o componente
    //preparationSteps sera renderizado em elementos <li>
    return (
        <ol>
            { preparationSteps }
        </ol>
    );
}

export default preparationRecipe;
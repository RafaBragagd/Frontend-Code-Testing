import './index.css'
import React from 'react';
// TODO: Import RecipeTitle
import RecipeTitle from './RecipeTitle';

// TODO: Import IngredientList
import IngredientList from './IngredientList';

// TODO: Import PreparationRecipe
import PreparationRecipe from './PreparationRecipe';

const recipe = {
    title: 'Purê de batatas',
    feedback: {
        rating: 4.8,
        reviews: 20
    },
    ingredients: [
        { name: '3 batatas, cortadas ao meio', prepared: true },
        { name: '4 colheres de sopa de manteiga', prepared: false },
        { name: '1/8 de xicara de creme de leite', prepared: false },
        { name: 'Sal', prepared: true },
        { name: 'Pimenta', prepared: true },
    ],
    preparation: [
        { name: 'Adicione as batatas cortadas a uma panela com água e sal.', prepared: true },
        { name: 'Leve a panela para ferver.', prepared: true },
        { name: 'Coe as batatas.', prepared: false },
        { name: 'Coloque-as novamente na panela.', prepared: false },
        { name: 'Adicione a manteiga, o creme de leite, o sal e a pimenta a gosto.', prepared: false },
        { name: 'Amasse as batatas.', prepared: false },
        { name: 'Tempere novamente e adicione a manteiga e o creme de elite conforme desejado.', prepared: false },
    ],
};


function App() {
    // TODO: Add recipe object

    return (
        <article>
            <h1>Gerenciador de Receita</h1>
            {/* TODO: Add RecipeTitle component */}
            <RecipeTitle title = { recipe.title } feedback={ recipe.feedback } />
            {/* TODO: Add IngredientList component */}
            <IngredientList ingredients={recipe.ingredients} />
            {/* TODO: Add PreparationRecipe component */}
            <PreparationRecipe preparation={recipe.preparation} />
        </article>
    )
}

export default App;

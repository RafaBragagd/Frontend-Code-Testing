import React from 'react';
import './RecipeTitle.css';

// TODO: Create RecipeTitle component
function RecipeTitle(props) {
    return (
        <section>
            <h2>{ props.title }</h2>
            <h3 className={ props.feedback.rating <= 3.5 ? 'red' : 'green' }>
                { props.feedback.rating } de { props.feedback.reviews } críticas
            </h3>
        </section>
    )
};

export default RecipeTitle;
let recipeName = prompt("What is the name of your recipe")
let numIngredients = Number(prompt("How many ingredients does your recipe have?"))
ingredients = []
let Heading1 = document.getElementById("heading1")
let List = document.getElementById("list");

function customRecipe() {
        for (let i = 0; i < numIngredients; i++) {
    let ingredientFromPrompt = prompt("Enter ingredient " + (i + 1));
    ingredients.push(ingredientFromPrompt);
}

    for (let ingredient of ingredients) {
        List.innerHTML += `<li>${ingredient}</li>`;
    }
Heading1.textContent = recipeName;

}
customRecipe();

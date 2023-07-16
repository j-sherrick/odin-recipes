const main =  document.querySelector('.content');
let recipe, card, img = {};

for (el of recipes)
{
     // Get the next recipe object
    recipe = el.recipe;

    // Create recipe card
    card = document.createElement('div');
    card.classList.add('recipe-card');
    card.innerHTML = `<h3>${recipe.label}</h3>`;

    // Create and add recipe image element
    img = document.createElement('img');
    img.src = recipe.images.REGULAR.url; // TODO: split URL into tokens for GET header
    card.appendChild(img);
    
    // Set recipe title
    
    // Add card
    main.appendChild(card);
}

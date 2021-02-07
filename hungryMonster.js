const searchSongs = () => {
    const searchText = document.getElementById('search-field').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=b`
        // load data
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals));
}

const displayMeals = mealItemMatched => {
    const mealContainer = document.getElementById('meals');
    mealContainer.innerHTML = '';
    mealItemMatched.forEach(meal => {
        const mealDiv = document.createElement('div');

        mealDiv.innerHTML = `
        <div >
        <img class="img-style" src=" ${meal.strMealThumb} "></img>
        <br>
        <h5 class="meal-name"> ${meal.strMeal}</h5>
        </div>
        `;

        mealContainer.appendChild(mealDiv);
    })
}








fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
    .then(res => res.json())
    .then(data => mealItems(data));


const mealItems = diffMeals => {
    const div = document.getElementById("meals");
    const items = diffMeals.meals;
    items.forEach(mealItem => {
        const newDiv = document.createElement("div");
        newDiv.className = "mealsDiv";

        const mealMenu = `
        <div onclick="mealDetail('${mealItem.strMeal}')">
            <img class="img-style" src=" ${mealItem.strMealThumb} "></img>
            <br>
            <h5 class="meal-name"> ${mealItem.strMeal}</h5>
            </div>
            `;
        newDiv.innerHTML = mealMenu;
        div.appendChild(newDiv);

    });
}



const mealDetail = name => {

    fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
        .then(res => res.json())
        .then(data => mealsIngredients(data));

    const mealsIngredients = diffMeals => {
        const ingredient = document.getElementById("ingredients");
        const ingredientItems = diffMeals.meals;


        const ingredList = `
                 <li> ${ingredientItems.strMeasure1}  ${ingredientItems.strIngredient1} </li>
                 <li> ${ingredientItems.strMeasure2}  ${ingredientItems.strIngredient2} </li>
                 <li> ${ingredientItems.strMeasure3}  ${ingredientItems.strIngredient3} </li>
                 <li> ${ingredientItems.strMeasure4}  ${ingredientItems.strIngredient4} </li>
                 <li> ${ingredientItems.strMeasure5}  ${ingredientItems.strIngredient5} </li>
                 <li> ${ingredientItems.strMeasure6}  ${ingredientItems.strIngredient6} </li>
                 `
        ingredient.innerHTML = ingredList;




    }
}
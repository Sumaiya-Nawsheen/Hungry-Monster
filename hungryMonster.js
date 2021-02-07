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
        <div  onclick="mealDetail('${meal.strMeal}')">
        <img class="img-style" src=" ${meal.strMealThumb} "></img>
        <br>
        <h5 class="meal-name"> ${meal.strMeal}</h5>
        </div>
        `;

        mealContainer.appendChild(mealDiv);
    })
}


const mealDetail = name => {

    fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
        .then(res => res.json())
        .then(data => displayIngredients(data.meals));
}
const displayIngredients = mealIngred => {
    const mealContainer = document.getElementById('ingredients');

    mealIngred.forEach(mealItem => {
        mealContainer.innerHTML = `
                 <li> ${mealItem.strMeasure1}  ${mealItem.strIngredient1} </li>
                  <li> ${mealItem.strMeasure2}  ${mealItem.strIngredient2} </li>
                  <li> ${mealItem.strMeasure3}  ${mealItem.strIngredient3} </li>
                  <li> ${mealItem.strMeasure4}  ${mealItem.strIngredient4} </li>
                  <li> ${mealItem.strMeasure5}  ${mealItem.strIngredient5} </li>
                  <li> ${mealItem.strMeasure6}  ${mealItem.strIngredient6} </li>
                `;
    })
}
//  search bar + fetching data
const searchMeals = () => {
    const searchText = document.getElementById('search-field').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=a`
        // load data
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals));
}

const displayMeals = mealItemMatched => {
        const mealContainer = document.getElementById('mealsItem');
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
    // meal ingredients
const mealDetail = name => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a')
        .then(res => res.json())
        .then(data => displayIngredients(data.meals[0]));
}
const displayIngredients = mealIngred => {
    const mealContainer = document.getElementById('ingredients');
    mealContainer.innerHTML = `
    <div class="detail-style">
    <img class="img-style" src=" ${mealIngred.strMealThumb} "></img>
    <h3> ${mealIngred.strMeal} </h3>
    <h5> Ingredients </h5>
                 <ul>
                 <li> ${mealIngred.strMeasure1}  ${mealIngred.strIngredient1} </li>
                  <li> ${mealIngred.strMeasure2}  ${mealIngred.strIngredient2} </li>
                  <li> ${mealIngred.strMeasure3}  ${mealIngred.strIngredient3} </li>
                  <li> ${mealIngred.strMeasure4}  ${mealIngred.strIngredient4} </li>
                  <li> ${mealIngred.strMeasure5}  ${mealIngred.strIngredient5} </li>
                  <li> ${mealIngred.strMeasure6}  ${mealIngred.strIngredient6} </li>
                  </ul>
                  </div>
                `;
}
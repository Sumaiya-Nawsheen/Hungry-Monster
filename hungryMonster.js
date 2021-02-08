//  search bar + fetching data
const searchMeals = () => {
    const searchText = document.getElementById('search-field').value.trim();
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
        .catch(error => displayError('Sorry, it is not available !! Please try another meal!'));
}

const displayMeals = mealItemMatched => {
        const mealContainer = document.getElementById('mealsItem');
        mealContainer.innerHTML = '';
        mealItemMatched.forEach(meal => {
            const searchText = document.getElementById('search-field').value;
            if (searchText.split('${meal.strMeal}')) {
                const mealDiv = document.createElement('div');
                mealDiv.className = "mealsDiv";
                mealDiv.innerHTML = `
                <div  onclick="mealDetail('${meal.strMeal}')">
                <img class="img-style" src=" ${meal.strMealThumb} "></img>
                <br>
                <h5 class="meal-name"> ${meal.strMeal}</h5>
                </div>
                `;
                mealContainer.appendChild(mealDiv);
            }
        })

    }
    // meal ingredients
const mealDetail = name => {
    const url2 = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
    fetch(url2)
        .then(res => res.json())
        .then(data => displayIngredients(data.meals));
}
const displayIngredients = mealIngredients => {
    const mealContainer = document.getElementById('ingredients');

    mealContainer.innerHTML = '';
    mealIngredients.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.className = "detail-style";
        mealDiv.innerHTML = `
     <img class="img-style" src=" ${meal.strMealThumb} "></img>
    <h3> ${meal.strMeal} </h3>
    <h5> Ingredients </h5>
                 <ul>
                 <li> ${meal.strMeasure1}  ${meal.strIngredient1} </li>
                  <li> ${meal.strMeasure2}  ${meal.strIngredient2} </li>
                  <li> ${meal.strMeasure3}  ${meal.strIngredient3} </li>
                  <li> ${meal.strMeasure4}  ${meal.strIngredient4} </li>
                  <li> ${meal.strMeasure5}  ${meal.strIngredient5} </li>
                  <li> ${meal.strMeasure6}  ${meal.strIngredient6} </li>
                  </ul>
                 `;
        mealContainer.appendChild(mealDiv);
    })
}
const displayError = error => {
    const errorTag = document.getElementById('error-message');
    errorTag.innerText = error;
}
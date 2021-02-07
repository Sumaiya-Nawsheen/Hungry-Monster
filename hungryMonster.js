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
            <img class="img-style" src=" ${mealItem.strMealThumb} "></img>
            <br>
            <h5 class="meal-name"> ${mealItem.strMeal}</h5>
            `;
        newDiv.innerHTML = mealMenu;
        div.appendChild(newDiv);

    });
}
fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
    .then(res => res.json())
    .then(data => {

            const items = data.meals;
            for (let i = 0; i < items.length; i++) {
                console.log(items[i].strMeal);
                // const element = array[i];

            }
        }

        // console.log(data.meals[0].strMeal)



    );
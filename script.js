const searchInput = document.getElementById('search-input');
const mealList = document.getElementById('meal');
const mealDetailsContent = document.querySelector('.meal-details-content');
const recipeCloseBtn = document.getElementById('recipe-close-btn');
const titleText = document.getElementById('title-search');
const closeSearchIcon = document.getElementById('search-btn-icon');

getMealList();
// event listeners
searchInput.addEventListener('input', getMealList);
mealList.addEventListener('click', getMealRecipe);
recipeCloseBtn.addEventListener('click', () => {
    mealDetailsContent.parentElement.classList.remove('showRecipe');
});

closeSearchIcon.addEventListener('click', () => {
    searchInput.value="";
    getMealList();
});



function getMealList() {
   
    const searchInputTxt = document.getElementById('search-input').value.trim();
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInputTxt}`;
    if(searchInputTxt.length > 0) {
        titleText.innerHTML=`Search Result of  : "${searchInputTxt}"`;
        closeSearchIcon.style.display='block';
    }
    else {
        titleText.innerHTML="Pick Your Meals";
        closeSearchIcon.style.display='none';
    }
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let html = "";
            console.log(data);
            if (data.meals) {
                data.meals.forEach(meal => {
                    html += `
                        <div class="meal-item" data-id="${meal.idMeal}">
                            <div class="meal-img">
                                <img src="${meal.strMealThumb}" alt="food">
                            </div>
                            <div class="meal-name">
                                <h3>${meal.strMeal}</h3>
                                <a href="#" class="recipe-btn">Get Recipe</a>
                            </div>
                        </div>
                    `;
                });
                mealList.classList.remove('notFound');
            } else {
                html = "Sorry, we didn't find any meal!";
                mealList.classList.add('notFound');
            }

            mealList.innerHTML = html;
        })
        .catch(error => {
            console.error('Error fetching meal data:', error);
        });
   
}




// get recipe of the meal
function getMealRecipe(e){
    e.preventDefault();
    if(e.target.classList.contains('recipe-btn')){
        let mealItem = e.target.parentElement.parentElement;
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`)
        .then(response => response.json())
        .then(data => mealRecipeModal(data.meals));
    }
}

// create a modal
function mealRecipeModal(meal){
    console.log(meal);
    meal = meal[0];
    let html = `
        <h2 class = "recipe-title">${meal.strMeal}</h2>
        <p class = "recipe-category">${meal.strCategory}</p>
        <div class = "recipe-instruct">
            <h3>Instructions:</h3>
            <p>${meal.strInstructions}</p>
        </div>
        <div class = "recipe-meal-img">
            <img src = "${meal.strMealThumb}" alt = "">
        </div>
        <div class = "recipe-link">
            <a href = "${meal.strYoutube}" target = "_blank" class="recipe-btn">Watch Video</a>
            <a href= "${meal.strSource}" target = "_blank" class="recipe-btn">Link of Recipe</a>
        </div>
    `;
    mealDetailsContent.innerHTML = html;
    mealDetailsContent.parentElement.classList.add('showRecipe');
}

# Recipe-Search
This web application allows users to search for recipes based on ingredients or keywords. It utilizes an external API to fetch recipe data and presents the results in an organized manner.

# Features:
Search: Users can input ingredients or keywords to search for recipes.
Recipe Display: The application displays a list of meals matching the search criteria, including meal name and image.
Recipe Details: Clicking on a meal displays its details, including instructions, category, image, and options to watch a video or view the recipe source.
Modal: The recipe details are shown in a modal for a better user experience.
Responsive Design: The application is designed to work well on various screen sizes.

# Technologies Used:
- HTML
- CSS
- JavaScript

# How it Works:
Search: When users input ingredients or keywords and click the search button, the application fetches data from an external API (https://www.themealdb.com/api/json/v1/1/search.php).
Display Results: If meals matching the search criteria are found, they are displayed on the page along with their images and names. If no meals are found, a message indicating no results is shown.
View Recipe: Users can click on the "Get Recipe" button for any meal to view its details.
Recipe Details: Upon clicking, the application fetches additional data for the selected meal from the API (https://www.themealdb.com/api/json/v1/1/lookup.php) and displays the recipe details in a modal.
Modal: The modal provides a user-friendly interface to view recipe instructions, category, image, and options to watch a video or view the recipe source.
Close Modal: Users can close the modal by clicking the close button.

# How to Use:
Clone this repository to your local machine.
Open the index.html file in your web browser.
Input ingredients or keywords in the search bar and click the search button.
View the list of meals matching your search criteria.
Click on the "Get Recipe" button for any meal to view its details in a modal.
Enjoy exploring new recipes with Recipe Finder!





